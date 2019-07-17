import {  
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "../actions/actions";

const initialState = {
  friends: [],
  //isLoading: false,
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
            error: 'Внимание! Внимание! Error loading files...'
          }

      default:
      return state
  }
}