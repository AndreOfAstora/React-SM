import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';
import s from './MyPosts.module.scss';
import Post from './Post/Post';


function MyPosts(props) {  

  
  let postDom = props.postData.map(post => <Post link={post.link} text={post.text} color={post.color}/>);

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={ s.container }>
      <textarea onChange={ onPostChange }
                value = { props.newPostText }/>
      <button onClick={ addPost }>
        Add post
      </button>      
      {postDom}
      {/* <Post link={postData[0].link} text={postData[0].text} color={postData[0].color}/>
      <Post link={postData[1].link} text={postData[1].text} color={postData[1].color}/>       */}
    </div>
  )
}

export default MyPosts;