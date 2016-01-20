// HOMEWORK #4: January 15, 2016

var plainBox = {};

plainBox.color = "blue";
plainBox.size = 10;
plainBox.contents = [];

//___________________________

var stockCar = {
	model: "Ford",
	year: 2007,
	automaticTransmission: true,
	driver: null,
	passengers: []
};

//___________________________

var plainPerson = {};

function buildPerson (person, nameString, age){
	person.name = nameString;
	person.age = age;
	return person;
}

buildPerson(plainPerson, "Christine", 26);
console.log(plainPerson);
console.log(plainPerson.name);
console.log(plainPerson.age);

//___________________________

var arrayOfObjects = 

[
  {
    id: 0,
    date: "Monday Jan 25 2015 2:01 PM",
    total: "279.38"
  },
  {
    id: 1,
    date: "Monday Jan 27 2015 11:31 AM",
    total: "79.80"
  },
  {
    id: 2,
    date: "Monday Feb 1 2015 7:56 AM",
    total: "15.62"
  },
  {
    id: 3,
    date: "Monday Feb 1 2015 9:43 AM",
    total: "19.83"
  },
  {
    id: 4,
    date: "Monday Feb 1 2015 11:08 PM",
    total: "56.69"
  },
  {
    id: 5,
    date: "Monday Feb 13 2015 10:22 AM",
    total: "137.92"
  },
  {
    id: 6,
    date: "Monday Feb 14 2015 6:54 PM",
    total: "938.65"
  },
  {
    id: 7,
    date: "Monday Feb 14 2015 7:17 PM",
    total: "43.77"
  },
  {
    id: 8,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "28.54"
  },
  {
    id: 9,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "194.33"
  }
];

function printProcessedOrders (orders){
	for (i = 0; i < orders.length; i++){
	console.log(
		"====");
	console.log (
		"id: " + orders[i].id);
	console.log (
		"purchase date: " + orders[i].date);
	console.log (
		"purchase total: " + orders[i].total);
	}
}

printProcessedOrders (arrayOfObjects);

//___________________________

var myObject = {
	a: 10 ,
	b: 16,
	result: ""
};

function objectSum (object){
	object.result = object.a + object.b;
	return object.result;
}

console.log(objectSum (myObject));

//___________________________

function printOperation (object){
	object.output = object.a + " + " + object.b + " = " + object.result;
	console.log(object.output);
}

printOperation(myObject);

//___________________________

function stuffBox (newObject){
	for (i = 0; i < 10; i++){
		var randomNumbers = (Math.floor(Math.random()*20) + 1);
		newObject.contents.push (randomNumbers);
	}
	return newObject;
}

stuffBox(plainBox);
var stuffBoxResult = plainBox.contents;
console.log(stuffBoxResult);

/* Or I could also store the random number in a function like below:

function randomNumber (low, high){
	return math.floor(math.random()*high + low);
}

for (i = 0; i < 10; i++){}
	newObject.contents.push (randomNumber(1, 20));
}

If plainBox.contents has not been defined as an array, then the .push function would not work. To define it, we can:

1. box.contents = box.contents || []; <-- Assign to self if values existed. Otherwise, create an empty array.

2. if (box.contents === undefined){

3. if (!box.contents) {
    box.contents = [];
  }
}

To pull values in array randomly:

function shuffle (arr){
  var i;
  var shuffledArr = [];
  for (i =0; i <arr.length; i++){
  shuffledArr[i] = arr[i]
  }
}

Fisher-Yates shuffling algorithem

for (i = arr.length - 1; i >= i; i --) {
  var j = randomNumber (0, i+1);
  var tmp = shuffledArr[i];
  shuffledArr[i] = shuffledArr [j];
  shufledArr[j] = tmp;
}

*/
//___________________________

function transmission (carObject){
	if (carObject.automaticTransmission === true){
		console.log("Yay, this car has automatic transmission!");
	}
	else {
		console.log("Eek. This will be hard to drive.");
	}
}

transmission(stockCar);

//___________________________

function addDriver (car, person){
	stockCar.driver = person;
}

addDriver(stockCar, plainPerson.name);
console.log(stockCar);

//___________________________

var passengerList = ['Jon', 'Jason', 'Tony', 'Joe', 'Jesse', 'Nigel', 'Kelli', 'Marifel', 'Victor'];
var passengerAges = [19, 12, 21, 22, 16, 9, 19, 20, 15];

function riders (car, names, ages){
	for (var i = 0; i < names.length; i++){
	var person = {};
	var myPassenger = buildPerson(person, names[i], ages[i]);
	car.passengers.push(myPassenger);
	}
	return car;
}

console.log(riders(stockCar, passengerList, passengerAges));

//___________________________

function printRiders (car){
	for (var i = 0; i < car.passengers.length; i++){
		console.log (car.passengers[i].name + ", age " + car.passengers[i].age);
	}
}

printRiders(stockCar);