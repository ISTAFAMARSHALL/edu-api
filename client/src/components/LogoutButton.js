import React  from 'react';
import { GoogleLogout } from "react-google-login";


const clientId ="403940930490-l1870nfjc21miovm55s2nkrl74k23sd3.apps.googleusercontent.com";

function LogoutButton() {

    const onSuccess = (res) => {
        console.log("LOGOUT SUCCESSFULL!");
    }

    return(
        <div id='signOutButton'>
            <GoogleLogout
                clientId={clientId}
                buttonText={'Logout'}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default LogoutButton;