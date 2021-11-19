import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../../api/api';
import UserIcon from '../../commons/UserIcon/UserIcon';

import styles from './UsersItem.module.scss';


// TODO:

// 1) Offline scenario for buttons disabler
// 2) Make disabled button persist between unmounts (local storage or session storage?). Or don't?


const UsersItem = (props) => {
    
    let [isDisabled, setIsDisabled] = useState(false);

    const enable = () => setIsDisabled(false);
    const disable = () => setIsDisabled(true);

    const cFollow = () => {
        if (isDisabled) return;
        disable();
        
        props.follow(props.id)
        .then(res =>{
            if (res === 0)  {
                enable();
        } } );
    }

    const cUnfollow = () => {
        if (isDisabled) return;
        disable();
        
        props.unfollow(props.id)
        .then(res =>{
            if (res === 0)  {
                enable();
        } } );
    }

    return (
        <div className = {styles.container}>
            <span className = {styles.user_left} >
                <NavLink to = {'/profile/' + props.id}>
                    <UserIcon src = {props.photos.small}/>                    
                </NavLink>                
                <div>
                    {(props.followed==true) 
                        ?<button onClick={cUnfollow} disabled = { isDisabled }>
                            Unfollow
                        </button>
                        :<button onClick={cFollow} disabled = { isDisabled }>
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