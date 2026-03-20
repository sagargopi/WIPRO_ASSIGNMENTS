export const bookReducer = (state, action) => {

  switch (action.type) {

    case "SET_BOOKS":
      return action.payload;

    case "ADD_BOOK":
      return [...state, action.payload];

    case "DELETE_BOOK":
      return state.filter(book => book.id !== action.payload);

    case "TOGGLE_STATUS":
      return state.map(book =>
        book.id === action.payload
          ? {
              ...book,
              status: book.status === "Available" ? "Issued" : "Available"
            }
          : book
      );

    default:
      return state;
  }
};