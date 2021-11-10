

import styles from './UserIcon.module.scss';
import userIcon from '../../../assets/Images/userIcon.png';


const UserIcon = (props) => {    
    return ( <> {
        (!props.src)
            ?<img src={userIcon} className = {styles.icon}/>
            :<img src={props.src} className = {styles.icon}/>
    } </> )
}

export default UserIcon;