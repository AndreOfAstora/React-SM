import React from 'react';
import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



// function MyPostsContainer() {  

  

//   return (
//     <StoreContext.Consumer>{
//       (store)=>{
//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch( addPost() );
//         }
      
//         let onPostChange = (text) => {
//           store.dispatch( updateNewPostText(text) );
//         }

//         return(<MyPosts  postData = { state.profilePage.postData } 
//                     newPostText = { state.profilePage.newPostText }
//                     addPost = { addPost }
//                     updateNewPostText = { onPostChange }/>)}
      
//     }</StoreContext.Consumer>    
        
//   )
// }


let mapStateToProps = (state) => {
  return({
      postData: state.profilePage.postData,
      newPostText: state.profilePage.newPostText
    })
}

let mapDispatchToProps = (dispatch) => {
  return( {
        addPost:() => dispatch(addPost()),
        updateNewPostText: (text) => dispatch(updateNewPostText(text))
    } )

}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;