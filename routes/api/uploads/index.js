const { Router } = require("express");

const get = require("./actions/get");
const store = require("./actions/store");
const _delete = require("./actions/delete");

// middlewares
const multer = require("../../../middleware/multer");

const router = Router();

router
  .get("/", get)
  .post("/", multer.array("files", 5), store)
  .delete("/:id", _delete);

module.exports = router;
