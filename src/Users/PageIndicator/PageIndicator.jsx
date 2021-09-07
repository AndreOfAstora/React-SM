
const PageIndicator = (props) => {

    let openPage = () => {
        debugger;
        props.openPage(props.number);

    }

    return (
    <span onClick = {openPage} 
          style = { {cursor: 'pointer', 
                     marginRight: '7px', 
                     padding: '3px',
                     fontWeight: (props.active === true) ? 'bold' : 'normal'}}
    
    >{` ${props.number} `}</span>)
}

export default PageIndicator