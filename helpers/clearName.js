module.exports = name => {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s/gi, "")
    .replace(/\d./gi, "")
    .replace(/[^\w.]/gi, "");
};
