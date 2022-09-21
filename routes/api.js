const router = require("express").Router()
const {notes} = require("../db/db.json")
const {v4:uuidv4} = require("uuid");
const {noteCreator} = require("../lib/lib");


router.get('/notes', (req, res) => {
  res.json(notes)
});

router.post('/notes', (req, res) => {
  req.body.id = uuidv4()
  let newNote = noteCreator(req.body, notes) 
  res.json(newNote)
});




module.exports=router