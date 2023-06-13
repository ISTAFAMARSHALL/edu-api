import { useState , useContext} from "react";
// import PatronEditForm from "../components/PatronEditForm";
import { UserContext } from "../context/user";

function TeacherPage ({ setLoggedIn }) {

    const {currentUser , setCurrentUser} = useContext(UserContext);

    // const [editAccount , setEdit] = useState(false)
    const [view, setView] = useState(false)
    
    console.log(currentUser)

    return (

    <main>
        
    <h3>Hello {currentUser.teachers[0].name}</h3>

    <ol>{currentUser.student_classes.length<=0 ? (        
    <>
        <h2>You have no classes</h2>
    </>
        
    ) : (
            
    <>
                
    <h2>Your Classes</h2>
                
    {currentUser.student_classes.map((course) => {
        let student_list = course.students.map((s) => (
        <>
        <br></br>
        <ol>
        Name: {s.name}
        <br></br>
        Birthday: {s.birthday}
        <br></br>
        Email: {s.email}
        <br></br>
        Address: {s.address}
        </ol>
        </>
    )) 

    return (
                            
        <div key={course.id}>

        <li >
        Course Name: {currentUser.teachers[0].subject}
        <br></br>
        Time: {course.time}
        <br></br>
        </li>
        <br></br>
        
        <button onClick={()=>setView(!view)} variant="fill" color="primary" >
        View Your Student List
        </button>
        
        <br></br>
        {!view ? ( "" ):student_list}

        </div> 

        )})}


        </>
        )}
            
        </ol> 


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
            
        </main>

    )
}

export default TeacherPage;

