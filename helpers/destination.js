const { join } = require("path");
const uploadsPath = join(__dirname, "../uploads");

module.exports = (req, file, cb) => cb(null, uploadsPath);
