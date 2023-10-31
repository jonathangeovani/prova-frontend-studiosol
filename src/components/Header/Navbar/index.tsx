import { useNavigate } from "react-router-dom";
import { HomeFilledIcon, PlusFilledIcon } from "../../Icons";
import { SearchOutlinedIcon, HeartFilledIcon } from "../../Icons";
import "./styles.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav-mobile">
      <ul className="nav-buttons">
        <li onClick={() => navigate("/")}>
          <HomeFilledIcon color="#A076F2" />
          <span className="active">Início</span>
        </li>
        <li>
          <PlusFilledIcon />
          <span>Adicionar</span>
        </li>
        <li>
          <SearchOutlinedIcon />
          <span>Buscar</span>
        </li>
        <li>
          <HeartFilledIcon />
          <span>Favoritos</span>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
