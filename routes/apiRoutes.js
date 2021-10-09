// The different dependencies
const router = require('express').Router();
const path = require('path');

// the place where the notes are going to go
const fs = require('fs') // provides a lot of very useful functionality to access and interact with the file system node.js.dv
const notes = require('../db/db.json');
const { createNewNote, deleteNote } = require('../lib/notes.js')

// The Get Request - This is from Zookeeper to help with this method
router.get('/notes', (req, res) => {
    return res.sendFile(path.join(__dirname, '../db/db.json'));
})

// Post request - This is also from the Zookeepr module to help with his method - zookeepr animal routes.js
router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();
  if (!req.body) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

// Delete Request and have to work on it 
router.delete('/notes/:id', (req, res) => { // This is like the above things that you need 
    req.params.id = notes.length.toString();
  if (!req.params.id) {
  } else {
    const note = deleteNote(req.body, notes);
    res.json(note);
  }
});

//Contact the database
module.exports = router;