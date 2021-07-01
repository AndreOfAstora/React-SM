import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/state';
import s from './Dialogs.module.scss';

function DialogItem (props) {
 return (
  <div className={s.dialog}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
 );
}

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

  let dialogsDom = props.state.dialogsData
    .map ( dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

  let messageDom = props.state.messageData
    .map ( msg => <Message message={msg.message}/>);

  

  let send = () => {
    props.dispatch(sendMessageCreator());

  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(text));
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsDom}        
      </div>
      <div className={s.dialogs_messages}>
        {messageDom}             
        <textarea onChange={ onMessageChange }
                  value={ props.state.newMessageBody }/>
        <button onClick={send}>Send</button>
      </div>      
    </div>   
  );
}

export default Dialogs;