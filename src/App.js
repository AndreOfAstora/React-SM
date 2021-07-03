import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Profile from './Profile/Profile';
import DialogsContainer from './Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header/>    
      <div className='app__lower'>
        <Nav state={props.store.getState().sideNav}/>        
        <div className='main'>
          <Route  path='/profile' 
                  render={ () => <Profile store = { props.store }/> }/>
          <Route  path='/dialogs' 
                  render={ () => <DialogsContainer store = {props.store}/> }/>
        </div>
      </div>
    </div>   
  );
}


export default App;
