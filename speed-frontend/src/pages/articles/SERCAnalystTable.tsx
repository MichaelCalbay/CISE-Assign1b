import React, { useEffect, useState } from 'react';
//import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function SubmissionForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => JSON.stringify(data);
    

const SERCAnalystTable: React.FC = () => {
    const [data, setData] = useState([]);
    //Need to put API/MongoDB URI here so I can link.
    const apiUrl = '/api/data';

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []); 

    return (
        <div>
            <h1>SERC-Analyst QUEUE</h1>
            <table>
                <thead>
                    <tr>
                        <th>FUCK</th>
                        <th>THIS</th>
                        <th>STUPID</th>
                        <th>PAPER ON GOD FRFR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                            <td>NEED DATA 
                                <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("title")} placeholder="Title" />
                                <input type="submit" />
                                </form>
                            </td>
                            <td>URI HERE FROM </td>
                            <td>MODERATED TABLES </td>
                            <td>TO POPULATE </td>
                        </tr>
                   
                </tbody>
            </table>            
        </div>
    );
};
}
//export default SERCAnalystTable;





//This is a placeholder
// const Analysis = () => {
//     return (
//       <div>
//         <h1>Articles for Analysis</h1>
//         <p>This page contains a list of articles which are analysed or yet to be analysed</p>
//       </div>
//     );
//   };
  
//   export default Analysis;