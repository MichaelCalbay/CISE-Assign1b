import React, { useState } from "react";
import { ModInterface } from "./ModInterface";
import axios from "axios";


interface ModRowProps {
  data: ModInterface;
}

const decisionOptions = [
  "Accepted",
  "Rejected",
];

const ModRow: React.FC<ModRowProps> = ({ data }) => {
  const [decision, setDecision] = useState(data.decision);
  const [otherDecision, setOtherPracticeValue] = useState("");
  //const [claim, setClaim] = useState(data.claim);
  //const [evidence, setEvidence] = useState(data.evidence);

  const handleModDecision = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDecision(event.target.value);
  };

const handleSubmit = () => {
  const publishData = {
    title: data.title,
    authors: data.authors,
    source: data.source,
    pubyear: data.pubyear,

    decision: decision === "Accepted" ? otherDecision : decision,
  };

  axios
    .post("http://localhost:3032/article/confirmModeration", 
    publishData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

  return (
    <tr>
      <td><input type="text" defaultValue={data.title} /></td>
      <td><input type="text" defaultValue={data.authors}/></td>
      <td><input type="text" defaultValue={data.source}/></td>
      <td><input type="text" defaultValue={data.pubyear}/></td>
      <td>
        <input type="text" defaultValue={data.doi} />
      </td>
      <td>
        <select value={decision} onChange={handleModDecision} defaultValue={"Accepted"}>
          {decisionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

      </td>
      <td>
      <form  onSubmit={handleSubmit}>
      <input type="submit" />
      </form>
      </td>
    </tr>
  );
};

export default ModRow;