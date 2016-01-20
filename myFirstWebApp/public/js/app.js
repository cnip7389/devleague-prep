//window.onload = function(){

 // console.log("window.onload called!");

 //var myName = 'Jon';

  // function saySomeonesName(name, elementId){
  //   document.getElementById(elementId).innerHTML = name;
  // }

  // saySomeonesName(myName, 'myName');

  //THIS IS JUST AN EXAMPLE OF HOW TO CREATE ELEMENTS
  //function generateDocument(){
    //1. document.createElement
    //2. element.appendChild

function addLastName(){
  var lastNameElem = document.createElement('span');

  var lastNameText = document.createTextNode('Nip');

  lastNameElem.id = 'myLastName';
  lastNameElem.appendChild(lastNameText);

  var myNameElem = document.getElementById('myName');

  myNameElem.appendChild(lastNameElem);

  console.log('last name added');
   // document.body.appendChild(element);
    //<div id='someId'>TEST</div>

    /*var newElement = document.createElement('span');
    newElement.id = 'someOtherId';
    document.getElementById('someId').appendChild(newElement); */
  //}

  //generateDocument();
  //addLastName(); <-- Calling the function to add last name

}
