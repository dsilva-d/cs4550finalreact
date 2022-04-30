import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {useProfile} from "../../contexts/profileContext";

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const {signup} = useProfile()
    const handleSignupBtn = async () => {
        try {
            await signup(
                emailRef.current.value,
                passwordRef.current.value
            )
            navigate('/profile')
        } catch (e) {
            alert('oops')
        }
    }
    return (
        <div>
            <h1>Signup</h1>
            <input ref={emailRef}
                   placeholder="username"
                   type="email"
                   className="form-control"/>
            <input ref={passwordRef}
                   placeholder="password"
                   type="password"
                   className="form-control"/>
            <button onClick={handleSignupBtn}
                    className="btn btn-primary">
                Signup</button>
        </div>
    );
};

export default Signup;