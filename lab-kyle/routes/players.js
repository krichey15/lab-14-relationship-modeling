'use strict';

const express = require('express');
const jsonParser = require('body-parser');
const Players = require(__dirname + '/../models/players');

const playerRouter = module.exports = express.Router();

playerRouter.post('/players', jsonParser, (req, res, next) => {

});

playerRouter.delete('/players', jsonParser, (req, res, next) => {

});

playerRouter.get('/players', (req, res, next) => {

});

playerRouter.get('/players/:id', (req, res, next) => {

});
