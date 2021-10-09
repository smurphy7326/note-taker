
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
const deleteNote= (notesArray, id) => {
    let noteIdRemove = parseInt(id); // function parses a string argument and returns an integer of the specified radix
    notesArray.splice(noteIdRemove, 1); // splices the notes you want out 
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'), // fs.writeFileSync( file, data, options ), and we had to stringify the object
        JSON.stringify(notesArray, null, 2)); // returns the response as a json in the db.json file
}


module.exports = { createNewNote, deleteNote };