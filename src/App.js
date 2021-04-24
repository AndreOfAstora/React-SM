import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>    
        <div className='app__lower'>
          <Nav state={props.store.getState().sideNav}/>        
          <div className='main'>
            <Route path='/profile' 
                  render={ () => <Profile store = { props.store }/> }/>
            <Route path='/dialogs' render={ () => <Dialogs store={ props.store }/> }/>
          </div>
        </div>
      </div>
    </BrowserRouter>    
  );
}

export default App;
