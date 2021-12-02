import Card from "../ui/Card";
import classes from "./CommentItem.module.css";
import { useState } from "react";
import DeleteHandler from "./DeletePost";
import LikeHandler from "../layouts/LikeHandle";
import Avatar from "./Avatar.png";

function CommentItem(props) {
  //const [like, setLike] = useState(props.likes);

  const [del, setDel] = useState(false);
  //this.setState(props.likes,like);
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <div
            className={classes.avatarimage}
            style={{ backgroundColor: props.avatar }}
          />
          <h3>{props.author}</h3>
          <h4>{props.date}</h4>
          
        </div>

        <div className={classes.actions}>
          <p>{props.content}</p>
          <h4>Likes:  {props.likes}</h4>
          <button onClick={() => LikeHandler(props)}>Like</button>
          <button onClick={() => DeleteHandler(props, setDel)}>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default CommentItem;
