class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(num) {
      if (isNaN(num)) {
        console.log('Invalid input: numberOfStudents must be set to a number');
      }
      else {
        this._numberOfStudents = num;
      }
    }
    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
      }
    static pickSubstituteTeacher(substituteTeacher) {
      let len = substituteTeacher.length;
      let generator = Math.floor(Math.random() * (len-1));
      return substituteTeacher[generator]; 
    }
  }
  
  
class PrimarySchool extends School {
    constructor(name, level, numberOfStudents, pickupPolicy) {
        super(name, level , numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, level, numberOfStudents, sportsTeams) {
        super(name, level, numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
}


const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 'primary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);


const alsmith = new HighSchool('Al E. Smith', 'HighSchool', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alsmith.sportsTeams);