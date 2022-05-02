import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useProfile} from "../../../contexts/profileContext";

const Profile = () => {
  const navigate = useNavigate()
  const {profile, signout} = useProfile()
  const storedProfile = localStorage.getItem('profile')
  const [showAge, setShowAge] = useState(true)
  const [profileState, setProfileState] = useState(profile)
  const pid = useParams()


  const logout = async () => {
    try {
      await signout()
    } catch (e) {

    }
    navigate('/signin')
  }

  useEffect(() => {
    localStorage.setItem('profile', profileState)
  }, [profileState])

  let cyclistStatus = "Cyclist";

  if(!profileState.cyclist) {
    cyclistStatus = "Runner";
  }

  if(showAge) {
  return (
      <div>
        <h1>Profile</h1>
        <h3> Name: {profileState && profileState.lastName}, {profileState && profileState.firstName} </h3>


        <h6> Location: {profileState.city} </h6>
        <h6> {cyclistStatus} </h6>
        <h6> Age: {profileState.age} </h6>
        <div>
        <button className="btn btn-light" onClick={() => setShowAge(!showAge)}>
            {`Show Age: ${showAge ? 'on' : 'off'}`}
        </button>
        </div>

        <div>
            <Link to={"/details/routes/" + profile.username}>
                Search routes
            </Link>
        </div>
        <div>
        <button onClick={logout} className="btn btn-danger">
            Logout
        </button>
        </div>
        {
}
      </div>
  );
  } else {

      return (
          <div>
            <h1>Profile</h1>
            <h3> Name: {profileState && profileState.lastName}, {profileState && profileState.firstName} </h3>
            <h6> Location: {profileState && profileState.city} </h6>
            <h6> {cyclistStatus} </h6>
            <div>
            <button className="btn btn-dark" onClick={() => setShowAge(!showAge)}>
                {`Show Age: ${showAge ? 'on' : 'off'}`}
            </button>
            </div>
            <div>
            <Link to={"/details/routes/" + profile.username}>
              Search routes
            </Link>
            </div>
            <div>
            <button onClick={logout} className="btn btn-danger">
                Logout
            </button>
            </div>
          </div>
      );
  }
};

export default Profile;