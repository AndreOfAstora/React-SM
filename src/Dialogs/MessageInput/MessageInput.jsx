import styles from './MessageInput.scss'

// TODO: 1)figure out how to style text areas and stuff

const MessageInput = (props) => {
    return (
            <textarea
                onChange = {props.handleChange}
                value = {props.value}
            />        
    )
}

export default MessageInput;