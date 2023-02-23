const express = require('express'); const path = require('path'); 
const app = express(); app.use(express.json()); 
app.use(express.static("express")); 
// default URL for website 
app.use('/', function (req, res) {
res.sendFile(path.join(__dirname + '/SPA.html')); });
app.listen(3000)