//import FriendFacePage from "../../pages/FriendFace";
//import CommentList from "./CommentList";


function DeleteHandler(props,setDel) {


  fetch(
    `https://friend-face-55e6b-default-rtdb.firebaseio.com/posts/${props.id}.json`,
    {
      method: "DELETE",
    }).then(() => setDel(true));

 
}

export default DeleteHandler;
