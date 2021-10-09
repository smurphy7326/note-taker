// Dependencies
// Helped with Zookeepr as the weekly module

const path = require('path');
const router = require('express').Router();

// The different get requests for the files that are needed to go through the notes and index html to help populate the webpage
// Zoopkeepr helped with understanding the get routes
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// How to export the File
module.exports = router;