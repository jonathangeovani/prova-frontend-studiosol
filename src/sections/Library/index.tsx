import CategoryButton from "./CategoryButton";
import LibBookCard from "./LibBookCard";
import { useAllBooks } from "../../hooks/useAllBooks";
import "./styles.css";

const Library = () => {
  const { isLoading, isError, books } = useAllBooks();

  return (
    <section className="library-section">
      <h2 className="lib-title">Biblioteca</h2>
      <div className="category-carousel hide-scrollbar">
        <CategoryButton text="Todos" isActive />
        <CategoryButton text="Romance" />
        <CategoryButton text="Aventura" />
        <CategoryButton text="Comédia" />
        <CategoryButton text="Terror" />
        <CategoryButton text="Tecnologia" />
        <CategoryButton text="Viagens" />
      </div>
      <div className="lib-books">
        {isLoading && <p>Carregando livros...</p>}

        {books?.map((book, index) => (
          <LibBookCard
            key={index}
            id={book.id}
            cover={book.cover}
            title={book.name}
            author={book.author.name}
          />
        ))}

        {isError && <p>Não foi possível carregar os livros da biblioteca!</p>}
      </div>
    </section>
  );
};
export default Library;
