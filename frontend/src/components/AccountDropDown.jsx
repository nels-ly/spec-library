import {useState} from 'react';
import "./AccountDropDown.css";
import {Link} from "react-router-dom";

export default function AccountDropDown(props) {
    const [isToggled, setIsToggled] = useState(false);

    const changeToggle = () => {
        setIsToggled(!isToggled);
    }

    const username = "chuuniham";
    return (
        <> 
            <div className="account-drop-down"> 
            
                
                <label id="account-icon-label">{username}</label>
                <button type="button" onClick={changeToggle} className="account-icon-button">
                    <img src={process.env.PUBLIC_URL+"/fi-rs-user.svg"}></img>
                </button>
                
                <ul className={isToggled ? "account-icon-expanded":"account-icon-not-expanded"}>
                    <li className="account-icon-option"><Link to="/settings"> <button>Settings</button> </Link></li>
                    <li className="account-icon-option"><button type="button">Logout</button></li>
                </ul>
            </div>
        </>)
}