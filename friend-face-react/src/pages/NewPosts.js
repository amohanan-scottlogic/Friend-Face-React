import { useNavigate } from "react-router-dom";
import NewPostForm from "../components/posts/NewPostForm";

function NewPostPage() {
  const navigate = useNavigate();
  function addPostHandler(postData) {
    fetch("https://friend-face-55e6b-default-rtdb.firebaseio.com/posts.json", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <section>
      <h1>Add New Post</h1>
      <NewPostForm onAddPost={addPostHandler} />
    </section>
  );
}

export default NewPostPage;
