import Preloader from '../../commons/Preloader/Preloader.jsx'

// TODO:

//  1) Add style module

// 

const ProfileInfo = (props) => {
  
    if (!props.profileInfo){
        return (
            <Preloader isLoading = {true}/>
        )
    }
    return (
        <div>            
            <img src = {props.profileInfo.photos.large}/>
            <br />
            <p>{props.profileInfo.fullName}</p>
            <br />            
            <p>User ID: {props.profileInfo.userId}</p>
            <br />
            <p>About me:</p>
            <p>{props.profileInfo.aboutMe}</p>            
        </div>
    )
}

export default ProfileInfo;