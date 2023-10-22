import React, { useState } from "react";
import { AnalystInterface } from "../../components/table/AnalystInterface";
import axios from "axios";

interface SERCAnalystRowProps {
  data: AnalystInterface;
}

const SEPracticeOptions = [
  "Code Review",
  "Agile",
  "Waterfall",
  "Continuous Development",
  "Other",
];

const SERCAnalystRow: React.FC<SERCAnalystRowProps> = ({ data }) => {
  const [sePractice, setSEPractice] = useState(data.SEPractise);
  const [otherPracticeValue, setOtherPracticeValue] = useState("");
  const [claim, setClaim] = useState(data.claim);
  const [evidence, setEvidence] = useState(data.evidence);

  const handleSEPracticeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSEPractice(event.target.value);
  };

  const handlePublish = () => {
    const publishData = {
      title: data.title,
      authors: data.authors,
      source: data.source,
      pubyear: data.pubyear,
      claim: claim,
      evidence: evidence, 
      research: data.research,
      SEPractise: sePractice === "Other" ? otherPracticeValue : sePractice,
    };

    axios
      .post("http://localhost:3032/article/publish", publishData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <tr>
      <td>{data.title}</td>
      <td>{data.authors}</td>
      <td>{data.source}</td>
      <td>{data.pubyear}</td>
      <td>
        <input
          type="text"
          value={claim}
          onChange={(e) => setClaim(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={evidence}
          onChange={(e) => setEvidence(e.target.value)}
        />
      </td>
      <td>
        <input type="text" value={data.research} />
      </td>
      <td>
        <select value={sePractice} onChange={handleSEPracticeChange}>
          {SEPracticeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {sePractice === "Other" && (
          <input
            type="text"
            placeholder="Enter SE Practice"
            value={otherPracticeValue}
            onChange={(e) => setOtherPracticeValue(e.target.value)}
          />
        )}
      </td>
      <td>
        <button onClick={handlePublish}>Publish</button>
      </td>
    </tr>
  );
};

export default SERCAnalystRow;
