import { useState , useContext} from "react";
// import PatronEditForm from "../components/PatronEditForm";
import { UserContext } from "../context/user";
import TeacherForm from "../components/TeacherForm";
import {NavLink} from 'react-router-dom'

function AdminPage ({ setLoggedIn }) {

    const {currentUser , setCurrentUser} = useContext(UserContext);

    const [addTeacher , setAddTeacher] = useState(false)
    const [addStudent , setAddStudent] = useState(false)
    const [view, setView] = useState(false)


    return (

    <main>
        
    <h3>Hello Administrator {currentUser.teachers[0].name}</h3>

    <ol>
        {currentUser.teachers[0].school.length<=0 ? (        
        <>
        <h2>You are not assigned a School</h2>

        {/* onClick={()=>setEdit(!editAccount)} */}

        <button  variant="fill" color="primary" >
        Add School
        </button>

        </>
        
        ) : (
            
        <>
        
        <h2>Your School is {currentUser.teachers[0].school.name} </h2>
        
        
    
        </>

        
        
        )}
        

        <button onClick={()=>setAddTeacher(!addTeacher)} variant="fill" color="primary" >
        Add Teacher
        </button>

        <button  variant="fill" color="primary" >
            Add Student
        </button>


       {addTeacher? ( <TeacherForm setAddTeacher={setAddTeacher} addTeacher={addTeacher} /> ) : ("") }
                
    </ol> 


            
    </main>

    )
}

export default AdminPage;







        {/* {!editAccount ? (
                
        <div>
        
        <p>{currentUser.phone_number}</p>
        <p>{currentUser.email_address}</p>
        <button onClick={()=>setEdit(!editAccount)} variant="fill" color="primary" >
        Edit Account Info
        </button>
                        
        </div>
            
        ) : (
                
        <PatronEditForm currentUser={currentUser} setCurrentUser={setCurrentUser} setEdit={setEdit}/>
        )} */}