//HOMEWORK #3: TUESDAY 1/12/2016 (Assignment name: forLoops.md)

var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

function printContent (array){
	for (var i=0; i < array.length; i++){
		console.log("Value of i is: " + [i] + "\n" +
					"Value at Index is: " + array[i]);
	}
}

printContent (presidents);

/*QUESTION: Why do we need two parameters in function, according to assignment? Depends on where 
you type var i & var presidents. If the function has access to it, it will still work.

function printContent (array, i){
	for (var i=0; i<array.length; i++){
	console.log("Value of i is: " + [i]);
	console.log ("Value at Index is: " + array [i]);
	}
}

printContent (presidents);
*/

//___________________________

var stringOfNumbers = "";

function appendToString(string){
	for (var i = 10; i <= 20; i++){
		string += [i];
	}
	console.log(string);
}

appendToString(stringOfNumbers);

/* To avoid global variables, below is the recommended format:

function appendToString(stringToAppendTo, stringToAppend){
	return string toAppendTo + stringToAppend;
}

var stringOfNumbers = '';

for (var i = 10; i <= 20; i++){
	stringofNumbers = appendToString(stringOfNumbers, i);
}
*/

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
	for (var i = 0; i <99 ; i++){
		if ((i % 2) === 0){
			array.push(i);
		}
	}
	console.log(array);
}

printEvenArray2(evenNumberArray2);

//___________________________ 

var oopsArray = ["turn", "" , "down", "" , "for", "" , "what"];

function addNope (array){
	for (var i = 1; i < array.length; i+=2){
		array[i] = "nope";
	}
	console.log (array);
}

addNope(oopsArray);

/* Another way to do is use modulo & then reassign value:

for (var i = 0; i < oopsArray.length; i++){
	console.log(i, oopsArray[i]);
	if (i % 2 === 1){
	oopsArray[i] = "nope";
	}
}

console.log(oopsArray);

*/

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

// CLASS EXAMPLES

/*

WHILE BREAK

 while (true) {
	function2;
	if (!condition1){
	break;
	}
	function3;
}

DO WHILE

do {
	function2;
	function3;
} whiile (condition1);



if (myGreeting === "hi"){
	myGreeting += "!";
} else if (myGreeting === "hello"){
	myGreeting += "!!";
}
console.log(myGreeting)
--> var myGreeting = "hello"; result would be "hello!!"
--> var myGreeting = "hi"; result would be "hi!"
--> var myGreeting = "bye"; result would be "bye"


var k = 0;

do {
	if (k% 2 === 1){
		oopsArray[k] = "nope;
		console.log("adding nope to", k);
	}
	k++;
}while (k < oopsArray.length);

