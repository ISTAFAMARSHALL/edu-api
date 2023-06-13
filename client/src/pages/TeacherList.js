import { useEffect , useState, useContext} from "react";
import { UserContext } from "../context/user";

function TeacherList () {

    const {currentUser} = useContext(UserContext);
    const [school, setSchool] = useState([]);
    const [errors, setErrors] = useState([]);

    let filtered_school = currentUser.school[0] === undefined ? ( 0 ) : ( currentUser.school[0].id )
  
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

      return currentUser.school[0] === undefined ? (<h1>You have no assigned Schools</h1>) : (
        <div>
        <h1>All of {school.name} Teachers</h1>
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

