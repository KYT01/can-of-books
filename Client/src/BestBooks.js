import React, { useState, useEffect } from "react";
import axios from "axios";

const BestBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getBooks() {
    let API = "http://localhost:8095/books";
    const result = await axios.get(API);
    console.log(result.data);
    setBooks(result.data);
  }
};

return;
<div></div>;
