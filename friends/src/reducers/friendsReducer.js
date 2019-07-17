import {  
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,

  FETCH_FRIENDS_START, 
  FETCH_FRIENDS_SUCCESS, 
  FETCH_FRIENDS_ERROR 
} from "../actions/actions";

 

const initialState = {
  friends: [],
  fetchingFriends: false,
  //deletingFriend: false,
  isLoggingIn: false,
  //savingFriends: false,
  //updatingFriend: false,
  error: null
}


export const friendsReducer = (state = initialState, action) => {
  switch(action.type){

    case LOGIN_START:
      return {
        ...state,
          error: null,
          isLoggingIn: true
     }

      case LOGIN_SUCCESS:
        return {
          ...state,
          error: null,
          isLoggingIn: false
        }

        case LOGIN_ERROR:
          return {
            ...state,
            isLoggingIn: false,
            error: 'Uh noo... something wrong 😵!'
          }

        case FETCH_FRIENDS_START:
          return {
            ...state,
            fetchingFriends: true,
            error: null
          }

        case FETCH_FRIENDS_SUCCESS:
          return {
            ...state,
            fetchingFriends: false,
            error: null,
            friends: action.payload
          }

        case FETCH_FRIENDS_ERROR:
          return {
            ...state,
            fetchingFriends: false,
            error: 'Something wrong with friends😵!'
          }

      default:
      return state
  }
}