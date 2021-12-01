import CommentItem from './CommentItem';
import classes from './CommentList.module.css'


function CommentList(props) {

    return <ul className={classes.list}>
        {props.comments.map(comment => 
        <CommentItem 
        key={comment.id}
         id={comment.id}
         author={comment.author}
         date={comment.date}
         likes={comment.likes}
         content={comment.content}
         
         />)}
    </ul>

}

export default CommentList;