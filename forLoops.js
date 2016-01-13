//HOMEWORK #3: TUESDAY 1/12/2016 (Assignment name: forLoops.md)

var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

function printContent (array){
	for (var i=0; i < 5; i++){
		console.log("Value of i is: " + [i] + "\n" +
					"Value at Index is: " + array[i]);
	}
}

printContent (presidents);

//QUESTION: Why do we need two parameters in function, according to assignment?

//___________________________

var stringOfNumbers = "";

function appendToString(string){
	for (var i = 10; i <= 20; i++){
		string += [i];
	}
	console.log(string);
}

appendToString(stringOfNumbers);

//___________________________

var evenNumberArray = [];

function printEvenArray (array){
	for (var i = 0; i <100; i+=2){
		array.push(i);
	}
	console.log(array);
}

printEvenArray(evenNumberArray);

/* Another way to do this, if your starting i is not an even number. Use modulus
to check if it's divisible by 2. */

var evenNumberArray2 = [];

function printEvenArray2 (array){
	for (var i = 0; i <100 ; i++){
		if ((i % 2) === 0){
			array.push(i);
		}
	}
	console.log(array);
}

printEvenArray2(evenNumberArray2);

//___________________________ question: Need quotations for blanks?

var oopsArray = ["turn", "" , "down", "" , "for", "" , "what"];

function addNope (array){
	for (var i = 1; i < array.length; i+=2){
		array[i] += "nope";
	}
	console.log (array);
}

addNope(oopsArray);

//___________________________ question: how to end with turn, not nope?

var oopsArray = ["turn", "" , "down", "" , "for", "" , "what"];

function addNope (array){
	for (var i = oopsArray.length - 1 ; i >= 0 ; i-=2){
  console.log (oopsArray[i], "nope");
}}

addNope(oopsArray);

//___________________________question: what's the point of switching isNapTime to true?

var isNapTime = false;
var napSchedule = [false, false, true, false, true, true];

function nap (schedule){
	for (var i = 0; i < schedule.length; i++){
		if (schedule[i]){
			console.log("ZzZzZzZz");
		}
		else{
			console.log("Gotta get to work!");
			isNapTime = !isNapTime;
		}
	}
}

//___________________________

var copyOfValuesArray =[];
var valuesArray = [99, 66, 829, 1941, 8, 76];

function copyArray (originArray, destinationArray){
	for (var i = 0; i < originArray.length; i++){
		destinationArray.push(originArray[i]);
	}
}

copyArray(valuesArray, copyOfValuesArray);
console.log(valuesArray);
console.log(copyOfValuesArray);

//___________________________

var miscStorage = [ [], "Carrots", 9, "Beets", {}, {name: "Todd B."}, "Mush"];
var newArray = [];

function generateArrayOfStrings (storage){
	for (var i = 0; i < storage.length; i++){
		if (typeof storage[i] === "string"){
			newArray.push(storage[i]);
		}
	}
	return newArray;
}

console.log(generateArrayOfStrings(miscStorage));

//___________________________ NEED HELP

var currentClass = 
[
  {
    name: 'Doug',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Pat',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Marsha',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Moira',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Ben',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Nigel the Giraffe',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Brandon the Shark',
    graduated: false,
    enrolled: true
  }
];

function graduateAndSetNewClass (clas){
	for (var i = 0; i < currentClass.length; i++){
		if (clas.enrolled){
			clas.graduated = "true";
		}
		else{
			clas.enrolled = "true";
		}
	}
}


