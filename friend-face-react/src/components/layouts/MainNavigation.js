import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import friendface from "./friendface.png";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.image} >
        <image src={friendface} alt="Friend face logo" />
        </div>
      <div className={classes.logo}>Friend Face</div> 

      <nav>
        <ul>
          <li>
            <Link to="/">FriendFace </Link>
          </li>
          <li>
            <Link to="/new-posts">New Posts </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
