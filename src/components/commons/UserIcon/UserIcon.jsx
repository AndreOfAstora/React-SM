

import styles from './UserIcon.module.scss';
import userIcon from '../../../assets/Images/userIcon.png';
import { NavLink } from 'react-router-dom';


const UserIcon = (props) => {    
    return <NavLink to = {'/profile/' + props.id}> {
        (!props.src)
            ?<img src={userIcon} className = {styles.icon}/>
            :<img src={props.src} className = {styles.icon}/>
    } </NavLink>  
}

export default UserIcon;