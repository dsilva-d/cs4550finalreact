import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../../../contexts/profileContext";
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

  // const findMyComments = async () => {
  //   const comments = await findCommentsByUserId(profile._id)
  //   setComments(comments)
  // }

  useEffect(() => {
    // findMyComments()
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