import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';
import StoreContext from '../../storeContext';
import MyPosts from './MyPosts';



// function MyPostsContainer() {  

  

//   return (
//     <StoreContext.Consumer>{
//       (store)=>{
//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch( addPostActionCreator() );
//         }
      
//         let onPostChange = (text) => {
//           store.dispatch( updateNewPostTextActionCreator(text) );
//         }

//         return(<MyPosts  postData = { state.profilePage.postData } 
//                     newPostText = { state.profilePage.newPostText }
//                     addPost = { addPost }
//                     updateNewPostText = { onPostChange }/>)}
      
//     }</StoreContext.Consumer>    
        
//   )
// }


let mapStateToProps = (state) => {
  return(
    {postData: state.profilePage.postData,
     newPostText: state.profilePage.newPostText
    } )
}

let mapDispatchToProps = (dispatch) => {
  return(
    {addPost:() => dispatch(addPostActionCreator()),
     updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text))
    } )

}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;