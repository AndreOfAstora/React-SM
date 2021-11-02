import s from './Header.module.scss';

function Header(props) {
    return (
        <header className={s.header}>
            <img src="https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png" width="150" />
            <div>
                <div>Login: {props.login}</div>
                <div>Email: {props.email}</div>
                <div>ID: {props.id}</div>
            </div>
            
        </header>
    );
}

export default Header;