import {profile, LoggedIn, setLoggedIn, setProfile} from "../App";
import Cookies from 'js-cookie';

const loginReducer = (state = null , action) => {
    switch(action.type) {

        case 'LOGIN': 
            Cookies.set('ple', JSON.stringify(action.payload.data), {expires: 7});
            setLoggedIn(true);
            setProfile(action.payload.data);
            return {...state, loginDetails: action.payload.data, loading: false, errors: null};
        
        case 'SIGNUP':
            return action.payload

        default: 
            return state;   
    }

}

export default loginReducer;