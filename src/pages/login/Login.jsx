import './login.scss'
// import {  useState } from 'react';
import netLogo from '../../file/2560px-Netflix_2015_logo.svg.png'
export default function Login() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");    

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src={netLogo}
                        alt=""
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input
                        type="email"
                        placeholder="Email or phone number"
                        
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        
                    />
                    <button className="loginButton" >
                        Sign In
                    </button>
                    <span>
                        New to Netflix? <b>Sign up now.</b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    );
}