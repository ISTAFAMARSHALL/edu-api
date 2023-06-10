import { useEffect , useState, useContext} from "react";
import React from 'react';
import { Route, Switch} from "react-router-dom"
import { useHistory } from 'react-router-dom';
// import Login from "./pages/Login"
// import HomePage from "./pages/HomePage"

import { UserContext } from "./context/user";

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const {setCurrentUser} = useContext(UserContext);

  // const history = useHistory()

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
        <h1>STIMS</h1>
        {/* {!loggedIn ? (
            <Login setLoggedIn={setLoggedIn}/>
        ) : (
          <>
            <h1>STIMS</h1>
            <NavBar setLoggedIn={setLoggedIn} />
            <Switch>

            
            <Route path="/">
              <HomePage setLoggedIn={setLoggedIn} handle_EditReservation={handle_EditReservation}/>
            </Route>

            </Switch>
          </>
        )}   */}
        
      </div>
  );
}

export default App;
