import { React } from "react";
import "./LoginPage.css";
//import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";


function LoginPage(){

    const formSubmit = (event) => {
        event.preventDefault();
        const loginDetails = {
            email: event.target.email.value,
            password: event.target.password.value,
        };

        // process loginDetails
    }

    return (
        <>
        <div className="login-page">
            <div className="login-box">
                <div className="title">Sign in To Spectrum</div>
                <div className="description">Expand your education with Spectrum Library!</div>
                <br></br>
                <br></br>
                <form onSubmit={formSubmit}>
                    <div className="input-feild">
                        <div className="input-feild-icon"><img 
                        src={process.env.PUBLIC_URL+"/fi-rr-envelope.svg"}
                        alt="Envelope"
                        ></img>
                        </div>
                        <input
                        className="userEmail"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        ></input>
                    </div>
                    <br></br>
                    <div className="input-feild">
                        <div className="input-feild-icon"><img 
                        src={process.env.PUBLIC_URL+"/fi-rs-lock.svg"}
                        alt="Envelope"
                        ></img>
                        </div>
                        <input
                        className="userPassword"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        ></input>
                    </div> 
                    <br></br>
                    <div className="link"><a>Don't have an Account?</a></div>
                    <br></br>
                    <div className="submit-button">
                    <button className="login-button" type="submit">Login</button>
                    </div>
                </form>
                <br></br>
                <div className="or-line">
                    <div className="hr-or-line"></div>
                    <p>or</p>
                    <div className="hr-or-line"></div>
                </div>
                <br></br>
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