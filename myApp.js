let express = require('express');
let app = express();

app.use('/public', express.static(__dirname +  "/public"));

// console.log("Hello World");

// app.get('/', (req, res) => {
//     res.send('Hello Express');
// });

app.get('/', (req, res) => {
    const path = __dirname + "/views/index.html";
    
    res.sendFile(path);
});

app.get('/json', (req, res) => {
    res.json({"message": "Hello json"});
}); 

module.exports = app;
