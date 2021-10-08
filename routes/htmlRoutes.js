// Dependencies

const router = require('express').Router();
const path = require('path');

// The different get requests for the files that are needed to go through the notes and index html to help populate the webpage
// Zoopkeepr helped with understanding the get routes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'))
})

// How to export the File
module.exports = router;