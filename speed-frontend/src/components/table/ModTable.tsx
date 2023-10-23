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
    title: title,
    authors: authors,
    source: source,
    pubyear: pubyear,
    doi: doi,
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
      <td><input
          type="text"
          value={title}
          placeholder={data.title}
          onChange={(e) => setTitle(e.target.value)}
        /></td>
      <td><input type="text" value={authors} placeholder={data.authors}onChange={(e) => setAuthors(e.target.value)}/></td>
      <td><input type="text" value={source} placeholder={data.source}onChange={(e) => setSource(e.target.value)}/></td>
      <td><input type="number" value={pubyear} placeholder={data.pubyear}onChange={(e) => setPubyear(e.target.value)}/></td>
      <td>
        <input type="text" value={doi} placeholder={data.doi} onChange={(e) => setDoi(e.target.value) }/>
      </td>
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