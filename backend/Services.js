const appRoot = require('app-root-path');

function service(db) {

    if (db !== undefined && db !== null) {
        this.db = db;
    } else {
        this.db = require(`${appRoot}/db.js`);
    }

}

service.prototype.removeCar = function (car, callback) {
    this.db.removeCar(car, (response) => {
        callback(response);
    })
}

service.prototype.getMyCars = function (user, callback) {
    this.db.getMyCars(user, (respone) => {
        callback(respone);
    });
};

service.prototype.addCar = function (car, callback) {
    this.db.addCar(car, (response) => {
        callback(response);
    })
}

service.prototype.modifyCar = function (car, callback) {
    this.db.modifyCar(car, (response) => {
        callback(response);
    })
}

service.prototype.getCars = function (callback) {
    this.db.getCars((car) => {
        callback(car);
    });
};

service.prototype.register = function (user, callback) {
    this.db.register(user, (response) => {
        callback(response);
    });
};

service.prototype.login = function (user, callback) {
    this.db.login(user, (response) => {
        callback(response);
    });
};

service.prototype.modify = function (user, callback) {
    this.db.modify(user, (response) => {
        callback(response);
    });
};

module.exports = service;
