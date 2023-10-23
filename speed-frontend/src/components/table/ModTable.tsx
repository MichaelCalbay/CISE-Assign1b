import React, { useState } from "react";
import { ModInterface } from "./ModInterface";
import axios from "axios";

interface ModRowProps {
  data: ModInterface;
}

const decisionOptions = ["Accepted", "Rejected"];

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
      participant: data.participant,
      doi: data.doi,
      decision: decision,
    };

    axios
      .post("http://cise-assign1b-six.vercel.app/article/confirmModeration", moderateData)
      .then((response) => {
        console.log("AnalystTable");
        console.log(response.data);

        axios
          .delete(
            `http://cise-assign1b-six.vercel.app/article/${data.customId}?type=suggested`
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

  const handleReject = () => {
    axios
      .delete(`http://cise-assign1b-six.vercel.app/article/${data.customId}?type=suggested`)
      .then((deleteResponse) => {
        console.log("Deleted:", deleteResponse.data);
        window.location.reload();
      })
      .catch((deleteError) => {
        console.error("Deletion Error:", deleteError);
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
      <td>
        <button type="submit" onClick={handleSubmit}>
          Accept
        </button>
      </td>
      <td>
        <button type="submit" onClick={handleReject}>
          Reject
        </button>
      </td>

    </tr>
  );
};

export default ModRow;
