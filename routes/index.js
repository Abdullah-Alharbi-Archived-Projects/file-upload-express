const { Router } = require("express");
const uploads = require("./api/uploads");

const router = Router();

router.get("/", (req, res) => {
  res.send("<h1>Welcome to file upload app</h1>");
});

router.use("/api/uploads/", uploads);

module.exports = router;
