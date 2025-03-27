const express = require("express");
const router = express.Router();
const Note = require("./models/Note");
const { protect } = require("./middleware/authMiddleware");

// Get all notes for a user
router.get("/", protect, async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
});

// Create a new note
router.post("/", protect, async (req, res) => {
  const { title, description, tags } = req.body;
  const note = await Note.create({ user: req.user._id, title, description, tags });
  res.json(note);
});

// Update a note
router.put("/:id", protect, async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(note);
});

// Delete a note
router.delete("/:id", protect, async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
});

module.exports = router;
