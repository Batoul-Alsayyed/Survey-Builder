import React from 'react'
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function Survey() {
    const [surveys, setSurveys] = useState([]);
    useEffect (() => {
            axios.get("http://127.0.0.1:8000/api/surveys").then(({data})=>{
            //console.log(data.surveys);
            setSurveys(data.surveys);
        });
    });  

  return (
    <div>
      <h1>Survey Name</h1>
      <table>
        <tbody>
        <tr>
            <th>Survey id</th>
            <th>Survey Name</th>

        </tr>

        {surveys.map((survey)=> {
            return (
                <tr key={survey.id}>
                <td>{survey.id}</td>
                <td>{survey.name}</td>
                <td><button>Add question</button></td>
                </tr>
            )
        })}

        


        </tbody>
      </table>

    </div>
  )
}
