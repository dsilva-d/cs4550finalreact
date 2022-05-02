import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useProfile} from "../../../contexts/profileContext";

const Profile = () => {
  const navigate = useNavigate()
  const {profile, signout} = useProfile()
  const storedProfile = localStorage.getItem('profile')
  const [showAge, setShowAge] = useState(true)
  const [profileState, setProfileState] = useState(profile)
  {console.log('profile: ' + JSON.stringify(profileState))}
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
  console.log('profile stored: ' + profileState)

  if(showAge) {
  return (
      <div>
        <h1>Profile</h1>
        <h3> Welcome {profileState && profileState.firstName}! </h3>

        <h6> Age: {profileState.age} </h6>

        <button className="btn btn-light" onClick={() => setShowAge(!showAge)}>
            {`Show Age: ${showAge ? 'on' : 'off'}`}
        </button>



            <Link to={"/details/routes/" + profile.username}>
          Search routes
        </Link>

        <button onClick={logout} className="btn btn-danger">
            Logout
        </button>

        {/*{JSON.stringify(comments)}*/}

        {/*<ul className="list-group">*/}
        {/*  {*/}
        {/*      comments && comments.map(comment =>*/}
        {/*          <li className="list-group-item">*/}
        {/*            <Link to={`/omdb/details/${comment.imdbID}`}>*/}
        {/*              {comment && comment.comment}*/}
        {/*              {comment.imdbID}*/}
        {/*            </Link>*/}
        {/*          </li>*/}
        {/*      )*/}
        {/*  }*/}
        {/*</ul>*/}
        {
}
      </div>
  );
  } else {

      return (
          <div>
            <h1>Profile</h1>
            <h3> Welcome {profile && profile.firstName}! </h3>

            <button className="btn btn-dark" onClick={() => setShowAge(!showAge)}>
                {`Show Age: ${showAge ? 'on' : 'off'}`}
            </button>

            <Link to={"/details/routes/" + profile.username}>
              Search routes
            </Link>

            <button onClick={logout} className="btn btn-danger">
                Logout
            </button>
          </div>
      );
  }
};

export default Profile;