import { React } from "react";
import "./LoginPage.css";
import {Link} from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
import NavBar from "../components/NavBar";


function SignUpPage(){

    const formSubmit = (event) => {
        event.preventDefault();
        const loginDetails = {
            email: event.target.email.value,
            password: event.target.password.value,
        };

        // process Account Creation Details

    }

    return (
        <>
        <div className="login-page">
            <NavBar></NavBar>
            <div className="login-box">
                <div className="title">Sign up to Spectrum</div>
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
                        type="text"
                        name="username"
                        placeholder="Username"
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
                    <div className="input-div">
                        <div className="input-feild-icon"><img 
                        src={process.env.PUBLIC_URL+"/fi-rs-lock.svg"}
                        alt="Envelope"
                        ></img>
                        </div>
                        <input
                        className="input-feild"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
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
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
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
                        type="text"
                        name="gender"
                        placeholder="Gender"
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
                        type="date"
                        name="dob"
                        required
                        ></input>
                    </div> 
                    <br></br>
                    <div className="link"><Link to="/">Already have an Account?</Link></div>
                    <br></br>
                    <div className="submit-button">
                    <button className="login-button" type="submit">Create Account</button>
                    </div>
                </form>
            </div>
        </div>
        
        </>
    )
}

export default SignUpPage;