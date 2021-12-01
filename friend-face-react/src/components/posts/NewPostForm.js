import classes from "./NewPostForm.module.css";
import { useRef } from "react";
import Card from "../ui/Card";

function NewPostForm(props) {
  const authorInputRef = useRef();
  const dateInputRef = useRef();
  const likesInputRef = useRef();
  const contentInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredAuthor = authorInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    // const startId = authorInputRef.current.value + (dateInputRef.current.value).toString();
    const startLikes = likesInputRef.current.value;

    const enteredContent = contentInputRef.current.value;

    const postData = {
      author: enteredAuthor,
      date: enteredDate,
      // id: startId,
      likes: startLikes,

      content: enteredContent,
    };
    props.onAddPost(postData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" required id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Date</label>
          <input type="date" required id="date" ref={dateInputRef} />
          <input type="hidden" id="likes" value="0" ref={likesInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="content">Post</label>
          <textarea required id="content" rows="5" ref={contentInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Post</button>
        </div>
      </form>
    </Card>
  );
}

export default NewPostForm;
