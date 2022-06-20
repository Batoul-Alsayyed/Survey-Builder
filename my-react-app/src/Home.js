import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate();
  return (
    <div>
      This is homepage
      <button onClick={() => {
        navigate("/Survey");
      }}>Go to Surveys page</button>
    </div>
  )
}
