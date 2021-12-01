//import { useState } from "react";
function LikeHandler(props) {
  var post = [];

  console.log("We are in the Like Handler");
  console.log(props.likes);
  console.log(props.id);

  fetch(
    `https://friend-face-55e6b-default-rtdb.firebaseio.com/posts/${props.id}.json`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      post = data;
      console.log(post);
      const count = parseInt(post.likes,10) + 1;
      fetch(
        `https://friend-face-55e6b-default-rtdb.firebaseio.com/posts/${props.id}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({ likes: count }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    });

  console.log(post);
}

export default LikeHandler;
