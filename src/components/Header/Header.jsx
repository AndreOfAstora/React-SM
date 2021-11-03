import s from './Header.module.scss';

// TODO: 

// 1) link to user profile, if authed

// 2) login form if not authed

// 3) break down into more componnents. HOW? WHY?

function Header(props) {
    return (
        <header className={s.header}>
            <img src="https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png" width="150" />
            {(props.isLoggedIn) ? 
                <div>
                    <div>Login: {props.login}</div>
                    <div>Email: {props.email}</div>
                    <div>ID: {props.id}</div>
                </div> : 
                'Log in'}
            
            
        </header>
    );
}

export default Header;