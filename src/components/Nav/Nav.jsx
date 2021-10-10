import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from'./Nav.module.scss';

function Nav(props) {
    return (
        <nav className={`${s.nav} font`}>
            <div className={s.item}><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.item}><NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}><NavLink to='/users' activeClassName={s.active}>Users</NavLink></div>
            <div className={s.item}><NavLink to='/profile' activeClassName={s.active}>Video</NavLink></div>
            <div className={s.item}><NavLink to='/profile' activeClassName={s.active}>Audio</NavLink></div>
            <div className={s.item}><NavLink to='/profile' activeClassName={s.active}>Settings</NavLink></div>
            {/* <Friends friendsData={props.state.friendsData}/>                   */}
        </nav>
    );
}

export default Nav;