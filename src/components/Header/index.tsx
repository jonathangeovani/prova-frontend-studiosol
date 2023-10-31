import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="left-container" />
      <HeaderTop />
      <Navbar />
    </header>
  );
};
export default Header;
