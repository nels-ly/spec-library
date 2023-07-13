import { React } from "react";
import "./LoginPage.css";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
import NavBar from "../components/NavBar";

// can add more fields later
class User {
    constructor(email, user_role){
        this.email = email;
        this.user_role = user_role;
    }
}

function LoginPage(){

    const navigate = useNavigate();
    
    const formSubmit = (event) => {
        event.preventDefault();
        const loginDetails = {
            email: event.target.email.value,
            password: event.target.password.value,
        };

        // process loginDetails
        // query from DB using ^ email and password
        // from query if email and password exist, user exists, so get user
        // pass through user so user details can be used throughout library 
        // e.g. user_role will be used in dashboard 
        // another example user username, email, dob will be used in user details page.
        const current_user = new User(email, "tutor");

        navigate("/dashboard", { state: { user: current_user } });
    }

    return (
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