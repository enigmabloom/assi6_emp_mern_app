const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log('Database connection established');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });

module.exports = mongoose;
