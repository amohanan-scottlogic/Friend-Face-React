import CommentList from "../components/posts/CommentList";
import { useState, useEffect } from "react";

const posts = [];

function FriendFacePage() {
  const [loadedPosts, setLoadedPosts] = useState([]);
  // const [content, setContent] = useState([]);
  const [sortType, setSortType] = useState("name");

  useEffect(() => {
    fetch("https://friend-face-55e6b-default-rtdb.firebaseio.com/posts.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (const key in data) {
          const post = {
            id: key,
            ...data[key],
          };
          posts.push(post);
        }

        setLoadedPosts(posts);
      });
  }, []);

  useEffect(() => {
    // setContent(posts);
    const sortHandler = (type) => {
      console.log(type);
      var sorted = [];
      if (type === "name")
        sorted = posts.sort((a, b) => a.author.localeCompare(b.author));
      else
        sorted = posts.sort(
          (a, b) => Number(new Date(a.date)) - Number(new Date(b.date))
        );
      console.log(sorted);
      //setLoadedPosts(sorted);
    };
    sortHandler(sortType);
  }, [sortType]);

  return (
    <section>
      <label for="sort">Choose a sort option:</label>
      <select
        name="sort"
        id="sort"
        form="sort"
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="name">Name</option>
        <option value="date">Date</option>
      </select>

      <h1>Posts </h1>
      <CommentList comments={loadedPosts} />
    </section>
  );
}

export default FriendFacePage;
