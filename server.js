require('dotenv').config();
const express = require('express');
const UserModel = require('./model/user')
const connectDB = require('./db/db.js');
const logger = require('./middleware/logger')
const morgan = require('morgan')


const app = express();
app.use(express.json());

//Connect to database
connectDB();


if(process.env.NODE_ENV === "development")
{
    app.use(morgan('dev'));

}

app.use('/api/v1/users',require('./router/router'))

app.listen(process.env.SERVER_PORT || 3001, (req,res) =>{
    console.log(`Server started on port ${process.env.SERVER_PORT} in ${process.env.NODE_ENV} mode`)
})