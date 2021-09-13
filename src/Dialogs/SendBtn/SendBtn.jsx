import styles from './SendBtn.module.scss';

const SendBtn = (props) => {
    return(
        <button 
            onClick = {props.send}
            className = {styles.container}
        
        
        >Send</button>
    )
}

export default SendBtn;