import React from 'react'
import Register from './Register';
import { useNavigate } from 'react-router-dom';
import { Router } from 'react-router';
import { BrowserRouter, Route,Routes, Link } from "react-router-dom";


export default function Signin() {
// let history = useHistory();
        <Routes>
          <Route path="/Register" element={<Register />} />

        </Routes>
  function signupOnClick(){
    console.log("clicked!");
    <BrowserRouter>
    var navigate = useNavigate();
    navigate('/Register')
    </BrowserRouter>
    
  }
  return (
    <div>
      <div className='container2'>

    <h1>Login</h1>

    <div className='row'>
    <label>Email : </label>
    <br/>
    <input type="email"/>
    </div>
    
    <div className='row'>
    <label>Password : </label>
    <br/>

    <input type="text"/>
    </div>

    <p>Not a member? 
    <button onClick={signupOnClick}>Signup</button>
    </p>
    <button className='RegisterBtn'>Sign-in</button>

    </div>
    </div>
    
  )

  
}
