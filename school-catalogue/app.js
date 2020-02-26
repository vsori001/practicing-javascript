class School {
  constructor ( name, level, numberOfStudents ) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() { return this._name; }
  get level() { return this._level; }
  get numberOfStudents() { return this._numberOfStudents; }

  set numberOfStudents( num ) {
    ( typeof num === 'number') ? this._numberOfStudents = num : console.log('Invalid input: numberOfStudents must be set to a Number.' );
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }

  static pickSubstituteTeacher( substituteTeachers ) {
    let arrLength = substituteTeachers.length - 1;
    let randomNum = Math.floor( Math.random() * arrLength );
    return substituteTeachers[randomNum];

  }
}

class Primary extends School {
  constructor( name, numberOfStudents, pickupPolicy ) {
    super( name, 'primary', numberOfStudents );
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() { return this._pickupPolicy; }
}

class Middle extends School {
  constructor ( name, level, numberOfStudents ) {
    super( name, level, numberOfStudents );
  }
}

class High extends School {
  constructor( name, numberOfStudents, sportsTeams ) {
    super( name, 'high', numberOfStudents );
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() { console.log( this._sportsTeams); }
}

const lorraineHansbury = new Primary( 'Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.' );

lorraineHansbury.quickFacts();
const subs = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
console.log( School.pickSubstituteTeacher( subs ) );

const alSmith = new High( 'Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'] );
alSmith.sportsTeams;
