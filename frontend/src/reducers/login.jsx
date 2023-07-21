import {profile, LoggedIn, setLoggedIn, setProfile} from "../App";

const loginReducer = (state = null , action) => {
    switch(action.type) {

        case 'LOGIN': 
           
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