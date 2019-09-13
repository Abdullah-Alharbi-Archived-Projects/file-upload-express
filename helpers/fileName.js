const Upload = require("../models/Upload");

module.exports = (req, file, cb) => {
  const name = `${Date.now()}-${file.originalname}`;
  const extension = file.originalname.split(".")[1];
  const upload = new Upload({ name, extension });

  upload.save().catch(O_O => console.log);

  cb(null, name);
};
