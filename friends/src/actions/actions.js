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
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      console.log('ERROR from AXIOS LOGIN:', err.response.data.error)
      dispatch({ type: LOGIN_ERROR, payload: err.response.data.error });
    });
 };


export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_ERROR = "FETCH_FRIENDS_ERROR";


export const getData = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axiosWithAuth()
 .get('/friends')
 .then(res => {
  //  console.log('RES of getData() from AXIOS', res)
   dispatch({type: FETCH_FRIENDS_SUCCESS, payload: res.data})
 })
  .catch(err => {
    dispatch({type: FETCH_FRIENDS_ERROR})
  })
};

//GET CALL WITH THE AUTH IN ONE PLACE
// export default function getFriends() {
//   return dispatch => {
//     dispatch({ type: FETCH_FRIENDS_START });

//     const token = localStorage.token
//     const headers = {
//       Authorization: token
//     }
//     axios
//       .get("http://localhost:5000/api/friends/", {headers})
//       .then(res => {
//         console.log(res);
//         dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
//       })
//       .catch(err => {
//         console.log(err);
//         dispatch({ type: FETCH_FRIENDS_ERROR, payload: err.response.data });
//       });
//   };
// }


export const POSTING_START = "POSTING_START";
export const POSTING_SUCCESS = "POSTING_SUCCESS";
export const POSTING_ERROR = "POSTING_ERROR";


export const postFriend = friend => {
  const newFriend =  axiosWithAuth()
  .post(`/friends`, friend);
   return dispatch => {
    dispatch({ type: POSTING_START });
    newFriend
      .then(res => {
        dispatch({ type: POSTING_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: POSTING_ERROR, payload: err });
      });
  };
};


export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_ERROR = "DELETE_ERROR";
export const USER_UNAUTHORIZED = 'USER_UNAUTHORIZED';


export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(`http://localhost:5000/api/friends/${id}`, {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('call failed: ', err.response);
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: DELETE_ERROR, payload: err.response });
      }
    });
};


export const EDIT_FRIEND_START = 'EDIT_FRIEND_START';
export const EDIT_FRIEND_SUCCESS = 'EDIT_FRIEND_SUCCESS';
export const EDIT_FRIEND_FAILURE = 'EDIT_FRIEND_FAILURE';

export const editFriend = friend => dispatch => {
  dispatch({ type: EDIT_FRIEND_START });
  return axios
    .put(`http://localhost:5000/api/friends/${friend.id}`, friend, {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: EDIT_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: EDIT_FRIEND_FAILURE, payload: err.response });
      }
    });
};






