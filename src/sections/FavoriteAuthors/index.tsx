import AuthorCard from "./AuthorCard";
import SectionTitle from "../../components/SectionTitle";
import { useFavoriteAuthors } from "../../hooks/useFavoriteAuthors";
import "./styles.css";

const FavoriteAuthors = () => {
  const { isLoading, authors, isError } = useFavoriteAuthors();

  return (
    <section className="fav-authors-section">
      <SectionTitle title="Autores favoritos" btnText="ver todos" />
      <div className="fav-authors-carousel hide-scrollbar">
        {isLoading && <p>Carregando autores favoritos...</p>}

        {authors?.map((author) => (
          <AuthorCard
            key={author.id}
            name={author.name}
            numBooks={author.booksCount}
            picture={author.picture}
          />
        ))}

        {isError && <p>Não foi possível carregar os autores favoritos!</p>}
      </div>
    </section>
  );
};
export default FavoriteAuthors;
