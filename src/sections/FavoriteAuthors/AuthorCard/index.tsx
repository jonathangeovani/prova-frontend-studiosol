import "./styles.css";

type AuthorCardProps = {
  name: string;
  numBooks: number;
  picture: string;
};

const AuthorCard = ({ name, numBooks, picture }: AuthorCardProps) => {
  return (
    <div className="fav-author-card">
      <img
        src={picture}
        className="author-picture"
        alt="Author picture"
        loading="lazy"
      />
      <div className="author-details">
        <h3 className="author-title">{name}</h3>
        <p className="author-books-count">{numBooks} Livros</p>
      </div>
    </div>
  );
};

export default AuthorCard;
