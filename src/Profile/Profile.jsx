import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.scss';

function Profile(props) {
  return (
    <div className={ s.container }>
      Profile      
      <MyPostsContainer/>
    </div>        
  )
}

export default Profile;