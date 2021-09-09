
import DialogItem from './DialogItem/DialogItem';
import styles from './DialogsWrapper.scss';

const DialogsWrapper = (props) => {
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

export default DialogsWrapper;