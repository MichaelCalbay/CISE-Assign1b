import React from "react";
interface ModSubmitFormProps {
  headers: { key: string; label: string }[];
  data: any[];
}
const ModSubmitForm: React.FC<ModSubmitFormProps> = ({ headers, data }) => (
  <table>
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header.key}>{header.label}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => {
        if (row.name == "decision") {
          return (
            <tr>
              <td>AAASS</td>
            </tr>
          );
        } else if (row.name !== "decision") {
          return (
            <tr key={i}>
              {headers.map((header) => (
                <td key={header.key}>{row[header.key]}</td>
              ))}
            </tr>
          );
        }
      })}
    </tbody>
  </table>
);

export default ModSubmitForm;
