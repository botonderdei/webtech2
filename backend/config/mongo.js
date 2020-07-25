const mongoConfig = {
    database: {
        url: 'mongodb://localhost:27017',
        databaseName: 'webtech2',
        userCollection: 'users',
        carsCollection: 'cars'
    },
    config: {
        useNewUrlParser: true
    }

};

module.exports = mongoConfig;