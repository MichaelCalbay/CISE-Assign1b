import React, { useState } from "react";
import { AnalystInterface } from "../../components/table/AnalystInterface";


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

  const handleSEPracticeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSEPractice(event.target.value);
  };

  return (
    <tr>
      <td>{data.title}</td>
      <td>{data.authors}</td>
      <td>{data.source}</td>
      <td>{data.pubyear}</td>
      <td>
        <input type="text" value={data.claim} />
      </td>
      <td>
        <input type="text" value={data.evidence} />
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
          <input type="text" placeholder="Enter SE Practice" />
        )}
      </td>
    </tr>
  );
};

export default SERCAnalystRow;
