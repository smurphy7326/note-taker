
const uniqid = require('uniqid');
const fs = require ('fs');
const path = require('path');
const notes = require('../db/db.json');

// This function helps create the notes that we need 
// With help from animals.js from zookeepr
const createNewNote = (body, notesArray) => {
    const note = body;
    note.id =uniqid(); // taken from the npm that we were 
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2));
    return note;
};


// Have to work on the delete function
const deleteNote= (targetId) => {
    const noteId = req.params.id;
    const noteIndex = notes.findIndex(({ id }) => id === noteId);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2));
}


module.exports = createNewNote, deleteNote;