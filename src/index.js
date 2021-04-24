
import './index.css';
// import {App, Header} from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
//addPost("Exercising regularly makes you smarter.");
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {addPost, updateNewPostText, subscribe} from './redux/state';


let rerenderEntireTree = (state) => {
 debugger;
 ReactDOM.render(
   <React.StrictMode>   
     <App state={state} 
          addPost={ addPost } 
          updateNewPostText={ updateNewPostText }/>
   </React.StrictMode>,
   document.getElementById('root')
 );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
