'use strict';

const mongoose = require('mongoose');
const Roster = require('./rosters');

const teamSchema = mongoose.Schema({
  name: {type:String, require:true},
  roster: {type:mongoose.Schema.Types.ObjectId, ref:'rosters'},
});

// teamSchema.pre('findOne', function(){
//
// });
//
// teamSchema.post('remove', function(done){
//
// });

module.exports = mongoose.model('teams', teamSchema);
