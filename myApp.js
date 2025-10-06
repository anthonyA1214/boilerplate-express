let express = require('express');
let app = express();
require('dotenv').config();

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
    const messageStyle = process.env.MESSAGE_STYLE

    const resObj = {"message": "Hello json"};

    if (messageStyle === "uppercase") {
        resObj.message = resObj.message.toUpperCase();
    }

    res.json(resObj);
}); 

module.exports = app;
