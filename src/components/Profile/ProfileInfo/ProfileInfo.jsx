

// TODO:

//  1) Add style module

// 

const ProfileInfo = (props) => {
    return (
        <div>            
            <img src = {props.profileInfo.photos.large}/>
            <br />
            <p>{props.profileInfo.fullName}</p>
            <br />
            <p>About me:</p>
            <p>{props.profileInfo.aboutMe}</p>            
        </div>
    )
}

export default ProfileInfo;