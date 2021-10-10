import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileAPIComponent from './components/Profile/ProfileAPIComponent';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';



function App() {   
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
                  render={ () => <ProfileAPIComponent/> }/>
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
