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

  const handleSEPracticeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSEPractise(event.target.value);
  };

  const handlePublish = () => {
    const publishData = {
      title: data.title,
      authors: data.authors,
      source: data.source,
      pubyear: data.pubyear,
      participant: data.participant,
      doi: data.doi,
      claim: claim,
      evidence: evidence,
      research: research,
      SEPractise: SEPractise,
    };

    axios
      .post("http://localhost:3032/article/publish", publishData)
      .then((response) => {
        console.log("AnalystTable");
        console.log(response.data);

        axios
          .delete(
            `http://localhost:3032/article/${data.customId}?type=moderated`
          )
          .then((deleteResponse) => {
            console.log("Deleted:", deleteResponse.data);
            window.location.reload();
          })
          .catch((deleteError) => {
            console.error("Deletion Error:", deleteError);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <tr>
      <td style={{ border: '1px solid darkgrey', padding: '8px' }}>{data.customId}</td>
      <td style={{ border: '1px solid darkgrey', padding: '8px' }}>{data.title}</td>
      <td style={{ border: '1px solid darkgrey', padding: '8px' }}>{data.authors}</td>
      <td style={{ border: '1px solid darkgrey', padding: '8px' }}>{data.source}</td>
      <td style={{ border: '1px solid darkgrey', padding: '8px' }}>{data.pubyear}</td>
      <td style={{ border: '1px solid darkgrey', padding: '8px' }}>{data.doi}</td>
      <td style={{ border: '1px solid darkgrey' }}>
        <input
          type="text"
          value={claim}
          placeholder="Enter Claim"
          onChange={(e) => setClaim(e.target.value)}
        />
      </td>
      <td style={{ border: '1px solid darkgrey' }}>
        <input
          type="text"
          value={evidence}
          placeholder="Enter Evidence"
          onChange={(e) => setEvidence(e.target.value)}
        />
      </td>
      <td style={{ border: '1px solid darkgrey' }}>
        <input
          type="text"
          value={research}
          placeholder="Enter Research"
          onChange={(e) => setResearch(e.target.value)}
        />
      </td>
      <td style={{ border: '1px solid darkgrey' }}>
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
      <td style={{ border: '1px solid darkgrey' }}>
        <button type="submit" onClick={handlePublish}>
          Publish
        </button>
      </td>
    </tr>
  );
};

export default SERCAnalystRow;
