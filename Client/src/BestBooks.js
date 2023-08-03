import { useState, useEffect } from "react";
import axios from "axios";

const BestBooks = () => {
  // stores all our books.
  const [books, setBooks] = useState([]);
  // when our page runs, or the state, changes.
  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    let API = "http://localhost:8095/books";
    const result = await axios.get(API);
    console.log(result.data);
    setBooks(result.data);
  }
  return (
    <div>
      {books.map((book) => {
        return (
          <div>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            {/* <img src={book.img_url} /> */}
            <p>{book.status}</p>
          </div>
        );
      })}
    </div>
  );
};
export default BestBooks;
