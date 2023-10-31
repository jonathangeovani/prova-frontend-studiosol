import { HeartFilledIcon, HeartOutlinedIcon } from "../../../components/Icons";
import share from "../../../assets/icons/share.svg";
import download from "../../../assets/icons/download.svg";
import "./styles.css";

type BookMenuActionsProps = {
  isFavorite?: boolean;
};

const BookMenuActions = ({ isFavorite }: BookMenuActionsProps) => {
  return (
    <div className="book-menu hide-mobile">
      <div className="action-button">
        {isFavorite ? (
          <HeartFilledIcon color="#555" />
        ) : (
          <HeartOutlinedIcon color="#555" />
        )}
        <span>Favoritar</span>
      </div>
      <div className="action-button">
        <img src={share} className="action-icon" />
        <span>Compartilhar</span>
      </div>
      <div className="action-button">
        <img src={download} className="action-icon" />
        <span>Salvar em uma lista</span>
      </div>
    </div>
  );
};
export default BookMenuActions;
