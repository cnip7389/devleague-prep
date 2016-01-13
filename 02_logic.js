//CLASS EXERCISES: FRIDAY 1/8/2016

var notTrue = false;
if (notTrue){
	console.log('ahhh! what happened?');
}
else{
	console.log('Falsy... whew!');
}

// The answer will be Falsy...whew! because the variable is false. When you type just if(condition), that condition is true.

var pancakeList = ["eggs", "butter", "milk", "flour"];
var firstItem = pancakeList[0];
for (var i = 0; i < pancakeList.length; i++){
	console.log (pancakeList[i]);
}

/* Number of loop repeats = number of items in the array
It will start at item at position 0 (eggs), and move up a position once every loop.
Answer will be:
eggs
butter
milk
flour
*/

//________________________________

//HOMEWORK #2: FRIDAY 1/8/2016 (Assignment name: logic.md)

function youGetTaco (action){
	if (action === "eat"){
		return "EAT TACOS";
	}
}

var myAction = "eat";
console.log (youGetTaco(myAction));

//________________________________

function isNumberGreaterThan (first, second){
	return first > second;
}

console.log(isNumberGreaterThan(0,2));

//isNumberGreaterTahan can also be expressed in an if/else statement like below:

function isNumberGreaterThan (first, second){
	if (first > second){
		return true;
	}
	else {
		return false;
	}
}

console.log(isNumberGreaterThan(0,2));

/*
Either function format above works and yields the same result, but since the return 
value for this function is a boolean, the first format is more concise. If the
return value had asked for another data type (eg. string), then we would use
the if/else format.
*/

//________________________________

function isTrue (val){
	return val === true;
}

var myVal = true;
console.log(isTrue(myVal));

//________________________________

function isFalse (val){
	return val === false;
}

var myVal = false;
console.log(isFalse(myVal));

//________________________________

function isEqual (firstWord, secondWord){
	if (firstWord === secondWord){
		return "AWWWWRIGHT";
	}
	else {
		return "Y U NO MATCH!";
	}
}

console.log(isEqual("Hawaii", "Hawaii"));

//________________________________

function isNotEqual (firstWord, secondWord){
	if (firstWord != secondWord){
		return "AWWWWRIGHT";
	}
	else{
		return "Y U MATCH!";
	}
}

console.log(isNotEqual("Hawaii", "Hawaii"));

//________________________________

function doubleEquals (first, second){
	return(first&&second === true);
}

doubleEquals(true,true);
doubleEquals(true,false);
doubleEquals(false,false);

//________________________________

function totalOver30 (first, second, third){
	return (first + second + third) > 30;
}

console.log(totalOver30 (10, 11, 11));

//________________________________

function totalUnderWhat (first, second, third, fourth){
	return ((first + second + third) < fourth);
}

console.log(totalUnderWhat(1,2,3,4));

// totalUnderWhat can also be expressed in an if/else statement like below:

function totalUnderWhat (first, second, third, fourth){
	if ((first + second + third) < fourth){
		return (true);
	}
	else{
		return (false);
	}
}

console.log(totalUnderWhat(1, 2, 3, 4));

//________________________________

function looptoNumber(limit){
	for (var i=0; i<limit; i++){
		console.log(i);
	}
}

looptoNumber(5);

//________________________________


function showEachValue (characters){
	for (var i=0; i<characters.length; i++){
		console.log(characters[i]);
	}
}

var characters = ["a", "b", "c", "d", "e"];
showEachValue(characters);

/* What you put in the console.log part determines on what you want the results 
to look like. In this scenario, I want it to show character in first position
(ie. characters[0]) followed by the character in second position 
(ie. characters[1] and so on. Therefore, my console.log should display characters[i].*/

//________________________________ 

var array = [];
function createArrayFromString (word){
	for (var i = 0; i < word.length; i++){
		if ((word[i] != "A") && (word[i] != "a")){
			array.push(word[i]);
		}
	}
}

createArrayFromString("Aloha");
console.log(array);

//________________________________

var sum = 0;

function greatSummator (myArray){
	for (var i = 0; i < myArray.length; i++){
		sum += myArray[i];
	}
return sum;
}

var myArraySum = greatSummator([1, 2, 3]);
console.log(myArraySum);

/* Note to self: Once computer hits "return," the loop will end. So to
continue looping after function, store value in a variable & continue loop.*/

//________________________________ 

var sum = 0;
var myArray = [1, 2, 3, 4];
var total = 10;
function totalUnderWhatFor (myArray, total){
	for (var i =0; i < myArray.length; i++){
		sum += myArray[i];
	}
	return (sum < total);
}

console.log(totalUnderWhatFor(myArray, total));

//________________________________

myBooleanArray = [true, true, false];

function checkTrueValues (BooleanArray){
	for (var i = 0; i < BooleanArray.length; i++){
		if (!isTrue(BooleanArray[i])){
			return false;
		}
	}
	return true;
}

console.log (checkTrueValues(myBooleanArray));
