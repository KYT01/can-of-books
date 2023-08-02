const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");

require("dotenv").config();

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

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
