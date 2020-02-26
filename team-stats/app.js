const team = {
  _players: [
    { firstName: 'Kobe', lastName: 'Bryant', age: 41 },
    { firstName: 'Shaquille', lastName: 'O\'Neal', age: 41 },
    { firstName: 'Robert', lastName: 'Horry', age: 45 }
  ],
  _games: [
    { opponent: 'Celtics', teamPoints: 100, opponentPoints: 60 },
    { opponent: 'Knicks', teamPoints: 80, opponentPoints: 83 },
    { opponent: 'Clippers', teamPoints: 110, opponentPoints: 112 }
  ],

  // Getters
  get players () {
    return this._players;
  },
  get games () {
    return this._games;
  },

  addPlayer( firstName, lastName, age ) {
    let newPlayer = { firstName: firstName, lastName: lastName, age: age };
    this._players.push( newPlayer );
  },
  addGame ( opponent, teamPoints, opponentPoints ) {
    let newGame = { opponent: opponent, teamPoints: teamPoints, opponentPoints: opponentPoints };
    this._games.push( newGame );
  }
};


team.addPlayer( 'Steph', 'Curry', 28 );
team.addPlayer( 'Lisa', 'Leslie', 44 );
team.addPlayer( 'Bugs', 'Bunny', 76 );

team.addGame( 'Nets', 100, 70 );
team.addGame( 'Pelicans', 90, 86 );
team.addGame( 'Warriors', 100, 106 );

console.log( team.players );
console.log( team.games );
