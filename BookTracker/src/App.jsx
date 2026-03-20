import { useReducer, useEffect } from "react";
import { bookReducer } from "./reducer/bookReducer";
import { getBooks } from "./services/bookService";

import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import SearchBook from "./components/SearchBook";

import "./App.css";

function App() {

  const [books, dispatch] = useReducer(bookReducer, []);

  useEffect(() => {
    dispatch({
      type: "SET_BOOKS",
      payload: getBooks()
    });
  }, []);

  return (
    <div className="container">

      <h1>Library Book Tracker</h1>

      <AddBook dispatch={dispatch} />

      <SearchBook books={books} />

      <BookList books={books} dispatch={dispatch} />

    </div>
  );
}

export default App;