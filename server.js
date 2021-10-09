const apiRoutes = ('./routes/apiRoutes.js'); 
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express'); // calls the express npm to allow what needs to be done to be done
// installed jest out of habit from the module
const PORT = process.env.PORT || 3001; // goes to the local host, which in this case is local host 3001

const app = express(); 

// app use sections
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'));
// API use Routes
app.use('./api', apiRoutes)
app.use('/', htmlRoutes)


// Listen section
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});