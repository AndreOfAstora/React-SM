
import DialogItem from './DialogItem/DialogItem';
import styles from './DialogsList.scss';

const DialogsList = (props) => {
        debugger;
        return (
            <div className = { styles.container }>                
                {props.dialogsData
                    .map ( dialog => <DialogItem 
                                        id = { dialog.id } 
                                        name = { dialog.name }/>)}
            </div>
        )
}

export default DialogsList;