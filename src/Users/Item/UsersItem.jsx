import userIcon from '../../assets/Images/userIcon.png';

import styles from './UsersItem.module.scss';



const UsersItem = (props) => {

    const cFollow = () => {
        props.follow(props.id)
    }

    const cUnfollow = () => {
        props.unfollow(props.id)
    }

    return (
        <div className = {styles.container}>
            <span className = {styles.user_left} >
                <img src={ (props.photos.small === null) 
                         ? userIcon : props.photos.small}

                     className = {styles.user_icon} 
                /> 
                {(props.followed==true) ? 
                    <div><button onClick={cUnfollow}>Unfollow</button></div>
                    :<div><button onClick={cFollow}>Follow</button></div>}
            </span>
            <span className = {styles.caption}>
                <div>{props.name}</div>
                <div>{props.status}</div>
            </span>
            <span className = {styles.location}>
                <div>{"props.location.country"}</div> {/* Полей location.country и location.city нет в API */}
                <div>{"props.location.city"}</div>
            </span>
        </div>
    )
}

export default UsersItem;