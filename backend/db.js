const MongoClient = require('mongodb').MongoClient;
const appRoot = require('app-root-path');
const mongoConfig = require(`${appRoot}/config/mongo`);
const mongodb = require('mongodb')


function register(user, callback) {
    let client = new MongoClient(mongoConfig.database.url, mongoConfig.config);
    client.connect((err) => {
        const db = client.db(mongoConfig.database.databaseName);
        const collection = db.collection(mongoConfig.database.userCollection);
        collection.insertOne(user, function (err, docs) {
            callback(docs);
        });
        client.close();
    });
}

function login(user, callback) {
    let client = new MongoClient(mongoConfig.database.url, mongoConfig.config);
    client.connect((err) => {
        const db = client.db(mongoConfig.database.databaseName);
        const collection = db.collection(mongoConfig.database.userCollection);
        collection.find().toArray(function (err, docs) {
            var back = null;
            for (const usr of docs) {
                if (usr.email == user.email && usr.password == user.password) {
                    back = usr;
                }
            }
            callback(back);
        });
        client.close();
    });
}

function modify(user, callback) {
    let client = new MongoClient(mongoConfig.database.url, mongoConfig.config);
    client.connect((err) => {
        const db = client.db(mongoConfig.database.databaseName);
        const collection = db.collection(mongoConfig.database.userCollection);
        collection.updateOne({ email: user.email }, { $set: { name: user.name, password: user.password, email: user.email } }, function (err, docs) {
            callback(docs);
        });
        client.close();
    });
}

function getCars(callback) {
    let client = new MongoClient(mongoConfig.database.url, mongoConfig.config);
    client.connect((err) => {

        const db = client.db(mongoConfig.database.databaseName);
        const collection = db.collection(mongoConfig.database.carsCollection);

        collection.find().toArray(function (err, docs) {
            callback(docs);
        });
        client.close();
    });
}

function removeCar(car, callback) {
    let client = new MongoClient(mongoConfig.database.url, mongoConfig.config);
    client.connect((err) => {

        const db = client.db(mongoConfig.database.databaseName);
        const collection = db.collection(mongoConfig.database.carsCollection);

        collection.deleteOne({ _id: new mongodb.ObjectID(car.id) }, function (err, docs) {
            callback(docs);
        });
        client.close();
    });
}

function addCar(car, callback) {
    let client = new MongoClient(mongoConfig.database.url, mongoConfig.config);
    client.connect((err) => {

        const db = client.db(mongoConfig.database.databaseName);
        const collection = db.collection(mongoConfig.database.carsCollection);

        collection.insertOne(car, function (err, docs) {
            callback(docs);
        });
        client.close();
    });
}

function modifyCar(car, callback) {
    let client = new MongoClient(mongoConfig.database.url, mongoConfig.config);
    client.connect((err) => {
        const db = client.db(mongoConfig.database.databaseName);
        const collection = db.collection(mongoConfig.database.carsCollection);
        collection.updateOne({ _id: new mongodb.ObjectID(car._id) }, { $set: { name: car.name, manufacturer: car.manufacturer, color: car.color, year: car.year, hp: car.hp } }, function (err, docs) {
            callback(docs);
        });
        client.close();
    });
}



function getMyCars(user, callback) {
    let client = new MongoClient(mongoConfig.database.url, mongoConfig.config);
    client.connect((err) => {
        const db = client.db(mongoConfig.database.databaseName);
        const collection = db.collection(mongoConfig.database.carsCollection);
        var cars = [];
        collection.find().toArray(function (err, docs) {
            for (const car of docs) {
                if (car.user == user.user) {
                    cars.push(car);
                }
            }
            callback(cars);
        });
        client.close();
    });
}


module.exports = {
//user
    "register": register,
    "login": login,
    "modify": modify,
//car
	"getCars": getCars,
    "addCar": addCar,
    "removeCar": removeCar,
    "getMyCars": getMyCars,
    "modifyCar": modifyCar
};