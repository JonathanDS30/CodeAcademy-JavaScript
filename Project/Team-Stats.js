const team = {
  _players : [
    {firstName : 'Zach', lastName: 'Lavine', age : 25},
    {firstName : 'Stephen', lastName: 'Curry', age : 34},
    {firstName : 'Blake', lastName: 'Griffin', age : 33}
  ],
  _games : [
    {opponent : 'Celtics', teamPoints : 98, opponentPoints: 78},
    {opponent : 'Bulls', teamPoints : 128, opponentPoints: 101},
    {opponent : 'Knicks', teamPoints : 74, opponentPoints: 70}
  ],

  // Getter players
  get players (){
    return this._players;
  },

  // Getter Games
  get games (){
    return this._games;
  },

  // Method to add a players 
  addPlayers(newFirstName, newLastName, newAge){
    let player = {
      firstName : newFirstName,
      lastName : newLastName,
      age : newAge
    }
    this._players.push(player) // adding the new player in the array of the team players
  },

  // Method to add a games played 
  addGames(newOppenent, newTeamsPoints, newOppenentPoints){
    let game = {
      opponent : newOppenent,
      teamPoints : newTeamsPoints,
      opponentPoints : newOppenentPoints,
    }
    this._games.push(game);
  }
};

// Testing Methods
team.addPlayers('Bugs','Bunny', 76);
team.addGames('Titans', 100, 98);

// Checking for Array of players
console.log('Array of the team players');
console.log(team.players);

// Checking for Array of games played
console.log('Array of the team games played');
console.log(team.games);