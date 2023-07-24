import React, { useState } from 'react';
import './AccountDropDown.css';
import { Link } from 'react-router-dom';
import {logout} from '../actions/login';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AccountDropDown({username = ""}) {
  
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();
  
  const changeToggle = () => {
    setIsToggled(!isToggled);
  };

  const logoutUser = () => {
    dispatch(logout(navigate));
  }

  return (
    <>

      <div className="account-dropdown" onClick={changeToggle} >
        <label id="username" for="user">{username}</label>
        <button name="user" type="button" className="account-button">
          <img src={process.env.PUBLIC_URL + '/User Icon.svg'} alt="User Icon" />

        </button>
        {isToggled && (
          <div className="dropdown-content">
            <div>
              <Link className="dropdown-link" to="/settings">Account Settings</Link>
              <br className="separator" ></br>
              </div> 
            
            <button className="dropdown-link" type="button" onClick={logoutUser}>Log Out</button>
          </div>
        )}
      </div>
    </>
  );
}
