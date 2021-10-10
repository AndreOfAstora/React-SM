

// TODO:

//  1) Add style module

const ProfileInfo = (props) => {
    return (
        <div>
            Profile info            
            <br />
            { 'profileInfo: ' + JSON.stringify(props.profileInfo) }
        </div>
    )
}

export default ProfileInfo;