import {AuthContext} from '../contexts/AuthContext'
import { useContext } from 'react';
import '../styles/profile.css'


function Profile() {
  let ctx = useContext(AuthContext)
  const signOut = () => {
    ctx?.signOutUser();
  }

  return (
    <div id="profile-cont">
      {ctx?.currentUser?.emailVerified ? 
      <div>
      <h1>Signed in as {ctx?.currentUser?.email}</h1>
      </div>
      : 
      <h3>Email verification link has been sent to your inbox. <br /> Verify to continue.</h3>
      }
      <button id="profile-sign-out-button" onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default Profile