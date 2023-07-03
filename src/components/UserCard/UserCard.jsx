import css from "../Home/Home.module.css";
import logo from "../../img/logo.png";
import chek from "../../img/chek.png";
import ellipse from "../../img/ellipse.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUsers } from "../../redux/oprations";

export const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
      event.preventDefault();
      const newUser = { ...user, following: !user.following };
      if (newUser.following) {
          newUser.followers = newUser.followers + 1
      } else {
          newUser.followers = newUser.followers - 1
      }
    dispatch(updateUsers(newUser));
  };

  return (
    <li>
      <form className={css.homeCard} onSubmit={handleSubmit}>
        <img className={css.homeCardLogo} src={logo} alt="logo" />
        <img className={css.homeCardChek} src={chek} alt="chek" />
        <span className={css.homeCardLine}></span>
        <img className={css.homeCardFrame} src={ellipse} alt="frame" />
        <img className={css.homeCardAvatar} src={user.avatar} alt="avatar" />

        <Link className={css.homeTitle} to={`tweets/${user.id}`}>
          {(+user.tweets).toLocaleString("en-EN")} tweets
        </Link>
        <p className={css.homeTxt}>
          {(+user.followers).toLocaleString("en-EN")} Followers
        </p>
        <button
          className={user.following ? css.homeBtnActive : css.homeBtn}
          type="submit"
        >
          {user.following ? "Following" : "Follow"}
        </button>
      </form>
    </li>
  );
};
