import React, {useEffect, useState} from 'react';
import {findAllUsers} from '../actions/userActions';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([])
  const networks = useSelector(state => state.searchReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    findAllUsers(dispatch)
  }, [dispatch])
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {
          users.map(user =>
          <li>
            Username: {user.username},
            Password: {user.password}
          </li>
          )
        }
      </ul>
    </div>
  );
};

export default UserList;