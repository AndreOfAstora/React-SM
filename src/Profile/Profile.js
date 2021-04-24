import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.scss';

function Profile(props) {
  return (
    <div className={ s.container }>
      Profile
      <MyPosts store = { props.store }/>
    </div>        
  )
}

export default Profile;