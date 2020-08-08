const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist/week4tut/')));

require('./routes/authenticate.js')(app, path);
require('./listen.js')(http);