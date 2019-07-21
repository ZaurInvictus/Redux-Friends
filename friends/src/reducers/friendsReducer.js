import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,

  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR ,

  POSTING_START,
  POSTING_SUCCESS,
  POSTING_ERROR,

  DELETE_START,
  DELETE_SUCCESS,
  USER_UNAUTHORIZED 
} from "../actions/actions";



const initialState = {
  friends: [],
  fetchingFriends: false,
  isLoggingIn: false,
  error: null,
  postingFriend: false,
  deletingFriend: false,
  errorStatusCode: null,
  // updateFriend: false,
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
            error: action.payload
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
              postingFriend: true,
              error: null,
            }
          case POSTING_SUCCESS:
            return {
              ...state,
              friends: action.payload,
              postingFriend: false,
              error: null
            }
          case POSTING_ERROR:
            return {
              ...state,
              postingFriend: false,
              error: action.payload.status
            }

            case DELETE_START:
              return {
                ...state,
                deletingFriend: true
              };
            case DELETE_SUCCESS:
              return {
                ...state,
                deletingFriend: false,
                error: '',
                errorStatusCode: null,
                friends: action.payload
              };
              case USER_UNAUTHORIZED:
                console.log(action);
                return {
                  ...state,
                  error: action.payload.data.error,
                  errorStatusCode: action.payload.status,
                  fetchingFriends: false
                };

      default:
      return state
  }
}
