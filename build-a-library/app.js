class Media {
  constructor (title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() { return this._title; }
  get isCheckedOut() { return this._isCheckedOut; }
  get ratings() { return this._ratings; }

  set isCheckedOut (status) {
    this._isCheckedOut = status;
  }

  toggleCheckOutStatus() {
    (this._isCheckedOut) ? this._isCheckedOut = false : this._isCheckedOut = true;
  }

  getAverageRating () {
    let sum = this._ratings.reduce((a,b) => a + b);
    return sum / this._ratings.length;
  }

  addRating( rating ) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor (author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() { return this._author; }
  get pages() { return this._pages; }
}

class Movie extends Media {
  constructor (director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() { return this._director; }
  get runTime() { return this._runTime; }
}

class CD extends Media {
  constructor (artist, title) {
    super(title);
    this._artist = artist;
    this._songs = ['Rain, Rain Go Away', 'Mr. Sun', 'Hush Little Baby'];
  }

  get artist() { return this._artist; }
  get songs() { return this._songs; }
}


const test = new CD('Vanessa Maciel', 'Superman');
test.addRating( 4.8 );
test.addRating( 3.2 );
test.toggleCheckOutStatus();
test.toggleCheckOutStatus();

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating( 4 );
historyOfEverything.addRating( 5 );
historyOfEverything.addRating( 5 );

console.log( historyOfEverything.title );
console.log( historyOfEverything.isCheckedOut );
console.log( historyOfEverything.getAverageRating() );

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
speed.addRating( 1 );
speed.addRating( 1 );
speed.addRating( 5 );


console.log( speed.isCheckedOut );
console.log( speed.getAverageRating() );
