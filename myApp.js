let express = require('express');
let app = express();
require('dotenv').config();
const bodyParser = require('body-parser');

// console.log("Hello World");

// app.get('/', (req, res) => {
//     res.send('Hello Express');
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public', express.static(__dirname +  "/public"));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} -  ${req.ip}`);
    next();
});

app.get('/', (req, res) => {
    const path = __dirname + "/views/index.html";
    
    res.sendFile(path);
});

app.get('/json', (req, res) => {
    const messageStyle = process.env.MESSAGE_STYLE

    const resObj = { "message": "Hello json" };

    if (messageStyle === "uppercase") {
        resObj.message = resObj.message.toUpperCase();
    }

    res.json(resObj);
});

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({ "time": req.time });
});

app.get('/:word/echo', (req, res) => {
    const { word } = req.params;
    res.json({ "echo": word });
})

app.route('/name')
.get((req, res) => {
    const { first, last } = req.query;
    res.json({ "name": `${first} ${last}` });
});
module.exports = app;
