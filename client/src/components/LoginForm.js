import React, { useState , useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from "../context/user";

function LoginForm({ setLoggedIn , setSignedup}) {

  const {setCurrentUser} = useContext(UserContext);

  const history = useHistory()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  
  function handleLogin(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setCurrentUser(user)
          setLoggedIn(true)
          history.push("/")
        });
      } else {
        response.json().then((e) => setErrors(e.errors));
      }
    });
  }

  return (
    <form onSubmit={handleLogin}>
      <div > 
        <label>Email</label>
        <input
          type="text"
          id="email"
          required placeholder='Email is Case Sensitive'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          id="password"
          required placeholder='Password is Case Sensitive'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button variant="fill" color="primary" type="submit">
          Login
        </button>
      </div>

      {/* <div>
      { errors.length <= 0 ? ("") : (
                errors.map((err) => (
          <li key={err}>{err}</li>
        )))}
      </div> */}

      <br></br>
      {/* <div id='log_button'> Don't Have an Account?
        <button onClick={()=>setSignedup(false)} variant="fill" color="primary" >
          SignUp
        </button>
      </div> */}

    </form>
  );
}

export default LoginForm;