import itemStyles from './DialogsItem.module.scss'
import { NavLink } from 'react-router-dom';


 const DialogItem = (props) => {
    return (
     <div className={ itemStyles.container }><NavLink to={ '/dialogs/' + props.id }>{props.name}</NavLink> 
     </div>
    );
}

export default DialogItem;