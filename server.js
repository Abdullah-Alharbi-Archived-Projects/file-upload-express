const express = require("express");
const { PORT } = require("./config.json");

const app = express();

// middlewares
const helmet = require("helmet");
const morgan = require("morgan");

app
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(helmet())
  .use(morgan("dev"));

// uploads route
const options = {
  dotfiles: "ignore",
  etag: false,
  index: false,
  redirect: false
};
app.use("/uploads/", express.static("uploads", options));

// routes
const routes = require("./routes/"); // this will point to index.js

app.use("/", routes);

(async () => {
  const connection = await require("./db")();

  if (!connection) return console.error("[db] Cannot establish connection.");

  app.listen(PORT, () => console.log(`Connected on http://localhost:${PORT}`));
})();
