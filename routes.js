const { getMeme, createMeme, deleteMeme } = require("./controller");
const router = require("express").Router();

router.get("/", getMeme);
router.post("/", createMeme);
router.delete("/:id", deleteMeme);

module.exports = router;
