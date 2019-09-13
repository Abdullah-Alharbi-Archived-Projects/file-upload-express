const { PORT } = require("../config.json");

module.exports = ({ protocol, hostname, fileName, uploadFolder = "uploads" }) =>
  `${protocol}://${hostname}:${PORT}/${uploadFolder}/${fileName}`;
