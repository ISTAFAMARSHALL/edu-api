import React, { useState, useContext} from "react";
import { UserContext } from "../context/user";
import UploadWidget from "./UploadWidget";
import { Axios } from "axios";



function TeacherForm({setAddTeacher,addTeacher, disabled , setDisabled}) {

    const [name, setTeachersName] = useState("");
    const [address, setAddress] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("")
    const [authLevel, setAuthLevel] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordConfirmation] = useState("")
    const [uploadImage, setUploadImage] = useState("")

    


    const [errors, setErrors] = useState([])
    const {currentUser} = useContext(UserContext);

    const newTeacher ={
        name,
        address,
        subject,
        email,
        auth_level: authLevel,
        birthday,
        school_id: currentUser.teachers[0].school.id,
        password,
        password_confirmation,
    }

    const handleImage = () => {
      const formData = new FormData();
      formData.append("file", uploadImage);
      formData.append("upload_preset", "xxxgbh6u");

      Axios.post(
        "https://api.cloudinary.com/v1_1/denmhkyxq/image/upload",formData
      )
      .then((res) => {console.log(res)} )
    }

    function handleAddTeacher(e) {
        e.preventDefault();

        fetch("/teachers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTeacher)
            }).then((response) => {
          if (response.ok) {
            response.json().then((data) => {
            setAddTeacher(!addTeacher)
            setDisabled(false)
            });
          } else {
            response.json().then((e) => setErrors(e.errors));
          }
        });
        
    }

  return (
    <form  onSubmit={handleAddTeacher
    }>

    <div id='newRestaurant'>
      <label>Teachers Name </label>
        <input 
          type="text"
          value={name}
          placeholder='Please Enter Restaurant Name'
          onChange={(e) => setTeachersName(e.target.value)}
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
      <label>Subject </label>
        <input 
          type="text"
          value={subject}
          placeholder='Please Enter a Description'
          onChange={(e) => setSubject(e.target.value)}
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
      <input type="file"  value={uploadImage} onChange={(e) => {
        setUploadImage(e.target.files);
      }}/>
    </div>
    <UploadWidget/>

    <div>
      <label>Choose Level </label>
        <select value={authLevel} required placeholder='Select Reservation Day' onChange={(e) => setAuthLevel(e.target.value)}>
            <option value=""></option>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
        </select>
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
    
    <button type="submit" value="Save">Save Teacher</button>

    <button onClick={()=>{
      handleImage
      setAddTeacher(!addTeacher);
      setDisabled(false);
      }} variant="fill" color="primary" >
      Cancel 
    </button>

  </form>
  )
}

export default TeacherForm