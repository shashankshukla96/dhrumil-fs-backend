const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/dhrumil';

const makeDbConnection = () => {

    mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.log('Error connecting to MongoDB: ', err);
    })

}

module.exports = makeDbConnection;