import React, { useState } from 'react';
import './AccountDropDown.css';
import { Link } from 'react-router-dom';

export default function AccountDropDown(props) {
  const [isToggled, setIsToggled] = useState(false);

  const changeToggle = () => {
    setIsToggled(!isToggled);
  };

  const username = 'chuuniham';

  return (
    <>
      <div className="account-dropdown" onClick={changeToggle} onclick={changeToggle}>
        <button type="button" className="account-button">
          <img src={process.env.PUBLIC_URL + '/User Icon.svg'} alt="User Icon" />
        </button>
        {isToggled && (
          <div className="dropdown-content">
            <Link className="dropdown-link" to="/settings">Account Settings</Link>
            <Link className="dropdown-link" to="#">Log Out</Link>
          </div>
        )}
      </div>
    </>
  );
}
