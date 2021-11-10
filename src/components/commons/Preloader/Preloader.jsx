import preloader from '../../../assets/Images/preloader.gif';
import styles from './Preloader.module.scss';


const Preloader = (props) => {
    return (
        <div className = {styles.container}> {
            (props.isLoading) 
                ? <img src = {preloader}/> 
                : null
        } </div>
    )
}

export default Preloader;