import styles from './MessageItem.module.scss';

const MessageItem =  (props) => {
    
    return (
      <div className = {styles.container}>
        {props.message}
        <br/>
        <br/> 
      </div>
    );
}

export default MessageItem;