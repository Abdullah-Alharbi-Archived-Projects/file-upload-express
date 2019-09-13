module.exports = name => {
  return name.match(/[^.]+$/gi)[0];
};
