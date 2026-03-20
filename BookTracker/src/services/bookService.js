let books = [
  { id: "101", title: "React Basics", author: "Dan Abramov", status: "Available" },
  { id: "102", title: "JavaScript Guide", author: "Brendan Eich", status: "Issued" }
];

export const getBooks = () => {
  return books;
};

export const addBook = (book) => {
  books.push(book);
};

export const deleteBook = (id) => {
  books = books.filter(book => book.id !== id);
};

export const toggleStatus = (id) => {
  books = books.map(book =>
    book.id === id
      ? { ...book, status: book.status === "Available" ? "Issued" : "Available" }
      : book
  );
};