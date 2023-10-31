import "./styles.css";

type BookHeaderProps = {
  title: string;
  author: string;
};

const BookHeader = ({ title, author }: BookHeaderProps) => {
  return (
    <div className="book-header">
      <h2 className="book-title">{title}</h2>
      <p className="book-author">{author}</p>
    </div>
  );
};
export default BookHeader;
