import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogsReducer';
import s from './Dialogs.module.scss';
import DialogsList from './DialogsList/DialogsList';
import MessageList from './MessageList/MessageList';

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

        <div className={s.dialogs}>
            <DialogsList dialogsData = {props.dialogsData}/>            
            <div className={s.dialogs_messages}>
                <MessageList messageData = {props.messageData}/>
                {/* {messageJSX} */}
                <textarea onChange = {onMessageChange}
                    value = {props.newMessageBody} />
                <button onClick = {send}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;