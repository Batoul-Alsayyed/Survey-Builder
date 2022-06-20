import React from 'react'
import {useNavigate, useParams } from "react-router-dom"
import axios from 'axios';
import { useState, useEffect } from 'react'

export default function SpecificSurvey() {
    //let navigate = useNavigate();
    let {id} = useParams();
    const [survey, setSurvey] = useState([]);

    useEffect (() => {
        let data = new FormData();
        data.append('survey_id', id);
    
        axios({
            method: 'POST',
            url:'http://127.0.0.1:8000/api/getSurvey',
            data: data
        }).then(function(survey){
            if(survey.data.response!="Survey not found"){
                    // console.log("Suceess")
                    // console.log(survey.data)
                    setSurvey(survey.data.questions);
                    return;
            }
            else{
                alert("Wrong survey id!");
            }
        });
    });


  return (
    <div>
      Survey {id} Details 
      
      {survey.map((question)=> {
            return (
                <tr key={question.id}>
                <td> Question id: {question.id} </td>
                <td> Question type: {question.type} </td>
                <td> Question content: {question.content} </td>
                
                
                </tr>
            )
        })}

    </div>
  )
}
