const Upload = require("../models/Upload");
const getUrl = require("./getUrl");

module.exports = ({ protocol, hostname, ...req }, file, cb) => {
  const name = `${Date.now()}-${file.originalname}`;
  const extension = file.originalname.split(".")[1];
  const url = getUrl({ protocol, hostname, fileName: name });
  const upload = new Upload({ name, extension, url });

  upload.save().catch(O_O => console.log);

  cb(null, name);
};
