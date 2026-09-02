const {notes} = require("../models/data")

const getNotes = (req,res) => {
    res.status(200).send(notes)
}

const createNote = (req,res) => {
    let {title,description,note,link,author,createdOn} = req.body

    let newData = {
        id:notes.length + 1,
        title:title,
        description:description,
        note:note,
        link:link,
        author:author,
        createdOn:createdOn
    }

    notes.push(newData)
    res.status(201).send("new note created successfully")

}

module.exports = {getNotes, createNote}