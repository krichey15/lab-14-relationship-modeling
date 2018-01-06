'use strict';

const express = require('express');
const jsonParser = require('body-parser');
const Teams = require(__dirname + '/../models/teams');

const teamRouter = module.exports = express.Router();

teamRouter.post('/teams', jsonParser, (req, res, next) => {

});

teamRouter.delete('/teams', jsonParser, (req, res, next) => {

});

teamRouter.get('/teams', (req, res, next) => {

});

teamRouter.get('/teams/:id', (req, res, next) => {

});
