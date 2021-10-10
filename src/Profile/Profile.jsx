import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <div className={ s.container }>        
        <ProfileInfo profileInfo = { props.profileInfo }/>
        <MyPostsContainer />
    </div>        
  )
}

export default Profile;