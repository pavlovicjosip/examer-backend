require('dotenv').config();
const express = require('express');
const UserModel = require('./model/user')
require('./db/db-connect');


const app = express();
app.use(express.json())
var user = new UserModel({
    name:"Test",
    lastName:"Testic",
    jmbag:"e414304",
    password:"test"

})

user.save((err,res)=>{
    if(err) return console.error(err);
    console.log(res)
});

app.use('/api/v1/users',require('./router/router'))

app.listen(process.env.SERVER_PORT || 3001, (req,res) =>{
    console.log(`Server started on port ${process.env.SERVER_PORT} in ${process.env.NODE_ENV} mode`)
})