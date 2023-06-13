import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "./context/user";

function TeacherList () {

    const [teachers, setTeachers] = useState([]);
    const [addRestaurant, setAddRestaurant] = useState(false);
    const [errors, setErrors] = useState([])
    const {currentUser, setCurrentUser} = useContext(UserContext);

    useEffect(() => {
        fetch(`schools/${currentUser.school[0].id}`)
        .then((response) => {
            if (response.ok) {
              response.json().then((data) => {
                setTeachers(data);
              });
            } else {
              response.json().then((e) => setErrors(e.errors));
            }
          });
      }, [setTeachers]);
      
    //   let display_teachers = teachers.map((t) => (
    //     <div key={t.id}>
            
    //         <br></br>
    //         <h3>{t.name}</h3>
    //         <p>{r.cuisine}</p>
    //         <p>{r.description}</p>
    //         <br></br>
    //     </div>
    //   ))

      return (
        <>
            {/* <br></br>
            <br></br>
            <h5>View</h5>
            <h5>Restaurants</h5>
            <h5>Below</h5>
            <br></br>
            <button id='addrestaurant' onClick={()=>setAddRestaurant(!addRestaurant)}>Add New Restaurant</button>
            <br></br>
            {addRestaurant ? (
              <NewRestaurant restaurants={restaurants} setrestaurants={setrestaurants} addRestaurant={addRestaurant} setAddRestaurant={setAddRestaurant}/> 
            ) : ( "")} */}
            {display_teachers}

            {/* <div>
                { errors.length <= 0 ? ("") : (
                        errors.map((err) => (
                <li key={err}>{err}</li>
                )))}
            </div> */}

        </>

    )
}

export default TeacherList;

