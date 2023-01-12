class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut

    // With if statement 
    // if(this.isCheckedOut) {
    //   return this.isCheckedOut = false;
    // } else {
    //   return this.isCheckedOut = true;
    // }
  }
  
  getAverageRating() {
    let ratingSum = this.ratings.reduce((accumulator, currentValue) => accumulator + currentValue);
    return ratingSum / this.ratings.length;
  }

  addRating(rate) {
    if(typeof(rate) === 'number') {
      this.ratings.push(rate);
    }
  }
}

const test = new Media('test');
console.log(test)

class Book extends Media {
  constructor(title, authour, pages) {
    super(title);
    this._authour = authour;
    this._pages = pages;
  }

  get authour() {
    return this._authour;
  }
  
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }
  
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Director', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
