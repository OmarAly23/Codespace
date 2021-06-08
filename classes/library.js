class Media {
  constructor(title) {
    this._title = title;
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
    set isCheckedOut(status) {
    this._isCheckedOut = status;
  }
    getAverageRating() {
    let sum = 0;
    let length = this._ratings.length;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    sum = this._ratings.reduce(reducer);
    return (sum / length);
    }
    toggleCheckOutStatus() {
      if (!this.isCheckedOut) {
        this._isCheckedOut = true;
      } else {
        this._isCheckedOut = false;
      }
    }
    addRating(rating) {
      this._ratings.push(rating);
    }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get name() {
    return this._name;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    this._runTime;
  }

}


const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());


const speed = new Movie('Jan De Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());


