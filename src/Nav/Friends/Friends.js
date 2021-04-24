import Friend from './Friend/Friend';
import s from './Friends.module.scss';

function Friends (props) {

 let friendsDom = props.friendsData.map( f => <Friend name={f.name}/>);

 return(
  <div className={s.container}>
   <p className={s.caption}>Friends</p>
   <div className={s.items}>
    {friendsDom}
   </div>
  </div>
 )
}

export default Friends;