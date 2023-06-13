import { useEffect , useState, useContext} from "react";
import React from 'react';
import { Route, Switch} from "react-router-dom"
import { useHistory } from 'react-router-dom';
import Login from "./pages/Login"
import NavBar from "./components/NavBar"
import TeacherPage from "./pages/TeacherPage"
import { UserContext } from "./context/user";
import StudentPage from "./pages/StudentPage";

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const {currentUser, setCurrentUser} = useContext(UserContext);

  const history = useHistory()

  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setCurrentUser(data);
          setLoggedIn(true)});
    }});
  }, [setCurrentUser]);

  return (
    <div>
      <h1>S.T.I.M.S</h1>
      <h3>Student Teacher Integrated Management System</h3>
        
      {!loggedIn ? (
        <Login setLoggedIn={setLoggedIn}/>
      ) 
      : 
      (
      <>

        <NavBar setLoggedIn={setLoggedIn} />

        <Switch>

        <Route path="/">

        { currentUser.auth_level != "teacher" ? ("") : (<TeacherPage setLoggedIn={setLoggedIn}/>)}

        { currentUser.auth_level != "student" ? (""): (<StudentPage/>) }

        </Route> 

        </Switch>
          
      </>
      
      )}  
        
    </div>
  );
}

export default App;
