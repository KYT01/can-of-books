const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
const Book = require("./models/book");
require("dotenv").config();

console.log(process.env.PORT);
mongoose.connect(process.env.DATABASE_URL).then(console.log("DB Connected"));

const PORT = process.env.PORT || 8095;

const app = express();
app.use(cors());
app.use(bp.json());

app.get("/", (request, response) => {
  response.status(200).json("HEY");
});

app.get("/books", async (request, response) => {
  const allBooks = await Book.find(request.query);
  response.status(200).json(allBooks);
});

app.post("/books", async (request, response) => {
  const newBook = await Book.create(request.body);
  response.status(200).json(newBook);
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
