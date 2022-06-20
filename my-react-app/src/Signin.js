import Register from "./Register";
import { useNavigate } from "react-router-dom";
import { Router } from "react-router";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import React, { useState } from "react";

export default function Signin() {
  // let history = useHistory();
  <Routes>
    <Route path="/Register" element={<Register />} />
  </Routes>;

  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  const [data2, setData2] = useState(null);
  const [print2, setPrint2] = useState(false);

  function getData(event) {
    setData(event.target.value);
    //console.log(event.target.value);
    setPrint(false);
  }
  function getData2(event) {
    setData2(event.target.value);
    //console.log(event.target.value);
    setPrint2(false);
  }
  function signupOnClick() {
    console.log("clicked!");
    <BrowserRouter>
      var navigate = useNavigate(); navigate('/Register')
    </BrowserRouter>;
  }
  function registerOnClick(){
    setPrint(true);
    setPrint2(true);
    if (print && print2){
      console.log(data);
      console.log(data2);
    }
  }
  return (
    <div>
      <div className="container2">
        <h1>Login</h1>

        <div className="row">
          <label>Email : </label>
          <br />
          <input type="email" onChange={getData} />
        </div>

        <div className="row">
          <label>Password : </label>
          <br />

          <input type="text" onChange={getData2} />
        </div>

         {/* {
          print?
          <h1>{data}</h1>
          :null
        }

        {
          print2?
          <h1>{data2}</h1>
          :null
        } */}
        <p>
          Not a member?
          <button>Signup</button>
        </p>
        <button className="RegisterBtn" onClick={registerOnClick}>Sign-in</button>
      </div>
    </div>
  );
}
