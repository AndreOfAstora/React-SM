import styles from './PageIndicator.module.scss';

const PageIndicator = (props) => {

    let openPage = () => {
        if (props.number != 0){
            props.openPage(props.number);
        } else {
            console.log('error');
        }

    }

    return (
    <span onClick = {openPage} 
          className = {`${styles.container} \
                        ${(props.active === true) ? styles.active : null}`}
    
    >{` ${props.number} `}</span>)
}

export default PageIndicator;