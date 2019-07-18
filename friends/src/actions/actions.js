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
  .catch(err => {
    dispatch({type: FETCH_FRIENDS_ERROR})
  })
};



export const POSTING_START = "POST_FRIEND";
export const POSTING_SUCCESS = "POST_FRIEND";
export const POSTING_ERROR = "POST_FRIEND";


export const postFriend = friend => {
  const newFriend =  axiosWithAuth()
  .post(`/friends`, friend);
   return dispatch => {
    dispatch({ type: POSTING_START });
    newFriend
      .then(({ data }) => {
        dispatch({ type: POSTING_SUCCESS, payload: data });
      })
      .catch(err => {
        dispatch({ type: POSTING_ERROR, payload: err });
      });
  };
};


export const UPDATE_START = 'UPDATE_START'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const UPDATE_ERROR = 'UPDATE_ERROR'


export const updateFriend = friend => {
  const newFriend =  axiosWithAuth()
  //.put(`/friends/${id}`, payload)
   return dispatch => {
    dispatch({ type: POSTING_START });
    newFriend
      .then(({ data }) => {
        dispatch({ type: POSTING_SUCCESS, payload: data });
      })
      .catch(err => {
        dispatch({ type: POSTING_ERROR, payload: err });
      });
  };
};

//export const DELETE_FRIENDS = "DELETE_FRIENDS";