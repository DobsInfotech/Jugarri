const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

var { upload } = require("../middleware/schema.js");

router.get("/", class1.a);

router.get("/upload", class1.c);
router.post("/upload", upload.single("add2"), class1.d);

router.get("/:id", class1.e);

module.exports = router;
