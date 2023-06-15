import React, { useState , useContext} from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from "../context/user";

function MyInfoPage() {

  const {currentUser , setCurrentUser} = useContext(UserContext)

  const history = useHistory()

  const [email, setemail] = useState(currentUser.email);
  const [edit, setEdit] = useState(false);
  const [errors, setErrors] = useState([]);

  
  function handleSignUp(e) {
    e.preventDefault();
    fetch(`users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          history.push("/");
          setCurrentUser(user)
        });
      } else {
        response.json().then((e) => setErrors(e.errors));
      }
    });}
    
    return !edit ? (
    
    <div>

        <br></br>

        Name: {currentUser.auth_level !== "teacher" && currentUser.auth_level !== "admin" ? ("") : (currentUser.teachers[0].name)}{currentUser.auth_level !== "student" ? ("") : (currentUser.students[0].name)}

        <br></br>

        Address: {currentUser.auth_level !== "teacher" && currentUser.auth_level !== "admin" ? ("") : (currentUser.teachers[0].address)}
        { currentUser.auth_level !== "student" ? ("") : (currentUser.students[0].address)}

        <br></br>

        Email Address / Username: {email}
        <br></br>

        School: 
        {currentUser.auth_level !== "teacher" && currentUser.auth_level !== "admin" ? ("") : (currentUser.teachers[0].school.name)}

        {currentUser.auth_level !== "student" ? ("") : (currentUser.students[0].school.name)}

        <br></br>
        <br></br>

        <button onClick={()=>setEdit(!edit)} variant="fill" color="primary" >
        Edit Account Info
        </button>

    </div>
    ) : (
    <form onSubmit={handleSignUp}>
        <br></br>
        {/* <div>
        <label>Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>address</label>
        <input
          type="text"
          id="phoneNumber"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div> */}

      <div>
        <label>Email Address / Username</label>
        <input
          type="text"
          id="emailAddress"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </div>

      <div>
        <button variant="fill" color="primary" type="submit">
          Submit
        </button>
      </div>

      <button onClick={()=>setEdit(!edit)} variant="fill" color="primary" >
        Cancel Edit
      </button>

      <div>
        { errors.length <= 0 ? ("") : (
                errors.map((err) => (
          <li key={err}>{err}</li>
        )))}
      </div>

    </form>
  );
}

export default MyInfoPage;