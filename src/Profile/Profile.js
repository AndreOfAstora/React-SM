import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.scss';

function Profile(props) {
  return (
    <div className={ s.container }>
      Profile
      <MyPosts postData={ props.state.postData } addPost={ props.addPost } newPostText={ props.state.newPostText } updateNewPostText={ props.updateNewPostText }/>
    </div>        
  )
}

export default Profile;