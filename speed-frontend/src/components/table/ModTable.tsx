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
      console.log(response);
    })
    .then(response => {
      // Handle the response from the server
      console.log(response);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <tr>
      <td>{data.title}</td>
      <td>{data.authors}</td>
      <td>{data.source}</td>
      <td>{data.pubyear}</td>
      <td>
        {data.doi}</td>
      <td>
        <select value={decision} onChange={handleModDecision}>
          {decisionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
              
            </option>
          ))}
        </select>

      </td>
      <td>
      <button type="submit" onClick={handleSubmit}>
            Confirm Moderation
        </button>

      </td>
    </tr>
  );
};

export default ModRow;