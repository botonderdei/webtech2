const express = require('express');
const router = express.Router();
const appRoot = require('app-root-path');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
    extended: true
}));

const sc = require(`${appRoot}/Services`);
const service = new sc();

//car

router.get('/getCars', (req, res) => {
    service.getCars((response) => {
        res.status(200).send(response);
    })
});

router.post('/getMyCars', (req, res) => {
    console.log(req.body);
    console.log("debug");
    service.getMyCars({ user: req.body.user }, (response) => {
        res.status(200).send(response);
    })
});

router.post('/removeCar', (req, res) => {
    console.log(req.body.id);
    service.removeCar({ id: req.body.id }, (response) => {
        res.status(200).send(response);
    });
});

router.post('/addCar', (req, res) => {
    service.addCar(
        {
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            color: req.body.color,
            year: req.body.year,
            hp: req.body.hp,
            user: req.body.user
        },
        (response) => {
            res.status(200).send(response);
        })
});

router.post('/modifyCar', (req, res) => {
    console.log(req.body);
    service.modifyCar(
        {   
            _id: req.body._id,
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            color: req.body.color,
            year: req.body.year,
            hp: req.body.hp,
            user: req.body.user
        },
        (response) => {
            console.log(response);
            res.status(200).send(response);
        })
});

//user

router.post('/register', (req, res) => {
    console.log(req.body);
    service.register(
        {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
        },
        (response) => {
            res.status(200).send(response);
        })
});

router.post('/login', (req, res) => {
    service.login(
        {
            email: req.body.email,
            password: req.body.password
        },
        (response) => {
            res.status(200).send(response);
        }
    )
})

router.get('/logout', function (req, res) {
    res.status(200).send({});
});

router.post('/modify', (req, res) => {
    service.modify(
        {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        },
        (response) => {
            res.status(200).send(response)
        })
});

module.exports = router;