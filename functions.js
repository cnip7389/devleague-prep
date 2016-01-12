//FUNCTION HOMEWORK #1: TUESDAY 1/5/2016 (Assignment name: functions.md)

var a = 2;
var b = 3;

//________________________________

function add (a , b){
	return (a + b);
}
var sum  = add (a , b);
console.log(sum);

// To make it less confusing, you can also use variables x & y in the functions, then use a & b when invoking function.
// function add (x , y){
	// return (x + y);
//}
// var sum = add (a , b);

//________________________________

function subtract (a , b){
	return a - b;
}
var difference = subtract (a , b);
console.log(difference);

//________________________________

function multiply (a , b){
	return a * b;
}
var product = multiply (a , b);
console.log(product);

//________________________________

function checkDifference (difference){
	return "My football team lost " + difference + " times this week";
}
var checkDifferenceResult = checkDifference (difference);
console.log(checkDifferenceResult);

//________________________________

function checkSum (sum){
	console.log ("I CAN ADDZ " + sum + " NUMBERS");
}

checkSum(sum);

//________________________________

function checkProduct(product , difference){
	console.log (product * difference);
}

checkProduct(product,difference);

//________________________________

function addThenSubtract (sum, difference, product){
	return (sum + difference)-product;
}
var addThenSubtractResult = addThenSubtract(sum, difference, product);
console.log(addThenSubtractResult);

//________________________________

function addThenMultiply (product, sum, b){
	return (product + sum) * b;
}
var howMany = addThenMultiply (product, sum, b);
console.log(howMany);

//________________________________

function createFullName (firstName , lastName){
	return firstName + " " + lastName;
}

var myFullName = createFullName ("Christine" , "Nip");
console.log(myFullName);

//________________________________

function verifyDrinkingAge (age){
	return age >= 21;
}
var canDrinkBeer = verifyDrinkingAge(25);
console.log(canDrinkBeer);

//________________________________

function throwParty (canDrinkBeer){
	if(canDrinkBeer){
		console.log ("This party will have an open bar.");
	}
	else{	 
		console.log ("The party will have tons of cake!");
	}
}

throwParty (canDrinkBeer);

/* Again, we don't have to use canDrinkBeer in the function. We can rename is as something else that is less confusing. For example:
 function throwParty (oldEnough){
		if (oldEnough){
			console.log ("This party will have an open bar.");
		}
		else {
			console.log ("The party will have tons of cake!");
		}
	}
 throwParty (canDrinkBeer); <-- This will take the canDrinkBeer value and sub it into oldEnough, the same way that variable x subs for a.
*/

//________________________________

function eatFood (firstName, lastName, food){
	console.log (firstName + " " + lastName + " loves to eat " + food);
}

eatFood ("Christine", "Nip", "gelato");

//________________________________

function repeater (canDrinkBeer, howMany){
	for (var i = 0; i < howMany; i++){
		if(canDrinkBeer){
			console.log ("Bacon Pancakes, makin' Bacon Pancakes...");
		}
		else{
			console.log ("Let it go.... LET IT GOOOOOoOoOoOo...");
		}
	}
}
repeater(canDrinkBeer, howMany);

/* Within for function, 1) initialization (var i = 0); 2) ending value (i < howMany); 3) increment (i++))
It will start at step 1 and repeat as long as 2 is true.
Variable i traditionally starts at 0.
You don't have to use variable i. You can use anything else, as long as it's consistent.
*/

//________________________________

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

var characters = ["a", "b", "c", "d", "e"];
function showEachValue (characters){
	for (var i=0; i<characters.length; i++){
		console.log(characters[i]);
	}
}

showEachValue(characters);

/* What you put in the console.log part determines on what you want the results 
to look like. In this scenario, I want it to show character in first position
(ie. characters[0]) followed by the character in second position 
(ie. characters[1] and so on. Therefore, my console.log should display characters[i].*/

//________________________________ NEED HELP

function createArrayFromString (word){
	for (var i = 0; i < word.length; i++){
		if (word[i] != "A"){
			array.push(word[i]);
		}
	}
}

console.log(createArrayFromString("Aloha"));

//________________________________ NEED HELP

var myArray = [2, 4, 6, 8];

function greatSummator (myArray){
	for (var i = 0; i < myArray.length; i++){
		return myArray[i]+myArray[i++];
	}
}

var myArraySum = greatSummator(myArray);
console.log (myArraySum);

//________________________________ MAYBE WORKS?

function totalUnderWhatFor (myArraySum, total){
	return (myArraySum < total);
}

console.log(totalUnderWhatFor(myArraySum, 30));

//________________________________ NEED HELP

myBooleanArray = [true, true, false];

function checkTrueValues (myBooleanArray){
	for (var i = 0; i < myBooleanArray.length; i++){
		return (isTrue (myBooleanArray[i])) === true;
	}
}
console.log(isTrue(myBooleanArray));
