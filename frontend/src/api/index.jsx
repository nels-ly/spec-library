import axios from "axios"

const url = "http://127.0.0.1:8000"


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

export const loginUser = (loginDetails) => client.post(`/login/`, loginDetails, {credentials: 'include'});

export const signUp = (signUpDetails) => client.post('/sign_up/', signUpDetails, {credentials: 'include'});

export const logout = () => client.post('/logout/', {credentials: 'include'});