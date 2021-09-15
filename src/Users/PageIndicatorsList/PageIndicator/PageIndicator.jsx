import styles from './PageIndicator.module.scss';

const PageIndicator = (props) => {

    let openPage = () => {
        props.openPage(props.number);

    }

    return (
    <span onClick = {openPage} 
          className = {`${styles.container} \
                        ${(props.active === true) ? styles.active : null}`}
    
    >{` ${props.number} `}</span>)
}

export default PageIndicator;