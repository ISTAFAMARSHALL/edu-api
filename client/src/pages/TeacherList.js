import { useEffect , useState, useContext} from "react";
import { UserContext } from "../context/user";

function TeacherList () {

    const {currentUser} = useContext(UserContext);
    const [school, setSchool] = useState([]);
    const [errors, setErrors] = useState([]);

    let filtered_school = currentUser.auth_level == "admin" && currentUser.teachers[0].school.length<=0 ?  ("") : (currentUser.auth_level == "teacher" || "admin" ? (currentUser.teachers[0].school.id) : (currentUser.students[0].school.id))
  
    useEffect(() => {
        fetch(`schools/${filtered_school}`)
        .then((response) => {
            if (response.ok) {
              response.json().then((data) => {
                setSchool(data);
              });
            } else {
              response.json().then((e) => setErrors(e.errors));
            }
          });
      }, []);

      return currentUser === undefined ? (<h1>You have no assigned Schools</h1>) : (
        <div>
        <h1>All of {school.name} Teachers</h1>

        {currentUser.auth_level == "admin" ? (<button  variant="fill" color="primary" >
            Add Teacher
        </button>) : ("")}

        {school.length === undefined ? (school.teachers.map((t) => (
        <ul key={t.id}>
            {t.name}
            <br></br>
            {t.subject}
            <br></br>
            {t.email}
        </ul>
        ))) : ("") }

        {/* <div>
            { errors.length <= 0 ? ("") : (
                errors.map((err) => (
            <li key={err}>{err}</li>
            )))}
        </div> */}

        </div>

    )
}

export default TeacherList;

