module.exports = (req, file, cb) => {
  cb(null, `${Date.now()}-${file.originalname}`);
};
