const express = require('express');
const app = express();
var cors = require('cors')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('dotenv').config();
dotenv.config();

mongoose.set("strictQuery", false);

MONGODB_URL= 'mongodb+srv://tan93493:<tan93493>@iot.8gxxw.mongodb.net/@iot?retryWrites=true&w=majority&appName=IoT';

mongoose.connect(
  MONGODB_URL,
    () => {
        console.log('Connected to MongoDB');
    },
);


app.use(cors());
const locationRoute = require('./api/routes/location.route');

app.use("/v1/api/location",locationRoute);
app.use("/",(req, res)=>{
  res.json({data: "No Data"})
});


app.listen(PORT, () => console.log(`server started ${PORT}`))
