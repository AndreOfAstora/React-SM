
import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store, { addPostActionCreator, updateNewPostTextActionCreator } from './redux/state';


let rerenderEntireTree = (state) => {
 debugger;
 ReactDOM.render(
   <React.StrictMode>   
     <App state={ state } 
          dispatch={ store.dispatch.bind(store) }
          addPostActionCreator = { addPostActionCreator }
          updateNewPostTextActionCreator = { updateNewPostTextActionCreator } 
     />
   </React.StrictMode>,
   document.getElementById('root')
 );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
