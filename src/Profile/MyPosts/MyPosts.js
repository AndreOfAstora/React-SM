import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

function MyPosts(props) {
  

  let postDom = props.postData.map(post => <Post link={post.link} text={post.text} color={post.color}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    debugger;
    props.dispatch( props.addPostActionCreator() );
  }

  let onPostChange = () => {
    debugger;
    let text = newPostElement.current.value;
    props.dispatch( props.updateNewPostTextActionCreator(text) );

  }

  return (
    <div className={ s.container }>
      <textarea ref={ newPostElement } 
                onChange={ onPostChange }
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