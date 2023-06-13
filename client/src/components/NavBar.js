import React from 'react'
import { useContext } from 'react';
import {NavLink} from 'react-router-dom'
import { UserContext } from "../context/user";


function Navbar({setLoggedIn}) {

    const { currentUser, setCurrentUser} = useContext(UserContext)

    function handleLogOut() {
        fetch("/logout", { method: "DELETE" })
        setCurrentUser(null);
          setLoggedIn(false);
    }


  

  return (
    <div id='navbar'>

        <NavLink className="button"
            exact 
            to="/"
          ><button>Home</button></NavLink>
      
        <NavLink className="button"
            exact 
            to="/my_info"
          ><button>My Info</button></NavLink>

        <NavLink className="button"
              exact
              to="/teachers"
            ><button>School Staff</button></NavLink>

        <NavLink className="button"
              exact
              to="/students"
            ><button>School Students</button></NavLink>

          <NavLink className="button"
              exact
              to="/logout"
            ><button onClick={() => {
                setLoggedIn(false)  
                handleLogOut()}}>Logout</button>
            </NavLink>
    </div>    
  )
}

export default Navbar