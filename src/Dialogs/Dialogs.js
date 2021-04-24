import React from 'react';
import { NavLink } from 'react-router-dom';
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

  let newMessageElement = React.createRef();  

  let send = () => {
    let text = newMessageElement.current.value;
    alert('Your message will be: ' + text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsDom}

        {/* <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
        <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
        <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
        <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/> */}
      </div>
      <div className={s.dialogs_messages}>
        {messageDom}        

        {/* <Message message={messageData[0].message}/>
        <Message message={messageData[1].message}/>
        <Message message={messageData[2].message}/>
        <Message message={messageData[3].message}/>
        <Message message={messageData[4].message}/>
        <Message message={messageData[5].message}/>        */}
        <textarea ref={newMessageElement}></textarea>
        <button onClick={send}>Send</button>
      </div>      
    </div>   
  );
}

export default Dialogs;