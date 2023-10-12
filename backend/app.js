const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.set("view engine", "ejs");


// ADD THIS
app.use(express.static('public'));
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


const account = require("./routes/accountRoute")


app.use("/api/v1", account);

module.exports = app;