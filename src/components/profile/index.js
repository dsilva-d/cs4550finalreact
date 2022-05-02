import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../../contexts/profileContext";
// import {findCommentsByUserId} from "../services/movie-service";


const Profile = () => {
  const navigate = useNavigate()
  const {profile, signout} = useProfile()
  // const [comments, setComments] = useState([])

  const logout = async () => {
    try {
      await signout()
    } catch (e) {

    }
    navigate('/signin')
  }

  /*
  A user profile should show a list of routes created by that user. Each route indicates which user made it by ID (see
  the field postedBy.uid in a route mongodb document to know the ID of the user that made the route). So we need to
     get the routes and filter on the profile page, so only routes with matching uids are dispalyed. See the findMyRoutes
     method in useEffect below as a starting point. Maybe do useState to keep track of routes.*/

  useEffect(() => {
    // findMyRoutes()
  }, [])

  return (
      <div>
        <h1>Profile</h1>
        <button
            onClick={logout}
            className="btn btn-danger">
          Logout
        </button>
        {profile && profile.username}
        <Link to="/search">
          Search routes
        </Link>

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
      </div>
  );
};

export default Profile;