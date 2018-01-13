'use strict';

const mongoose = require('mongoose');
const Roster = require('./rosters');

const teamSchema = mongoose.Schema({
  name: {type:String, require:true},
  roster: {type:mongoose.Schema.Types.ObjectId, ref:'rosters'},
});

teamSchema.pre('save', function(done){
  Roster.findById(this.roster)
    .then( roster => {
      if (!roster){
        let newRoster = new Roster();
        return newRoster.save();
      } else {
        return roster;
      }
    })
    .then(roster => {
      return this.roster = roster._id;
    })
    .then(() => done())
    .catch(done);
});

teamSchema.pre('findOne', function(){
  this.populate('roster');
  // this.populate({path: 'roster', populate:{path:'players', model:'player'}});
});

module.exports = mongoose.model('teams', teamSchema);
