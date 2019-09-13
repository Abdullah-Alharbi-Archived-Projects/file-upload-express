const Upload = require("../models/Upload");
const getUrl = require("./getUrl");
const getExtension = require("./getExtension");
const clearName = require("./clearName");

module.exports = ({ protocol, hostname, ...req }, file, cb) => {
  const originalName = file.originalname;
  const clearedName = clearName(originalName);
  const name = `${Date.now()}-${clearedName}`;
  const extension = getExtension(clearedName);
  const url = getUrl({ protocol, hostname, fileName: name });
  const upload = new Upload({ name, extension, url });

  upload.save().catch(O_O => console.log);

  cb(null, name);
};
