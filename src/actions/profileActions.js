import { profileAPI } from "../api/api";
import  { ADD_POST,
          SET_PROFILE_INFO,
          UPDATE_NEW_POST_TEXT } from "./actionTypes";

export const getProfileInfoThunkAC = (userId) => (dispatch) => {
  profileAPI.getProfileInfo(userId)
    .then( info => 
      dispatch( setProfileInfo(info) ) 
    ); 
}

export const addPostActionCreator = () => ( { type: ADD_POST } );
export const updateNewPostTextActionCreator = (text) => ( { type: UPDATE_NEW_POST_TEXT, newText: text } );


export const setProfileInfo = (profileInfo) => ( { type: SET_PROFILE_INFO, profileInfo } );