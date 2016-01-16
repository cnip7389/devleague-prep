var starWarsMovies = ['anh', 'tesb', 'rotj', 'tpm', 'aotc', 'rots', 'tfa'];


function sortChronologically() {
    var i = 0; // You want to define i before the loop begins, so it doesn't reset every loop.
    while (i < 3) {
        var tmp = starWarsMovies[i];
        starWarsMovies[i] = starWarsMovies[i + 3];
        starWarsMovies[i + 3] = tmp;
        i++;
    }
}

function chewie() {
    console.log();
    var i = 0;
    while (i < starWarsMovies.length) {
        if (starWarsMovies[i] === 'tpm' || starWarsMovies[i] === 'aotc') {
            console.log('Which way to Kashyyyk?');
        } else {
            console.log('Laugh it up fuzzball!');
        }
        i++;
    }
}

chewie();
sortChronologically();
chewie();

/* If we are bringing ! inside an or condition, then we need to change it to &&.

if (starWarsMovies[i] !== "tpm" && starWarsMovies[i] !== "aotc")
We saying if the movie is NOT tpm and it is NOT aotc, then execute function.
*/

//OBJECTS & METHODS

//You can store a function within an object property.

var myObject = {
    myMethod: function(x) {
        console.log(x);
    }
};

// You can also assign properties to an empty object as you go.

var myObject = {};
myObject.myMethod = function(x) {
    console.log(x);
};

// You can also assign functions to the property.

var myObject = {};
myObject.myMethod = console.log;

// You can also write your function separately and then assign it to your property.

function myLog(x) {
    console.log(x);
}

var myObject = {
    myMethod: myLog
};

// When invoked below, all four formats will show the same result: "hi".

myObject.myMethod("hi");