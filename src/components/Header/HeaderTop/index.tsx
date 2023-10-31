import { Link } from "react-router-dom";
import SearchForm from "../SearchForm";
import NavDesktop from "../NavDesktop";
import UserAvatar from "../UserAvatar";
import "./styles.css";
import { useUserPicture } from "../../../hooks/useUserPicture";

const HeaderTop = () => {
  const { avatar } = useUserPicture();

  return (
    <div className="header-top">
      <Link to="/">
        <h1>
          SS<span>BOOK</span>
        </h1>
      </Link>
      <SearchForm />
      <NavDesktop />
      <div className="hide-mobile header-divider" />
      <UserAvatar avatar={avatar ? avatar : "https://placehold.co/50x50"} />
    </div>
  );
};
export default HeaderTop;
