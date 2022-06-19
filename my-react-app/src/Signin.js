import React from 'react'

export default function Signin() {
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

    <p>Not a member? <a href='#'>Signup</a></p>
    <button className='RegisterBtn'>Sign-in</button>

    </div>
    </div>
  )
}
