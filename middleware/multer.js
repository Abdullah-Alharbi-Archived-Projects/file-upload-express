const multer = require("multer");
const storage = require("../helpers/diskStroage");
const fileFilter = require("../helpers/fileFilter");

const upload = multer({ storage, fileFilter });

module.exports = upload;
