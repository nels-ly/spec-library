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
        <button type="button" className="account-button">
          <img src={process.env.PUBLIC_URL + '/User Icon.svg'} alt="User Icon" />

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
