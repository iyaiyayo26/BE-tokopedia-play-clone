require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const mongoStr = process.env.DATABASE_URL;

mongoose.connect(mongoStr);
const database = mongoose.connection;
database.on('error', (error) => {
    console.error(error);
});
database.once('connected', () => {
    console.log('database connected');
}); 


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

const videoRoute = require('./Route/videoRoute');
const productRoute = require('./Route/productRoute');
const userRoute = require('./Route/userRoute');
app.use('/api', videoRoute, userRoute, productRoute);


app.listen(process.env.PORT, () => {
    console.log(`app running on http://localhost:${process.env.PORT}`);
})
