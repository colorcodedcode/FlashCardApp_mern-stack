// Declarations
const express = require('express');
const app = express();
const myport = process.env.port || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.listen(myport, function() { console.log(`Now listening on port ${myport}`); });

// Routes
app.get('/', (req, res) => {
    res.redirect('index.html');
});
