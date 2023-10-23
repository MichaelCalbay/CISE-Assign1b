import React, { useState } from "react";
import { ModInterface } from "./ModInterface";
import axios from "axios";


interface ModRowProps {
  data: ModInterface;
}

const decisionOptions = [
  "Accepted",
  "Rejected"
];

const ModRow: React.FC<ModRowProps> = ({ data }) => {

  const [title, setTitle] = useState(data.title);
  const [authors, setAuthors] = useState(data.authors);
  const [source, setSource] = useState(data.source);
  const [pubyear, setPubyear] = useState(data.pubyear);
  const [doi, setDoi] = useState(data.doi);
  const [decision, setDecision] = useState(data.decision);
  
  const handleModDecision = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDecision(event.target.value);
  };

const handleSubmit = () => {
  const moderateData = {
    customId: data.customId,
    title: data.title,
    authors: data.authors,
    source: data.source,
    pubyear: data.pubyear,
    doi: data.doi,
    decision: decision
  };

  axios
    .post("http://localhost:3032/article/confirmModeration", 
    moderateData)
    .then((response) => {
      console.log(response.data);

      axios
      .delete(`http://localhost:3032/article/${data.customId}`)
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
    <tr style={{ border: '1px solid darkgrey' }}>
      <th style={{ border: '1px solid darkgrey', padding: '8px' }}><strong>{data.title}</strong></th>
      <th style={{ border: '1px solid darkgrey', padding: '8px' }}><strong>{data.authors}</strong></th>
      <th style={{ border: '1px solid darkgrey', padding: '8px' }}><strong>{data.source}</strong></th>
      <th style={{ border: '1px solid darkgrey', padding: '8px' }}><strong>{data.pubyear}</strong></th>
      <th style={{ border: '1px solid darkgrey', padding: '8px' }}><strong>{data.doi}</strong></th>
      <th style={{ border: '1px solid darkgrey', padding: '8px' }}>
        <select value={decision} onChange={handleModDecision}>
          {decisionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </th>
      <th style={{ border: '1px solid darkgrey', padding: '8px' }}>
        <button type="submit" onClick={handleSubmit}>
          Send to Analyst
        </button>
      </th>
    </tr>
  );
};

export default ModRow;