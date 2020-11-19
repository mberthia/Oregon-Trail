// console.log("hello");
class Traveler {
  constructor(name, food, isHealthy) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food += 2;
  }
  eat() {
    if (this.food >= 1) {
      this.food -= 1;
    } else {
      this.isHealthy = false;
    }
  }
}

class Wagon {
  constructor(capacity, passengers) {
    this.capacity = capacity;
    this.passengers = [];
  }
  getAvailableSeatCount() {
    let seats = this.capacity - this.passengers.length;
    return seats;
  }
  join(Traveler) {
    let seats = this.capacity - this.passengers.length;
    if (seats >= 1) {
      this.passengers.push(Traveler);
    } else {
      console.log("Sorry " + Traveler.name + ", we don't have room!");
    }
  }
  shouldQuarantine() {
    let index = 0;
    let sick = 0;
    while (this.passengers.length > index) {
      if (this.passengers[index].isHealthy === true) {
        sick += 0;
      } else {
        sick += 1;
      }
      index++;
    }
    if (sick === 0) {
      return false;
    } else {
      return true;
    }
  }
  totalFood() {
    let index = 0;
    let foodCount = 0;
    while (this.passengers.length > index) {
      foodCount = this.passengers[index].food + foodCount;
      index++;
    }
    return foodCount;
  }
}

// let Gloria = new Wagon(2);
// let Mark = new Traveler("Mark");
// let Cindy = new Traveler("Cindy");
// let Brenda = new Traveler("Brenda");
// Gloria.join(Cindy);
// Gloria.join(Mark);
// Gloria.join(Brenda);
// Mark.eat();
// Mark.eat();
// console.log(Cindy.isHealthy);
// console.log(Mark.isHealthy);
// console.log(Gloria.passengers.length);
// console.log(Gloria.getAvailableSeatCount());
// console.log(Gloria.passengers);
// console.log(Gloria.shouldQuarantine());
// console.log(Gloria.totalFood());

let wagon = new Wagon(2);
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let maude = new Traveler("Maude");
console.log(
  `Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`
);
wagon.join(henrietta);
console.log(
  `Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 1. Henrietta just joined.`
);
wagon.join(juan);
wagon.join(maude);
console.log(
  `Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`
);
henrietta.hunt();
juan.eat();
juan.eat();
console.log(juan);
console.log(
  `Wagon Should Quarantine?: ${wagon.shouldQuarantine()} – EXPECTED: true. Juan has run out of food and become unhealthy!`
);
console.log(`Wagon's Total Food?: ${wagon.totalFood()} – EXPECTED: 3.`);
