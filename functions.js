var a = 2;
var b = 3;

function add (a , b){
	return (a + b);
}
var sum  = add (a , b);
console.log(sum);

function subtract (a , b){
	return a - b;
}
var difference = subtract (a , b);
console.log(difference);


function multiply (a , b){
	return a * b;
}
var product = multiply (a , b);
console.log(product);


function checkDifference (difference){
	return "My football team lost " + difference + " times this week";
}
var checkDifferenceResult = checkDifference (difference);
console.log(checkDifferenceResult);


function checkSum (sum){
	console.log ("I CAN ADDZ " + sum + " NUMBERS");
}

checkSum(sum);

function checkProduct(product , difference){
	console.log (product * difference);
}

checkProduct(product,difference);

function addThenSubtract (sum, difference, product){
	return (sum + difference)-product;
}
var addThenSubtractResult = addThenSubtract(sum, difference, product);
console.log(addThenSubtractResult);


function addThenMultiply (product, sum, b){
	return (product + sum) * b;
}
var howMany = addThenMultiply (product, sum, b);
console.log(howMany);


function createFullName (firstName , lastName){
	return firstName + " " + lastName;
}

var myFullName = createFullName ("Christine" , "Nip");
console.log(myFullName);


function verifyDrinkingAge (age){
	if(age >= 21){
		return true;
	}
	else{
		return false;
	}
}
var canDrinkBeer = verifyDrinkingAge(25);
console.log(canDrinkBeer);


function throwParty (canDrinkBeer){
	if(canDrinkBeer){
		console.log ("This party will have an open bar.");
	}
	else{	 
		console.log ("The party will have tons of cake!");
	}
}

throwParty (canDrinkBeer);

function eatFood (firstName, lastName, food){
	console.log (firstName + " " + lastName + " loves to eat " + food);
}

eatFood ("Christine", "Nip", "gelato");


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