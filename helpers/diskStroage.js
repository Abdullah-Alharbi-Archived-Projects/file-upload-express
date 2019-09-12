const multer = require("multer");

const destination = require("./destination");
const filename = require("./fileName");

const storage = multer.diskStorage({
  destination,
  filename
});

module.exports = storage;
