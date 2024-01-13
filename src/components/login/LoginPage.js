import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { doLogin } from '../../api/AuthApi';
import {useLocation, useNavigate} from "react-router-dom";
import './LoginPage.css'

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";
    const { setAuth } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function sendLoginRequest() {
        doLogin(username, password)
            .then((response) => {
                const accessToken = response.accessToken;
                console.log("Access Token" + accessToken);
                setAuth({ username, password, accessToken });
                setUsername('');
                setPassword('');
                navigate(from, {replace: true});
            })
            .catch((error) => {
                console.error('Login failed:', error);
                // Handle the error, show a message, etc.
            });
    }

    return (
        <div className="container">
            <form className="card bg-light">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="email" className="form-control" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={() => sendLoginRequest()}>Submit</button>
            </form>
        </div>
    );
};

export default Login;