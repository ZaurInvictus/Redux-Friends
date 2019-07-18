import {  
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,

  FETCH_FRIENDS_START, 
  FETCH_FRIENDS_SUCCESS, 
  FETCH_FRIENDS_ERROR ,

  POSTING_START,
  POSTING_SUCCESS,
  POSTING_ERROR 
} from "../actions/actions";

 

const initialState = {
  friends: [],
  fetchingFriends: false,
  isLoggingIn: false,
  error: null,
  postFriend: false,
  // updateFriend: false,
  // deleteFriend: false,
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

          case POSTING_START:
            return {
              ...state,
              postFriend: false,
              error: null,
            }
          case POSTING_SUCCESS:
            console.log('gggggggggggggggg', action.payload)
            return {
              ...state,
              friends: action.payload,
              postFriend: true,
              error: null
            }
          case POSTING_ERROR:
            return {
              ...state,
              postFriend: false,
              error: 'Something wrong with posting friends😵!'
            }
       
      default:
      return state
  }
}