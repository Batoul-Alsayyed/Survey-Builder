import React from 'react'
import App from './App.css'
export default function Register() {
  return (
    <div className='container'>

    <h1>Register</h1>

    <div className='row'>
    <label>Full Name: </label>
    <br/>
    <input type="text"/>
    </div>

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

    <p>Already a member? <a href='#'>Login</a></p>
    <button className='RegisterBtn'>Register</button>

    </div>
  )
}
