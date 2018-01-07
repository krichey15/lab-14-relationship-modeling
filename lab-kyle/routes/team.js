'use strict';

const express = require('express');
const jsonParser = require('body-parser');
const Team = require(__dirname + '/../models/teams');

const teamRouter = module.exports = express.Router();

teamRouter.post('/teams', jsonParser, (req, res, next) => {

});

teamRouter.delete('/team/:id', jsonParser, (req, res, next) => {

});

teamRouter.get('/teams', (req, res, next) => {

});

teamRouter.get('/team/:id', (req, res, next) => {

});
