import TopNavigators from "./TopNavigators";
import BookDetails from "../../sections/BookDetails";
import { useEffect } from "react";

const Book = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="book-section">
        <TopNavigators />
        <BookDetails />
      </div>
    </main>
  );
};

export default Book;
