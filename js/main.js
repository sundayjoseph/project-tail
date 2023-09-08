
// VARIABLE

var mylast = 'life';

var boolean = false;
let movies = ['die hard','marvel',boolean];

var user = {
  name:'peter',
  lastname: 'parker'
}

// IF STATEMENT

var username = 'jack';
var password = 'jack08';

if (username) {
  console.log('yeah its jack')
} else {
  console.log('its not jack')
}

// SWITCH

var slot = 4;

switch(slot) {

    case 1:
      console.log('Won a tv');
      break;
    case 2:
      console.log('Won a ps');
      break;  
    case 3:
      console.log('Won a bike');
      break;  
    case 4:
      console.log('Won an iphone');
      break;
    case 5:
      console.log('Won a watch');
      break; 
    default :
      console.log('Try again');
      break;   

}

// OPERATORS

var previous = 300;
var current = 100;
var total = 'Total amount is ' + (previous + current);
current += previous

var fname = 'Dave';
var message = 'Welcome back, ' + fname;

console.log(message)

var total = 'Total amount is ' + (previous * current)

// console.log(total)


// INTERACTION

// let conf = confirm('You must be at least 18 years or older to view this content!!');
// let names = prompt('What is your name?');
// let age = prompt('What is your age?');

// if(age>=18) {
//   alert(`Welcome ${names}!`)
// } else {
//   alert(`Sorry!, ${names} you must be 18 years or older to view this content`)
// }



// FOR LOOP

for(var x = 1; x<=6; x++){

  // console.log(x)
}

var array = ['john', 'jack', 'dave'];

for(var n = 0; n < array.length; n++){

  // console.log(array[n])

}

// WHILE LOOP

var logged = true;
var i = 0;

while (logged) {
  if ( i == 3) {
    logged = false;
  }
  
  // console.log(i);
  i++
}

// FUNCTION

function firstFunction(){
  //console.log('My first function');
}
firstFunction();

////
var logged = false;
//console.log(logged);

function logIn(){
  logged = true;
  //console.log(logged);
  //console.log('Welcome back')
}

logIn()

////
function arguments(name,arg2){
  //console.log(name);
  //console.log(arg2)
}

arguments(1,1);
////

function calc(a,b){
  var sum = a + b;
  return sum;
}

var result = calc(5,5);
var other = calc('James',' jones')

//console.log(result)
// console.log(other)

function comb(p,q) {
  var add = p + q;
  return add;
}

var first = comb(4,7);
var second = comb('fuck',', gabe');

document.body.children[0].style.background = 'red'

