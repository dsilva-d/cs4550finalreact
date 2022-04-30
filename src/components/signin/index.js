import React, {useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../../contexts/profileContext";

const Signin = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const {signin} = useProfile()
    const handleSigninBtn = async () => {
        try {
            await signin(
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
            <h1>Signin</h1>
            <input
                ref={emailRef}
                placeholder="username"
                type="email"
                className="form-control"
            />
            <input
                ref={passwordRef}
                placeholder="password"
                type="password"
                className="form-control"
            />
            <button
                onClick={handleSigninBtn}
                className="btn btn-primary">
                Signin
            </button>
            <Link className="float-end" to="/signup">
                Signup
            </Link>
        </div>
    );
};

export default Signin;