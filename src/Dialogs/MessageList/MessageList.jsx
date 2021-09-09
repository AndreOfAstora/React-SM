import MessageItem from "./MessageItem/MessageItem";
import styles from './MessageList.module.scss';



const MessageList = (props) => {
    debugger;
    return(
        <div className = {styles.container}>
            {props.messageData.map(e => <MessageItem message = { e.message } />)}
        </div>
    )
}

export default MessageList;