



const Item = (props) => {
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
                <img src={props.photoUrl} style={{ display: 'block', maxHeight: '100px' }} />
                {(props.followed==true) ?
                    <div><button onClick={cUnfollow}>Unfollow</button></div>
                    :<div><button onClick={cFollow}>Follow</button></div>}
            </span>
            <span style={{ display: 'inline' }}>

                <div>{props.fullName}</div>
                <div>{props.status}</div>
            </span>
            <span style={{ display: 'inline' }}>
                <div>{props.location.country}
                </div>
                <div>{props.location.city}
                </div>
            </span>
        </div>
    )
}

const Users = (props) => {
  
  return(
    <div >
      {props.users.map((u)=><Item id = {u.id} 
                                  fullName ={u.fullName} followed = {u.followed} location = {u.location} 
                                  status = {u.status}
                                  followUser = {props.followUser}
                                  unfollowUser = {props.unfollowUser}
                                  photoUrl = {u.photoUrl}
                                  
                                  
      />)}
    </div>
  )
}

export default Users;