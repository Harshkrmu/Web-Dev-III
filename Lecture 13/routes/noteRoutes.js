const express = require("express")
const {getNotes, createNote, getNoteById, updateNote, deleteNote} = require("../controllers/notesController")
const {isAuthorized, isLoggedIn} = require("../middlewares/isAuthorized")
const router = express.Router()

// router.get("/notes",getNotes)
// router.get("/notes/:id",getNoteById)
// router.post("/notes",createNote)
// router.put("/notes/:id",updateNote)
// router.delete("/notes/:id",deleteNote)

router.get("/notes",isAuthorized,isLoggedIn,getNotes)


module.exports = router
