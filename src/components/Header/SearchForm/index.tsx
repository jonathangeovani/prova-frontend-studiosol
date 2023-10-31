import { SearchOutlinedIcon } from "../../Icons";

const SearchForm = () => {
  return (
    <form className="search-form hide-mobile">
      <input
        className="search-input"
        type="text"
        name="q"
        placeholder="Busque um livro"
      />
      <button className="search-button" type="submit">
        <SearchOutlinedIcon size={24} />
      </button>
    </form>
  );
};
export default SearchForm;
