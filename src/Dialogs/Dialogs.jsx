import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogsReducer';
import s from './Dialogs.module.scss';
import DialogsList from './DialogsList/DialogsList';
import MessageInput from './MessageInput/MessageInput';
import MessageList from './MessageList/MessageList';
import SendBtn from './SendBtn/SendBtn';

function Dialogs (props) {
    
//   TODO: 1)Remove unused styles; 2) Move textarea and buttons into separate componnents

  let send = () => {
    props.sendMessage();
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageBody(text);
  }
    
    return (

        <div className={s.container}>
            <DialogsList dialogsData = {props.dialogsData}/>            
            <div className={s.container_messages}>
                <MessageList messageData = {props.messageData}/>
                {/* {messageJSX} */}
                <MessageInput
                    handleChange = { onMessageChange }
                    value = { props.newMessageBody }/>
                <SendBtn send = { send } />
            </div>
        </div>
    );
}

export default Dialogs;