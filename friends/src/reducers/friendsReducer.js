import {  
  FETCH_LOADING,
  FETCH_SUCCESS,
  FETCH_ERROR
} from "./actions";

const initialState = {
  friends: [],
  isLoading: false,
  deletingFriend: false,
  isLoggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type){

    case FETCH_LOADING:
      return {
        ...state,
          error: null,
          isLoading: true
     }

      case FETCH_SUCCESS:
        return {
          ...state,
          error: null,
          isLoading: false
        }

        case FETCH_ERROR:
          return {
            ...state,
            error: 'Внимание! Внимание! Error loading files...'
          }

      default:
      return state
  }
}