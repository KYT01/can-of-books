const mongoose = require("mongoose");
require("dotenv").config();

const Book = require("./models/book");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Book.create({
    title: "Fantastic Mr Fox",
    description:
      "Fantastic Mr Fox is the legendary tale of the most cunning fox in the world by Roald Dahl.",
    status: true,
  });
  await Book.create({
    title: "Divergent",
    description:
      "For sixteen-year-old Tris, the world changes in a heartbeat when she is forced to make a terrible choice.",
    status: false,
  });
  await Book.create({
    title: "Lapvona",
    description:
      "In a village in a medieval fiefdom, a motherless shepherd boy finds himself the unlikely pivot in a power struggle that puts faith to a savage test.",
    status: false,
  });
  console.log("Added a new book");
  mongoose.disconnect();
}

seed();
