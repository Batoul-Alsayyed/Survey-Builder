import Register from "./Register";
import { useNavigate } from "react-router-dom";
import { Router } from "react-router";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import axios from 'axios';
import React, { useState } from "react";

export default function Signin() {
  let navigate = useNavigate();

  // let history = useHistory();
  <Routes>
    <Route path="/Register" element={<Register />} />
  </Routes>;

  const [data1, setData] = useState(null);
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
      console.log(data1);
      console.log(data2);

      let data = new FormData();
      data.append('email', data1);
      data.append('password', data2);
  
      axios({
          method: 'POST',
          url:'http://127.0.0.1:8000/api/auth/login',
          data: data
      }).then(function(user){
          if(user.data.response!="User Not Found"){
                  console.log("logged in")
                  console.log(user.data.user)
                  if (user.data.user.type === "admin"){
                    navigate("/admin")
                  }
          }
          else{
              alert("Wrong email or password!");
          }
      });

      
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
