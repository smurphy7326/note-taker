const fs = require ('fs');
const path = require('path');

// This function helps create the notes that we need 
function createNewNote(body, notesArray) {
    const note = body;
    note.id =uniqid();
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
};

// Have to work on the delete function
//function deleteNote() {}