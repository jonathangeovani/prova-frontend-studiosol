import FavoriteAuthors from "../../sections/FavoriteAuthors";
import FavoriteBooks from "../../sections/FavoriteBooks";
import Library from "../../sections/Library";
import Tabs from "./Tabs";

const Home = () => {
  return (
    <main>
      <Tabs />
      <FavoriteBooks />
      <div className="bg-white-wrapper">
        <div className="left-container" />
        <div className="center-content">
          <FavoriteAuthors />
          <Library />
        </div>
        <div className="right-container" />
      </div>
    </main>
  );
};

export default Home;
