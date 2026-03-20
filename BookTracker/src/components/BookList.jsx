const BookList = ({ books, dispatch }) => {

  return (
    <div>
      <h3>Book List</h3>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.status}</td>

              <td>
                <button
                  onClick={() =>
                    dispatch({ type: "TOGGLE_STATUS", payload: book.id })
                  }
                >
                  Toggle
                </button>

                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_BOOK", payload: book.id })
                  }
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;