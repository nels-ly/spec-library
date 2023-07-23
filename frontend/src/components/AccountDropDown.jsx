import React, { useState } from 'react';
import './AccountDropDown.css';
import { Link } from 'react-router-dom';

export default function AccountDropDown({username = ""}) {
  const [isToggled, setIsToggled] = useState(false);

  const changeToggle = () => {
    setIsToggled(!isToggled);
  };

  

  return (
    <>
      <div className="account-dropdown" onClick={changeToggle} >
        <label for="account-icon" id="username">{username}</label>
        <button type="button" className="account-button" name="account-icon">
          <img src={process.env.PUBLIC_URL + '/fi-rs-user.svg'} alt="User Icon" />
        </button>
        {isToggled && (
          <div className="dropdown-content">
            <div>
              <Link className="dropdown-link" to="/settings">Account Settings</Link>
              <br className="separator" ></br>
              </div> 
            
            <Link className="dropdown-link" to="#">Log Out</Link>
          </div>
        )}
      </div>
    </>
  );
}
