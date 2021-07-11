import s from './Post.module.scss';

function Post(props) {
  return (    
      <div className={`${s.post}`} style={{backgroundColor: props.color,}}>
        <img src={props.link}/>
        {props.text}
      </div>      
  )
}

export default Post;