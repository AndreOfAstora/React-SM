import * as axios from "axios";
import userIcon from '../assets/Images/userIcon.png';




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
                <img src={(props.photos.small===null) ? userIcon : props.photos.small} 
                     style={{ display: 'block', maxHeight: '60px' }} />
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

const Users = (props) => {

    // Cosmetic removal of side effect
    let getUsers = () => {
        if (props.users.length === 0){ //Fetch users and add them to state. HTTP request is a side effect.
        
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items));
            // props.setUsers(users);
        }
    }
    
    return (
        <div >
            <button onClick = {getUsers}>Get Users</button>
            {props.users.map((u) => 
                <Item   id = {u.id}
                        name = {u.name}  //Было fullName на фронте, в API это поле зоветься name
                                       //либо меняем имя на фронте, либо делаем Data Access Layer
                        followed = {u.followed}
                        location = {"u.location"}   //В API поля location нет, зовем воображаемых бэкендщиков чтоб 
                                                  //добавили, удаляем или все обращения берем в кавычки
                        status = {u.status}
                        followUser = {props.followUser}
                        unfollowUser = {props.unfollowUser}
                        photos = {u.photos} //photoUrl в API называется photos
            />)}
        </div>
    )
}

export default Users;