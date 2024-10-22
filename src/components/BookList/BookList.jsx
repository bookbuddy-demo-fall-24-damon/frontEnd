import React from "react";
import BookCard from "../BookCard/BookCard";

function BookList({ BookData }) {
  return (
    <div className="books_container">
      {bookData.map((book) => (
        <BookCard
          key={book.id}
          book={book}
        />
      ))}
    </div>
  );
}

export default BookList;
