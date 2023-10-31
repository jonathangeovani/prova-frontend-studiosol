import BookCard from "./BookCard";
import SectionTitle from "../../components/SectionTitle";
import { useFavoriteBooks } from "../../hooks/useFavoriteBooks";
import "./styles.css";

const FavoriteBooks = () => {
  const { isLoading, isError, books } = useFavoriteBooks();

  return (
    <section className="fav-books-section">
      <SectionTitle title="Livros favoritos" btnText="ver todos" />
      <div className="fav-books-carousel hide-scrollbar">
        {isLoading && <p>Carregando livros favoritos...</p>}

        {books?.map((book, index) => (
          <BookCard
            key={index}
            title={book.name}
            author={book.author.name}
            cover={book.cover}
            id={book.id}
          />
        ))}

        {isError && <p>Não foi possível carregar os livros favoritos!</p>}
      </div>
    </section>
  );
};
export default FavoriteBooks;
