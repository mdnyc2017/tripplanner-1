const express = require('express');
const router = express.Router();
const db = require("../models").db;
const Place = require("../models").Place;
const Hotel = require("../models").Hotel;
const Restaurant = require("../models").Restaurant;
const Activity = require("../models").Activity;

// window.fetch('/attractions')
//     .then(result => result.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(console.error)

const allAttractions = {};

router.get('/', (req, res, next) => {
    Hotel.findAll({ include: [{ all: true }] })
        .then(function (hotels) {
            allAttractions.hotels = hotels;
            return Restaurant.findAll();
        })
        .then(function (restaurants) {
            allAttractions.restaurants = restaurants;
            return Activity.findAll();
        })
        .then(function (activities) {
            allAttractions.activities = activities;
        })
        .then(function () {
            res.json(allAttractions);
        })
        .catch(next);
});

module.exports = router;
