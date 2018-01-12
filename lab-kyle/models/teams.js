'use strict';

const mongoose = require('mongoose');
const Roster = require('./rosters');

const teamSchema = mongoose.Schema({
  name: {type:String, require:true},
  roster: {type:mongoose.Schema.Types.ObjectId, ref:'rosters'},
});

teamSchema.pre('save', function(){
  Roster.findOne({_id:this.roster})
    .then( roster => {
      console.log(roster);
      if (roster._id){
        return roster;
      } else {
        let newRoster = ({});
        newRoster.save()
          .then((data) => {
            return data;
          })
          .catch();
      }
    })
    .then(roster => {
      return this.roster = roster._id;
    })
    .then(() => done() )
    .catch(done);
});

teamSchema.post('remove', function(done){

});

module.exports = mongoose.model('teams', teamSchema);
