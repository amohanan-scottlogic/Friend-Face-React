import Card from "../ui/Card";
import classes from "./CommentItem.module.css";
import { useState } from "react";
import DeleteHandler from "./DeletePost";
import LikeHandler from "../layouts/LikeHandle";

function CommentItem(props) {
  
  //const [like, setLike] = useState(props.likes);

  const [del, setDel] = useState(false);
  //this.setState(props.likes,like);
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.author}</h3>
          <h4>{props.date}</h4>
          <h4>{props.likes}</h4>
          <p>{props.content}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={() =>LikeHandler(props)}>Like</button>
          <button onClick={() =>DeleteHandler(props,setDel)}>Delete</button>
          
        </div>
      </Card>
    </li>
  );
  
}

export default CommentItem;

