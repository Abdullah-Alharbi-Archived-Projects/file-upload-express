const { Router } = require("express");
const api = require("./api/");

const router = Router();

router.get("/", (req, res) => {
  res.send("<h1>Welcome to file upload app</h1>");
});

router.use("/api/", api);

module.exports = router;
