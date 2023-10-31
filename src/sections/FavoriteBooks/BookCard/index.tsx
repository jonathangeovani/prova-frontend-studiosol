import { useNavigate } from "react-router-dom";
import "./styles.css";

type BookCardProps = {
  id: string;
  title: string;
  author: string;
  cover: string;
};

const BookCard = ({ title, author, cover, id }: BookCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="fav-book" onClick={() => navigate(`/book/${id}`)}>
      <img src={cover} className="book-cover" loading="lazy" />
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
    </div>
  );
};

export default BookCard;
