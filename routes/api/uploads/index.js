const { Router } = require("express");

const store = require("./actions/store");
const _delete = require("./actions/delete");

// middlewares
const multer = require("../../../middleware/multer");

const router = Router();

router.post("/", multer.array("files", 5), store);

module.exports = router;
