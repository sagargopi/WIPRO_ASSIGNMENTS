import { useState } from "react";

const SearchBook = ({ books }) => {

  const [query, setQuery] = useState("");

  const filteredBooks = books.filter(
    book =>
      book.id.includes(query) ||
      book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h3>Search Book</h3>

      <input
        placeholder="Search by ID or Title"
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            {book.title} - {book.author} ({book.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBook;