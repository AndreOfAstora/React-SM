import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.scss';

function Profile(props) {
  return (
    <div className={ s.container }>
      Profile
      <MyPosts postData={ props.state.postData } newPostText={ props.state.newPostText } dispatch={ props.dispatch }/>
    </div>        
  )
}

export default Profile;