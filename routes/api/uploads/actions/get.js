const Upload = require.main.require("./models/Upload");

module.exports = async (req, res) => {
  const uploads = await Upload.find();
  return res.send(uploads);
};
