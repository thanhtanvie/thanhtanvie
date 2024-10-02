const express = require('express')
const app = express()
const dotenv = require('dotenv');
var cors = require('cors')
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(()=> console.log('Connected'))
    .catch(err => console.log(err));

var bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

const locationRoute = require('./api/routes/location.route');

app.use("/v1/api/location",locationRoute);

app.listen(process.env.PORT)