import React from "react";
import {Link} from "react-router-dom";

const Profile = () => {
  return (
    <a href="profile.html"
    className={`btn btn-primary btn-block rounded-pill`}>
    Profile <i className={`fa fa-solid fa-user`}/> </a>
  );
}
export default Profile;