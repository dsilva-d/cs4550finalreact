import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import * as service from "../authService";

const Signup = () => {
    const [newUser, setNewUser] = useState({firstname: "hail", lastName: "mary", cyclist: true, age: 20, city: "The Vatican"});
    const navigate = useNavigate();
    const signup= () =>
        service.signup(newUser)
            .then(() => navigate('/profile'))
            .catch(e => alert(e));
    return (
        <div>
            <h1>Signup</h1>
            <input onChange={(e) =>
                setNewUser({...newUser,
                    username: e.target.value})}/>
            <input type="password" onChange={(e) =>
                setNewUser({...newUser,
                    password: e.target.value})}/>
            <button onClick={signup}>Signup</button>
        </div>
    );
};


export default Signup;

