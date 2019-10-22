var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  lastName:String,
  jmbag:String,
  password:String
});

// Compile model from schema
var UserModel = mongoose.model('user', UserSchema );

module.exports = UserModel;