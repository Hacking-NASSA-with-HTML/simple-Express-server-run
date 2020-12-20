// npm init  Initialize Node in the current folder
// npm install express --save  Install Express
//  node index.js  Start Node to run
// http://localhost:3000/  Open in browser to see the Node is running

var express = require('express');
var app = express();


app.use('/', (req, res) => {

    var name = req.query.name;

    res.status(200).type('html');

    if (name) {
        res.write('Hi, ' + name + ", it's nice to see you.");
    }
    else {
        res.write('Welcome, guest!');
    }

    res.end();

});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});