
import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store, { addPostActionCreator, updateNewPostTextActionCreator } from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';



ReactDOM.render(
//   <React.StrictMode>  //With strict mode App rendered twice
    <BrowserRouter>
      <Provider store = {store}>
        <App/>
      </Provider>
    </BrowserRouter>      
//   </React.StrictMode>
  ,
  document.getElementById('root')
);


// Subscription removed for redux/react-redux to work correctly.
// Before it rendered two times with two different results

// let rerenderEntireTree = (store) => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <Provider store = {store}>
//           <App/>
//         </Provider>
//       </BrowserRouter>      
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// rerenderEntireTree( store );
// store.subscribe( () => {
//   rerenderEntireTree(store);
// } );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
