//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = process.env.MONGO_DB_URL_LOCAL;

const connectDb = async () => {
    try {
        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }
    catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

connectDb();

var db = mongoose.connection;

db.on('error', () => {
    console.log("Error connecting to database")
});
db.once('open', () => {
    // db.dropDatabase()
    console.log("We are connected")
})

module.exports = db

