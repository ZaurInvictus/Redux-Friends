import axios from 'axios'
import { axiosWithAuth } from "../axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";


export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      console.log('RESULTS OF AXIOS CALL:', res)
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, payload: err.data });
    });
 };


export const FETCH_FRIENDS_START = "FETCH_PRICES_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_PRICES_SUCCESS";
export const FETCH_FRIENDS_ERROR = "FETCH_PRICES_ERROR";


export const getData = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axiosWithAuth()
 .get('/friends')
 .then(res => {
   console.log('RES of getData() from AXIOS', res)
   dispatch({type: FETCH_FRIENDS_SUCCESS, payload: res.data})
 })
  .catch(err=> {
    dispatch({type: FETCH_FRIENDS_ERROR})
  })
};




