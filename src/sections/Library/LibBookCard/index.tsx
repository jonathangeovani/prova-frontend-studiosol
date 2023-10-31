import { useNavigate } from "react-router-dom";
import "./styles.css";

type LibBookCardProps = {
  id: string;
  cover: string;
  title: string;
  author: string;
};

const LibBookCard = ({ cover, title, author, id }: LibBookCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="lib-book-card" onClick={() => navigate(`book/${id}`)}>
      <img
        src={cover}
        alt={`Capa do livro ${title}`}
        className="book-cover"
        loading="lazy"
      />
      <div className="lib-book-details">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
      </div>
    </div>
  );
};
export default LibBookCard;
