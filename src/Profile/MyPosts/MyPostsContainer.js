import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';
import MyPosts from './MyPosts';



function MyPostsContainer(props) {  

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch( addPostActionCreator() );
  }

  let onPostChange = (text) => {
    props.store.dispatch( updateNewPostTextActionCreator(text) );
  }

  return (
    <MyPosts  postData = { state.profilePage.postData } 
              newPostText = { state.profilePage.newPostText }
              addPost = { addPost }
              updateNewPostText = { onPostChange }/>
  )
}

export default MyPostsContainer;