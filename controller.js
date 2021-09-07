const meme = require("./model");
const mongoose = require("mongoose");

const getMeme = async (req, res) => {
  try {
    const allMemes = await meme.find();

    res.status(200).json(allMemes);
  } catch (error) {
    res.status(404).json({ message: "Memes not found" });
  }
};

const createMeme = async (req, res) => {
  const { image } = req.body;

  const newMeme = new meme({
    image,
  });

  try {
    await newMeme.save();

    res.status(201).json(newMeme);
  } catch (error) {
    res.status(409).json({ message: "Creating meme failed" });
  }
};

const deleteMeme = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No meme with id: ${id}`);

  await meme.findByIdAndRemove(id);

  res.json({ message: "meme deleted successfully." });
};

module.exports = {
  getMeme,
  createMeme,
  deleteMeme,
};
