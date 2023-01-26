import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import {useState} from "react"
import axios from "axios"


const Signup = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


console.log(username)
console.log(password)
console.log(email)

  function handleSubmit(e) {
    e.preventDefault();    
    axios.post('http://localhost:8000/users',
   { username : username,
    email : email,
    password : password },
    { 'content-type': 'application/json' }
    )
    .then(response => console.log(response))

  }

  return (
    <div className="signup">
    <div className='signupformframe'>
    <form onSubmit={handleSubmit}>
      <label>
        Username:<br/>
        <input className="inputforms"
          type="text"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:<br/>
        <input className="inputforms"
          type="password"
          placeholder="Password"
          value={password}
          
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:<br/>
        <input className="inputforms"
          type="email"
          value={email}
          placeholder='Email'

          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button className="homepagebuttons" type="submit">Sign Up</button>
    </form>
    </div>
    </div>
  );
}

export default Signup;
