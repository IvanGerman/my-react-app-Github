import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


let initialState = {
  posts: [
      {id: 1, message: "Hi,how are you?", likes: 15},
      {id: 2, message: "It's my first post", likes: 20},
      {id: 3, message: "Blabla", likes: 330},
      {id: 4, message: "Quakva", likes: 99}
  ],
  profile: null,
  status: "i am from initialState of profile-reducer.js"
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:    
            let newPost = {
                id: 5,
                message: action.newPostText,
                likes: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };

        case SET_USER_PROFILE:
            return {
              ...state,
              profile: action.profile
            };
        
        case SET_STATUS:   
            return {
                ...state,
                status: action.status
            };
        
            case DELETE_POST:   
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };

        default: 
            return state;
    };
};

export const addPostActionCreator = (newPostText) => {
    return {
      type: ADD_POST,
      newPostText
    };
  };
export const setUserProfile = (profile) => {
    return {
      type: SET_USER_PROFILE,
      profile
    };
  };

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  };
};

export const deletePostAC = (postId) => {
  return {
    type: DELETE_POST,
    postId
  };
}
 

//thunk
export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId); 
      dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);  
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
      };
}

export default profileReducer;