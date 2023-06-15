import { useState, useContext} from "react";
import { UserContext } from "../context/user";



function StudentForm({setAddStudent,addStudent, disabled , setDisabled}) {

    const [name, setStudentsName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("")
    const [authLevel, setAuthLevel] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordConfirmation] = useState("")

    const [errors, setErrors] = useState([])
    const {currentUser} = useContext(UserContext);

    const newStudent ={
        name,
        address,
        email,
        auth_level: "student",
        birthday,
        school_id: currentUser.teachers[0].school.id,
        password,
        password_confirmation,
    }

    function handleAddStudent(e) {
        e.preventDefault();

        fetch("/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudent)
            }).then((response) => {
          if (response.ok) {
            response.json().then((data) => {
            setAddStudent(!addStudent)
            setDisabled(false)
            });
          } else {
            response.json().then((e) => setErrors(e.errors));
          }
        });
    }

  return (
    <form  onSubmit={handleAddStudent}>

    <div id='newRestaurant'>
      <label>Students Name </label>
        <input 
          type="text"
          value={name}
          placeholder='Please Enter Restaurant Name'
          onChange={(e) => setStudentsName(e.target.value)}
        />
    </div>

    <div>
      <label>Address </label>
        <input 
          type="text"
          value={address}
          placeholder='Please Enter Cuisine Type'
          onChange={(e) => setAddress(e.target.value)}
        />
    </div>

    <div>
      <label>Email </label>
        <input 
          type="text"
          value={email}
          placeholder='Please Enter a Description'
          onChange={(e) => setEmail(e.target.value)}
        />
    </div>

    <div>
      <label>Birthday </label>
        <input 
          type="text"
          value={birthday}
          placeholder='Please Enter a Description'
          onChange={(e) => setBirthday(e.target.value)}
        />
    </div>

    <div>
      <label>Password </label>
        <input 
          type="text"
          value={password}
          placeholder='Please Enter a Description'
          onChange={(e) => setPassword(e.target.value)}
        />
    </div>

    <div>
      <label>Password Confirmation </label>
        <input 
          type="text"
          value={password_confirmation}
          placeholder='Please Enter a Description'
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
    </div>

    <div>
        { errors.length <= 0 ? ("") : (
            errors.map((err) => (
              <li key={err}>{err}</li>
        )))}
    </div>

    <br></br>
    
    <button type="submit" value="Save">Save Student</button>

    <button onClick={()=>{
      setAddStudent(!addStudent);
      setDisabled(false);
      }} variant="fill" color="primary" >
      Cancel 
    </button>

  </form>
  )
}

export default StudentForm