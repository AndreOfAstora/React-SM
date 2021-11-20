
import { useState } from 'react';
import styles from './FollowBtn.module.scss';



const FollowBtn = (props) => {
    let [isDisabled, setIsDisabled] = useState(false);

    const enable = () => setIsDisabled(false);
    const disable = () => setIsDisabled(true);

    const follow = () => {
        if (isDisabled) return;
        disable();
        
        props.follow(props.id)
        .then(res =>{
            if (res === 0)  {
                enable();
        } } );
    }

    const unfollow = () => {
        if (isDisabled) return;
        disable();
        
        props.unfollow(props.id)
        .then(res =>{
            if (res === 0)  {
                enable();
        } } );
    }
    return <div> {
        (props.followed == true)
            ? <button onClick={ unfollow } disabled={ isDisabled }>
                Unfollow
            </button>
            : <button onClick={ follow } disabled={ isDisabled }>
                Follow
            </button>
    } </div>
}

export default FollowBtn;