import { useState } from "react";

const AddBook = ({ dispatch }) => {

  const [book, setBook] = useState({
    id: "",
    title: "",
    author: "",
    status: "Available"
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_BOOK",
      payload: book
    });

    setBook({
      id: "",
      title: "",
      author: "",
      status: "Available"
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Book</h3>

      <input
        placeholder="Book ID"
        value={book.id}
        onChange={(e) => setBook({ ...book, id: e.target.value })}
      />

      <input
        placeholder="Title"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
      />

      <input
        placeholder="Author"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
      />

      <select
        value={book.status}
        onChange={(e) => setBook({ ...book, status: e.target.value })}
      >
        <option>Available</option>
        <option>Issued</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
};

export default AddBook;