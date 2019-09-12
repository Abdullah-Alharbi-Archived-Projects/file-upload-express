const mongoose = require("mongoose");

module.exports = async () => {
  let attempts = 0;
  const MAX_ATTEMPTS = 3;

  while (true) {
    try {
      const mongoURI = "mongodb://localhost/upload";
      const connection = await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      return connection;
    } catch (O_O) {
      if (attempts == MAX_ATTEMPTS) {
        console.error(O_O);
        return false;
      }
      ++attempts;
    }
  }
};
