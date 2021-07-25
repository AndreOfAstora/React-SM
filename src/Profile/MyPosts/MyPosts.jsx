import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';
import s from './MyPosts.module.scss';
import Post from './Post/Post';


function MyPosts(props) {  

  
  let postDom = props.postData.map(post => <Post link={post.link} text={post.text} color={post.color}/>);



  //  В атрибуты jsx можно передавать коллбэки, т.е. <код>functionName</код>. 
  //
  //  Если туда записать вызов т.е. <код>functionName()</код>, то он будет выполнен прямо во время рендера, 
  //  и если функция не возвращает нужный коллбэк то придеться дебажить, а если он к тому же еще и будет менять state, 
  //  то приложение зациклиться(скорее впадет в бесконечную рекурсию) и будет достигнута максимальная глубина рендера.
  //  
  //  Зацикливание происходит из-за того, что после изменения state происходит перерисовка компонентов,
  //  а если он изменяеться во время рендера, то рендер запускается заново.
  //
  //  По этому, функции меняющие state, пришедшие из пропсов нужно оборачивать оберткой(ветвлением, или функцией), и голых вызовов этих функций 
  //  не должно быть ни в jsx, ни в логике компоненты. 

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