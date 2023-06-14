import { useState, useContext} from "react";
import { UserContext } from "../context/user";



function TeacherForm() {

    const [restaurantName, setRestaurantName] = useState("")
    const [restaurantCuisine, setRestaurantCuisine] = useState("");
    const [restaurantDescription, setRestaurantDescription] = useState("");

    const [errors, setErrors] = useState([])
    const {currentUser} = useContext(UserContext);

    const newRestaurantInfo ={
        name: restaurantName,
        cuisine: restaurantCuisine,
        description: restaurantDescription,
    }

    function handleNewRestaurants(e) {
        e.preventDefault();

        fetch("/teachers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newRestaurantInfo)
            }).then((response) => {
          if (response.ok) {
            response.json().then((data) => {

            });
          } else {
            response.json().then((e) => setErrors(e.errors));
          }
        });
    }

  return (
    <form  onSubmit={handleNewRestaurants}>

    <div id='newRestaurant'>
      <label>Please Enter Restaurant Name </label>
        <input 
          type="text"
          value={restaurantName}
          placeholder='Please Enter Restaurant Name'
          onChange={(e) => setRestaurantName(e.target.value)}
        />
    </div>

    <div>
      <label>Please Enter Cuisine Type </label>
        <input 
          type="text"
          value={restaurantCuisine}
          placeholder='Please Enter Cuisine Type'
          onChange={(e) => setRestaurantCuisine(e.target.value)}
        />
    </div>

    <div>
      <label>Please Enter a Description </label>
        <input 
          type="text"
          value={restaurantDescription}
          placeholder='Please Enter a Description'
          onChange={(e) => setRestaurantDescription(e.target.value)}
        />
    </div>

    <div>
        { errors.length <= 0 ? ("") : (
            errors.map((err) => (
              <li key={err}>{err}</li>
        )))}
    </div>

    <br></br>
    
    <button type="submit" value="Save">Create Restaurant</button>

  </form>
  )
}

export default TeacherForm