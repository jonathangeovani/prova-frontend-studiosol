import { HeartFilledIcon, PlusFilledIcon } from "../../Icons";

const NavDesktop = () => {
  return (
    <div className="nav-desktop hide-mobile">
      <ul className="nav-buttons">
        <li className="nav-item">
          <PlusFilledIcon color="#555" />
          <span>Adicionar</span>
        </li>
        <li className="nav-item">
          <HeartFilledIcon color="#555" />
          <span>Favoritos</span>
        </li>
      </ul>
    </div>
  );
};
export default NavDesktop;
