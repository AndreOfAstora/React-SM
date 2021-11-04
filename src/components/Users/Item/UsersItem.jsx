import axios from 'axios';
import { NavLink } from 'react-router-dom';
import userIcon from '../../../assets/Images/userIcon.png';
import { API } from '../../../utils/apiURL';
import { API_KEY } from '../../../utils/constantsAuth';

import styles from './UsersItem.module.scss';


const UsersItem = (props) => {

    const cFollow = () => {
        axios.post(
            API+'/follow/'+props.id,
            {},
            {
                withCredentials: true,
                headers: {
                    'API-KEY': API_KEY
                }            
            }
        )
        .then(response =>{
            if (response.data.resultCode === 0)  props.follow(props.id)
        });
    }

    const cUnfollow = () => {
        axios.delete(
            API+'/follow/'+props.id,            
            {
                withCredentials: true,
                headers: {
                    'API-KEY': API_KEY
                }
            
            }
        )
        .then(response => {
            if (response.data.resultCode === 0)  
            props.unfollow(props.id)
        });
    }

    return (
        <div className = {styles.container}>
            <span className = {styles.user_left} >
                <NavLink to = {'/profile/' + props.id}>
                    <img src={ (props.photos.small === null) 
                            ? userIcon : props.photos.small}

                        className = {styles.user_icon} 
                    /> 
                </NavLink>
                
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