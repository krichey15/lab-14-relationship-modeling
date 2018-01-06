'use strict';

const express = require('express');
const mongoose = require('mongoose');

let app = express();
let http = null;
let isRunning = false;

module.exports = {
  start: (port) => {
    let usePort = port || process.env.PORT;
    if(isRunning) {
      throw Error('Server is already running.');
    }
    http = app.listen(usePort, () => {
      isRunning = true;
      console.log('Server running on Port: ', usePort);
    });
  },
  stop: () => {
    if(!isRunning){
      throw Error('Server is already off.');
    }
    if(!http){
      throw Error('Invalid Server');
    }
    http.close(() => {
      http = null;
      isRunning = false;
      console.log('App Closed.');
    });
  },
};
