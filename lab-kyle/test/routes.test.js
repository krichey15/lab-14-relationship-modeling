'use strict';
/*global beforeAll, afterAll*/

const expect = require('expect');
const superagent = require('superagent');
const server = require('../lib/server.js');
const Player = require('../models/players.js');
const Team = require('../models/teams.js');

describe('players and teams', function() {

  beforeAll(() => {
    server.start();
  });
  afterAll(() => {
    server.stop();
  });

  let teamId;
  let playerId;

  test('should return 200', () => {
    return superagent.post('http://localhost/3000/teams')
      .set('content-type', 'application/json')
      .send({name: 'Twins'})
      .then(res => {
        let text = JSON.parse(res.text);
        teamId = text._id;
        expect(res.status).tobe(200);
        expect(text.name).toBe('Twins');
      });
  });
});
