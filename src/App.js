import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Profile from './Profile/Profile';
import DialogsContainer from './Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import StoreContext from './storeContext';
import Users from './Users/Users';
import UsersContainer from './Users/UsersContainer';



function App(props) {   
  return (
    <div className="app-wrapper">
      <Header/>    
      <div className='app__lower'>
        {/* <StoreContext.Consumer>{
          (store)=>{return (<Nav state={store.getState().sideNav}/>)}
        }</StoreContext.Consumer> */}
        <Nav/>              
        <div className='main'>
          <Route  path='/profile' 
                  render={ () => <Profile/> }/>
          <Route  path='/dialogs' 
                  render={ () => <DialogsContainer/> }/>
          <Route  path = '/users'
                  render = {() => <UsersContainer/>}/>
        </div>
      </div>
    </div>   
  );
}


export default App;
