/**
 * Created by cyma on 5/18/2017.
 */

var cookAndDeliverFood = function cookAndDeliverFood(callback) {
  setTimeout(callback, 5000);
};
var persons = {
  getName ( ) {
    console.log('my name is shanker');
    console.log(this === persons); // this refers to the function that is calling it,
    // in this case it is persons function at line 71 which is calling the getName function
  }
};

console.log('beacon');
for (let i = 0; i < 11; i += 1) {
  console.log(i);
}

const person = {
  firstName: 'shanker',
  lastName: 'Polimetla',
  age: 25
};

console.log(person);

function addNumber(a, b) {
  return a + b;
}

console.log(addNumber(5, 8));

const printSome = function printSome() {
  console.log("bacon is healthy, don't believe the doctors");
};

setTimeout(printSome, 5000);

function placeAnOrder(orderNumber) {
  console.log('customer order', orderNumber);
  cookAndDeliverFood( function (){
    console.log('delivered food order: ', orderNumber);
  });
}

// simulate a 5 second operation


// simulate users web request
placeAnOrder(1);


// difference between == and ====

//= = is used to compare only values
//= == is used to compare both values and types

console.log(19 === '19');
console.log(19 === '19');

// unlike java, javascript is all about references
const temp = {
  firstName: 'kr',
  lastName: 'polimetla'

};
const me2 = temp; // here we are not copying the temp object to the me variable,
// we are assigning the reference of the temp object to me variable
me2.firstName = 'kranthi'; // it will change the actual value of the firstName
console.log(temp.firstName);
persons.getName();
function doSomething() {
  console.log('i am a volunteer');
  console.log(this === global); // doSomething is not being called by any internal functions,
  // it is being called globally at line 77
}
doSomething();

module.exports = {};
