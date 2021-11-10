import { NavLink } from 'react-router-dom';
import { followAPI } from '../../../api/api';
import UserIcon from '../../commons/UserIcon/UserIcon';

import styles from './UsersItem.module.scss';


// TODO:

// 1) Offline scenario for buttons disabler
// 2) Realize button disable functionality with local state (hooks are prefered)

const UsersItem = (props) => {

    const cFollow = () => {
        props.disable(props.id)                            
        followAPI.follow(props.id)
        .then(data =>{
            if (data.resultCode === 0)  props.follow(props.id)
            props.enable(props.id)
        });
    }

    const cUnfollow = () => {
        props.disable(props.id)
        followAPI.unfollow(props.id)
        .then(data => {
            if (data.resultCode === 0)  
            props.unfollow(props.id)
            props.enable(props.id)
        });
    }

    return (
        <div className = {styles.container}>
            <span className = {styles.user_left} >
                <NavLink to = {'/profile/' + props.id}>
                    <UserIcon src = {props.photos.small}/>                    
                </NavLink>                
                <div>
                    {(props.followed==true) 
                        ?<button onClick={cUnfollow} disabled = {
                            props.isDisabled
                            && props.disabled.some( el => el === props.id ) 
                        }>
                            Unfollow
                        </button>
                        :<button onClick={cFollow} disabled = {
                            props.isDisabled
                            && props.disabled.some( el => el === props.id )
                        }>
                            Follow
                        </button>}
                </div>
                
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