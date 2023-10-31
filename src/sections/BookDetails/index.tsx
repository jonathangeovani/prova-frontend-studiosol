import { useParams } from "react-router-dom";
import BookHeader from "./BookHeader";
import BookMenuActions from "./BookMenuActions";
import { HeartFilledIcon, HeartOutlinedIcon } from "../../components/Icons";
import { useBook } from "../../hooks/useBook";
import "./styles.css";
import { textParser } from "../../utils/textParser";

const BookDetails = () => {
  const { bookId } = useParams();
  const { data } = useBook(bookId!);
  var { showAbout, content } = textParser(data?.description);

  return (
    <div className="book-details">
      <div className="book-details-top">
        <div className="left-container hide-mobile" />
        {data && <BookHeader title={data.name} author={data.author.name} />}
        <div className="book-favorite-icon">
          {data?.isFavorite ? (
            <HeartFilledIcon color="#555" />
          ) : (
            <HeartOutlinedIcon color="#555" />
          )}
        </div>
      </div>
      <div className="book-description">
        <div className="left-container hide-mobile"></div>
        <div className="book-image-container">
          <div className="container-wrapper">
            <img
              src={data?.cover}
              alt="Book title"
              className="book-banner"
              loading="lazy"
            />
            <BookMenuActions isFavorite={data?.isFavorite} />
          </div>
        </div>
        <div className="book-text">
          <p>{content[0]}</p>
          {showAbout && (
            <div className="hide-mobile">
              <h3>{content[1]}</h3>
              <p>{content[2]}</p>
            </div>
          )}
        </div>
        <div className="right-container"></div>
      </div>
    </div>
  );
};

export default BookDetails;
