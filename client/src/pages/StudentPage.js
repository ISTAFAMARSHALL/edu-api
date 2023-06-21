import React, { useState , useContext} from "react";
// import PatronEditForm from "../components/PatronEditForm";
import { UserContext } from "../context/user";

function StudentPage ({ setLoggedIn }) {

    const {currentUser , setCurrentUser} = useContext(UserContext);

    // const [editAccount , setEdit] = useState(false)
    const [view, setView] = useState(false);

    return (
        
        <main>
    
        <h2> Hello Student {currentUser.students[0].name}</h2> 
        
        <img src={currentUser.image} alt={currentUser.students[0].name}/>

        <ul>
        
        {currentUser.course_enrollments.length<=0 ? (
            
        <>
            <h2>You have no classes</h2>
        </>
        
        ) : (
            
        <>
                
        <h2>Your Classes</h2>
                
        {currentUser.course_enrollments.map((course) => {
                
        // let student_list = course.students.map((s) => {(
        //     <>    
        //     <ol>
        //         Name: {s.name}
        //         <br></br>
        //         Birthday: {s.birthday}
        //         <br></br>
        //         Email: {s.email}
        //         <br></br>
        //         Address: {s.address}
        //     </ol>
        //     <br></br>
        //     </>
        // )) }

        return (
                        
        <div key={course.id}>
            
        <div>

            <li>
            Course: {course.teacher[0].subject}
            <br></br>
            Teacher: {course.teacher[0].name}
            <br></br>
            </li>

        </div>

        </div> 

        )})}
        </>)}
        </ul> 


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
        
        <br></br>
    
    </main>

    )
}

export default StudentPage;

