import React, { useState } from "react";
import axios from "axios";
import { AnalystInterface } from "./AnalystInterface";

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
  const [SEPractise, setSEPractise] = useState(data.SEPractise);
  const [otherPractiseValue, setOtherPractiseValue] = useState("");
  const [claim, setClaim] = useState(data.claim);
  const [evidence, setEvidence] = useState(data.evidence);
  const [research, setResearch] = useState(data.research);

  const handleSEPracticeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSEPractise(event.target.value);
  };

  const handlePublish = () => {
    const publishData = {
      title: data.title,
      authors: data.authors,
      source: data.source,
      pubyear: data.pubyear,
      doi: data.doi,
      claim: claim,
      evidence: evidence,
      research: research,
      SEPractise: SEPractise,
    };
    axios
      .post("http://localhost:3032/article/publish", publishData)
      .then((response) => {
        console.log("AnalystTable")
        console.log(response.data);
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
      <td>{data.doi}</td>
      <td>
        <input
          type="text"
          value={claim}
          placeholder="Enter Claim"
          onChange={(e) => setClaim(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={evidence}
          placeholder="Enter Evidence"
          onChange={(e) => setEvidence(e.target.value)}
        />
      </td>
      <td>
        <input
            type="text"
            value={research}
            placeholder="Enter Research"
            onChange={(e) => setResearch(e.target.value)}
        />
      </td>
      <td>
        <select value={SEPractise} onChange={handleSEPracticeChange}>
          {SEPracticeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {SEPractise === "Other" && (
          <input
            type="text"
            placeholder="Enter SE Practice"
            value={otherPractiseValue}
            onChange={(e) => setOtherPractiseValue(e.target.value)}
          />
        )}
      </td>
      <td>
        <button
            type="submit"
            onClick={handlePublish}
        >
            Publish
        </button>
      </td>
    </tr>
  );
};

export default SERCAnalystRow;
