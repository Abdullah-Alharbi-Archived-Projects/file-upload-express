const { Router } = require("express");
const uploads = require("./uploads/");

const router = Router();

router.use("/uploads/", uploads);

module.exports = router;
