const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("Homepage: Exercise Four "));

module.exports = router;