API is pretty basic, it offers, GET, GET(byID), DELETE and POST on both the players route and the teams route.

Players model consists of:
  name: sting
  position: string
  number: number
  bats: string
  throws: string

Teams model:
  name: string

To POST to to players simply pipe in an object with those keys and the same goes for teams

To DELETE you will need to get the id from the team or player you have already created and add that id to the end of the route. (ex DELETE http://localhost/players/{ID})

To GET all the teams/players all you need to do is make a GET request to /teams or /players

To GET one team/player all you need to do is add the team/player id to the end of the route and make sure team/player is singular.
(ex: /team/{ID} or /player/{ID})
