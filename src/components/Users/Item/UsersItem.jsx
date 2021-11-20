import UserIcon from '../../commons/UserIcon/UserIcon';

import styles from './UsersItem.module.scss';


// TODO:

// 1) Offline scenario for buttons disabler
// 2) Make disabled button persist between unmounts (local storage or session storage?). Or don't?


const UsersItem = (props) => {   

    return (
        <div className = {styles.container}>
            <span className = {styles.user_left} >    
                <UserIcon id = { props.user.id } src = { props.user.photos.small }/>
                { props.children }              
            </span>
            <span className = {styles.caption}>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
            </span>
            <span className = {styles.location}>
                <div>{"props.location.country"}</div>
                <div>{"props.location.city"}</div>
            </span>
        </div>
    )
}

export default UsersItem;