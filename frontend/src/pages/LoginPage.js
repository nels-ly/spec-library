import { React, useEffect } from "react";
import "./LoginPage.css";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "../components/NavBar";
import {loginUser} from "../actions/login"
import {LoggedIn, profile} from "../App";
import Cookies from 'js-cookie';

// can add more fields later
class User {
    constructor(email, user_role){
        this.email = email;
        this.user_role = user_role;
    }
}

function LoginPage(){
 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authenticated = ((Cookies.get('ple')) && (Cookies.get('cookie_session')));
    
    useEffect(()=> {

        if (authenticated) {
            navigate('/dashboard');
        }
    }) 
    
    
    const formSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const loginDetails = {
            email: email,
            password: password
        }

        // process loginDetails
        dispatch(loginUser(loginDetails, "student", navigate));
    };

    return (!authenticated ? <></> : 
        <>
            <div className="login-page">
                <NavBar></NavBar> 
                <div className="login-box">
                    <div className="title">Sign in to Spectrum</div>
                    <div className="description">Expand your education with Spectrum Library!</div>
                    <br></br>
                    <br></br>
                    <form onSubmit={formSubmit}>
                        <div className="input-div">
                            <div className="input-feild-icon"><img 
                            src={process.env.PUBLIC_URL+"/fi-rr-envelope.svg"}
                            alt="Envelope"
                            ></img>
                            </div>
                            <input
                            className="input-feild"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            ></input>
                        </div>
                        <br></br>
                        <div className="input-div">
                            <div className="input-feild-icon"><img 
                            src={process.env.PUBLIC_URL+"/fi-rs-lock.svg"}
                            alt="Envelope"
                            ></img>
                            </div>
                            <input
                            className="input-feild"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            ></input>
                        </div> 
                        <br></br>
                        <div className="link"><Link to="/signup">Don't have an Account?</Link></div>
                        <br></br>
                        <div className="submit-button">
                        <button className="login-button" type="submit">Login</button>
                        </div>
                    </form>
                    
                    <div className="or-line">
                        <div className="hr-or-line"></div>
                        <p>or</p>
                        <div className="hr-or-line"></div>
                    </div>
                    
                    <div className="google-button-div">
                    <button className="google-button">
                        <img className="google-image" src={process.env.PUBLIC_URL+"/google.png"} alt="Button Image" />
                    </button>
                    </div>
                </div>
            </div>
            
        </>
        
       
    )
}

export default LoginPage;