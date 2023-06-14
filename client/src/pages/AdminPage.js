import { useState , useContext} from "react";
// import PatronEditForm from "../components/PatronEditForm";
import { UserContext } from "../context/user";

function AdminPage ({ setLoggedIn }) {

    const {currentUser , setCurrentUser} = useContext(UserContext);

    // const [editAccount , setEdit] = useState(false)
    const [view, setView] = useState(false)


    return (

    <main>
        
    <h3>Hello Administrator {currentUser.teachers[0].name}</h3>

    <ol>{currentUser.teachers[0].school.length<=0 ? (        
    <>
        <h2>You are not assigned a School</h2>
    </>
        
    ) : (
            
    <>
                
    <h2>Your School is {currentUser.teachers[0].school.name} </h2>
                
    {currentUser.student_classes.map((course) => {
        let student_list = course.students.map((s) => (
        <div key={s.id}>
            <ul>
                <li>{s.name}</li>
                <li>Birthday: {s.birthday}</li>
                <li>Email: {s.email}</li>
                <li>Address: {s.address}</li>
                <br></br>
            </ul>
        </div>
    )) 

    return (
                            
        <div key={course.id}>

        <>
        Course Name: {currentUser.teachers[0].subject}
        <br></br>
        Time: {course.time}
        <br></br>
        </>
        <br></br>
        
        <button onClick={()=>setView(!view)} variant="fill" color="primary" >
        View Your Student List
        </button>
        
        <br></br>
        <br></br>

        {!view ? ( "" ) : student_list}

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

export default AdminPage;

