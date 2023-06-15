import { useEffect , useState, useContext} from "react";
import React from 'react';
import { Route, Switch} from "react-router-dom"
import Login from "./pages/Login"
import NavBar from "./components/NavBar"
import TeacherPage from "./pages/TeacherPage"
import { UserContext } from "./context/user";
import StudentPage from "./pages/StudentPage";
import TeacherList from "./pages/TeacherList";
import StudentList from "./pages/StudentsList";
import SchoolList from "./pages/SchoolList";
import MyInfoPage from "./pages/MyInfoPage";
import AdminPage from "./pages/AdminPage";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const {currentUser, setCurrentUser} = useContext(UserContext);

  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setCurrentUser(data);
          setLoggedIn(true)});
    }});
  }, [setCurrentUser]);

  console.log(currentUser)

  return (
    <div>
      
    <h1>S.T.I.M.S</h1>
      
    <h3>Student Teacher Integrated Management System</h3>
        
    {!loggedIn ? (
    <Login setLoggedIn={setLoggedIn}/>
    ) : (
      
    <>

    <NavBar setLoggedIn={setLoggedIn} />

    <Switch>

    <Route path="/schools/">
      <SchoolList/>
    </Route>

    <Route path="/teachers/">
      <TeacherList/>
    </Route>

    <Route path="/students/">
      <StudentList/>
    </Route>

    <Route path="/my_info/">
        <MyInfoPage/>
    </Route>

    <Route path="/">
      { currentUser.auth_level !== "admin" ? ("") : (<AdminPage setLoggedIn={setLoggedIn}/>)}

      { currentUser.auth_level !== "teacher" ? ("") : (<TeacherPage setLoggedIn={setLoggedIn}/>)}

      { currentUser.auth_level !== "student" ? (""): (<StudentPage/>) }
    </Route> 
        
    </Switch>
          
    </>
      
    )}  
        
    </div>
  );
}

export default App;
