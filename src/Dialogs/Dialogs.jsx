import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogsReducer';
import s from './Dialogs.module.scss';
import DialogsWrapper from './DialogsWrapper/DialogsWrapper';

function Message (props) {
  return (
    <div className={s.message}>
      {props.message}
      <br/>
      <br/>
    </div>
  );
}

function Dialogs (props) {


  let messageJSX = props.messageData
    .map ( msg => <Message message={msg.message}/>);
      

  let send = () => {
    props.sendMessage();

  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageBody(text);
  }
    
    return (

        <div className={s.dialogs}>
            <DialogsWrapper dialogsData = {props.dialogsData}/>            
            <div className={s.dialogs_messages}>
                {messageJSX}
                <textarea onChange = {onMessageChange}
                    value = {props.newMessageBody} />
                <button onClick = {send}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;