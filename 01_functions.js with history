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
