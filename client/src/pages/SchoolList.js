import { useEffect , useState, useContext} from "react";
import { UserContext } from "../context/user";

function SchoolList () {

    const {currentUser} = useContext(UserContext);
    const [schools, setSchools] = useState([]);
    const [errors, setErrors] = useState([]);

    // let filtered_school = currentUser.auth_level == "admin" && currentUser.teachers[0].school.length<=0 ?  ("") : (currentUser.auth_level == "teacher" || "admin" ? (currentUser.teachers[0].school.id) : (currentUser.students[0].school.id))
  
    useEffect(() => {
        fetch("/schools")
        .then((response) => {
            if (response.ok) {
              response.json().then((data) => {
                setSchools(data);
              });
            } else {
              response.json().then((e) => setErrors(e.errors));
            }
          });
      }, []);

      return schools.length === 0 ? (<h1>You have no assigned Schools</h1>) : (
        <div>
        <h1>This Districts Schools</h1>
        {schools.map((s) => (
        <ul key={s.id}>
            {s.name}
            <br></br>
            {s.address}
            <br></br>
        </ul>
        ))}

        {/* <div>
            { errors.length <= 0 ? ("") : (
                errors.map((err) => (
            <li key={err}>{err}</li>
            )))}
        </div> */}

        </div>

    )
}

export default SchoolList;

