const express = require("express")
const {getNotes, createNote, getNoteById, updateNote, deleteNote} = require("../controllers/notesController")
const router = express.Router()

router.get("/notes",getNotes)
router.get("/notes/:id",getNoteById)
router.post("/notes",createNote)
router.put("/notes/:id",updateNote)
router.delete("/notes/:id",deleteNote)

module.exports = router
