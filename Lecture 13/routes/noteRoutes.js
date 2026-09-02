const express = require("express")
const {getNotes, createNote} = require("../controllers/notesController")
const router = express.Router()

router.get("/notes",getNotes)
router.post("/notes",createNote)

module.exports = router