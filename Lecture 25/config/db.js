const {mongoose} = require('mongoose');

async function MongooseConnection() {
    await mongoose.connect('mongodb://localhost:27017/AIML')
    console.log('MongoDB Connected');
}

module.exports = MongooseConnection;