import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

function MyPosts(props) {
  

  let postDom = props.store.getState().profilePage.postData.map(post => <Post link={post.link} text={post.text} color={post.color}/>);

  let newPostElement = React.createRef();

  let addPost = () => {

    
    let text = newPostElement.current.value;
    props.store.addPost(text);
  }

  let onPostChange = () => {
    debugger;
    let text = newPostElement.current.value;
    props.store.updateNewPostText(text);

  }

  return (
    <div className={ s.container }>
      <textarea ref={ newPostElement } 
                onChange={ onPostChange }
                value = { props.store.getState().profilePage.newPostText }/>
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