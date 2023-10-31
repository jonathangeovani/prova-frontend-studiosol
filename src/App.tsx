import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/book/:bookId" element={<Book />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
