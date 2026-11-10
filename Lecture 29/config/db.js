const mongoose = require('mongoose');

// async function MongooseConnection() {
//     await mongoose.connect('mongodb://localhost:27017/AIML')
//     console.log('MongoDB Connected');
// }

async function MONGODBConnection() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        throw error;
    }
}

module.exports = MONGODBConnection;