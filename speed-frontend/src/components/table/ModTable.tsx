import React, { useState } from "react";
import { ModInterface } from "./ModInterface";
import axios from "axios";


interface ModRowProps {
  data: ModInterface;
}

const SEPracticeOptions = [
  "Accepted",
  "Rejected"
];

const ModRow: React.FC<ModRowProps> = ({ data }) => {
  
  const [decision, setDecision] = useState(data.decision);
  
  const handleModDecision = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDecision(event.target.value);
  };

  const handleSubmit = () => {
    //event.preventDefault();

    axios.post("http://localhost:3032/article/confirmModeration", {
      // Assuming you want to send the entire `data` object
      data,
      //decision: decision // Include the decision value
    })
    .then(response => {
      // Handle the response from the server
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
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
        <select value={decision} onChange={handleModDecision}>
          {SEPracticeOptions.map((option) => (
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