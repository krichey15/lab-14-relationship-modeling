'use strict';

const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name: {type:String, required:true},
  position: {type:String, required:false},
  number: {type:Number, required:true},
  bats: {type:String, required:true},
  throws: {type:String, required:true},
  team: {type:mongoose.Schema.Types.ObjectId, ref:'teams'},
  roster: {type:mongoose.Schema.Types.ObjectId, ref:'rosters'},
});

module.exports = mongoose.model('players', playerSchema);
