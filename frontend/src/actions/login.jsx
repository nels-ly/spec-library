import * as api from "../api"



export const loginUser = (loginDetails, user_role, navigate) => async (dispatch) => {
    try {
        
        const payload = await api.loginUser(loginDetails);
        
        dispatch({ type: "LOGIN", payload: payload });
        
        navigate("/dashboard", user_role);
    }
    catch (error) {
        console.log(error.message);
        alert(`${error.message}`);
    }

}

export const signUp = (signUpDetails, navigate) => async (dispatch) => {
    try {

        const payload = await api.signUp(signUpDetails);
        
        dispatch({type: "SIGNUP", payload: payload});

        navigate("/")

    }
    catch (error) {
        console.log(error.message);
        alert(`${error.message}`);
    }

}

export const logout = (navigate) => async (dispatch) => {
    try {
        const payload = await api.logout();
        console.log(payload);
        dispatch({type: "LOGOUT", payload: payload});
        navigate("/");
    }
    catch (error) {
        console.log(error.message);
        alert(`${error.message}`);
    }
}