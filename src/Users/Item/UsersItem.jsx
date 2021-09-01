import userIcon from '../../assets/Images/userIcon.png';

const UsersItem = (props) => {
    let styles = {  display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    backgroundColor: 'blueviolet' };


    const cFollow = () => {
        props.followUser(props.id)
    }

    const cUnfollow = () => {
        props.unfollowUser(props.id)
    }

    return (
        <div style={styles}>
            <span style={{ display: 'inline' }}>
                <img src={(props.photos.small===null) ? userIcon : props.photos.small} 
                     style={{ display: 'block', maxHeight: '70px' }} />
                {(props.followed==true) ?
                    <div><button onClick={cUnfollow}>Unfollow</button></div>
                    :<div><button onClick={cFollow}>Follow</button></div>}
            </span>
            <span style={{ display: 'inline' }}>

                <div>{props.name}</div>
                <div>{props.status}</div>
            </span>
            <span style={{ display: 'inline' }}>
                <div>{"props.location.country"}</div> {/* Полей location.country и location.city нет в API */}
                <div>{"props.location.city"}</div>
            </span>
        </div>
    )
}

export default UsersItem;