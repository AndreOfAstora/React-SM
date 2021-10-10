import preloader from '../../../assets/Images/preloader.gif';


const Preloader = (props) => {
    return (
        <>
            {(props.isLoading) ? <img src = {preloader}/> : null}        
        </>
        
    )
}

export default Preloader;