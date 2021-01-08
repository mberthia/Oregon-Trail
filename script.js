let makeTravelerButton = document.querySelector("#make-traveler");
let userTravelerName = document.querySelector("#traveler-name");
let travelerList = document.getElementById("traveler-list");
let lineBreak = document.createElement("br");
let showWagon = document.querySelector("#show-wagon");
let wagonPassengers = document.querySelector("#wagon-people");
let wagonFood = document.querySelector("#show-food");
let wagonHealth = document.querySelector("#show-health");
let personEat = document.querySelector("#show-eat");
let huntButton = document.querySelector("#hunt-button");

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

makeTravelerButton.addEventListener("click", function () {
  let index = 0;
  let partyMember = new Traveler(userTravelerName.value);
  Gloria.join(partyMember);
  console.log(Gloria.passengers);
});

showWagon.addEventListener("click", function () {
  let index = 0;
  while (Gloria.passengers.length > index) {
    let nameList = document.createElement("li");
    nameList.innerHTML = Gloria.passengers[index].name;
    document.getElementById("wagon-people").appendChild(nameList);
    index++;
  }
});

wagonFood.addEventListener("click", function () {
  let index = 0;
  while (Gloria.passengers.length > index) {
    let foodList = document.createElement("li");
    foodList.innerHTML =
      Gloria.passengers[index].name +
      " has " +
      Gloria.passengers[index].food +
      " piece(s) of food.";
    document.getElementById("wagon-food").appendChild(foodList);
    index++;
  }
});

wagonHealth.addEventListener("click", function () {
  let index = 0;
  while (Gloria.passengers.length > index) {
    let healthList = document.createElement("li");
    if (Gloria.passengers[index].isHealthy === true) {
      healthList.innerHTML = Gloria.passengers[index].name + " is healthy.";
    } else {
      healthList.innerHTML = Gloria.passengers[index].name + " is unhealthy";
    }
    document.getElementById("wagon-health").appendChild(healthList);
    index++;
  }
});

personEat.addEventListener("click", function () {
  var person =
    Gloria.passengers[Math.floor(Math.random() * Gloria.passengers.length)];
  if (person.food === 0) {
    window.alert(person.name + " has no food!");
    person.isHealthy = false;
  } else {
    person.eat();
    let eatList = document.createElement("li");
    eatList.innerHTML = person.name + " has eaten some food.";
    document.getElementById("eat-button").appendChild(eatList);
  }
  console.log(person);
});

huntButton.addEventListener("click", function () {
  var person =
    Gloria.passengers[Math.floor(Math.random() * Gloria.passengers.length)];
  person.hunt();
  let huntList = document.createElement("li");
  huntList.innerHTML = person.name + " got themselves some food.";
  document.getElementById("show-hunt").appendChild(huntList);
});
let Gloria = new Wagon(4);

console.log(Gloria.capacity);
console.log(Gloria.passengers);
