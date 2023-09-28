
// VARIABLE

var mylast = 'life';

var boolean = false;
let movies = ['die hard','marvel',boolean];

// for (let x of movies) {
//   console.log(x);
// }

var user = {
  name:'peter',
  lname: 'parker'
}

// IF STATEMENT

var username = 'jack';
var password = 'jack08';

if (username) {
  // console.log('yeah its jack')
} else {
  // console.log('its not jack')
}

// SWITCH

let day;

switch(new Date().getDay()) {

    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;  
    case 2:
      day = 'Tuesday';
      break;  
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;  
    case 6:
      day = 'Saturday';
      break;    
}
document.getElementById('text').innerHTML = 'Today is ' + day;

// OPERATORS

var previous = 300;
var current = 100;
var total = 'Total amount is ' + (previous + current);
current += previous

var fname = 'Dave';
var message = 'Welcome back, ' + fname;

// console.log(message)

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

for(let x = 0; x<=5; x++){

  // console.log(x)
}

var array = ['john', 'jack', 'dave'];

for(var n = 0; n < array.length; n++){

  // console.log(array[n])

}

for (let i = 0; i < 8; i++) {
  if (i == 4) {
    break;
  }

  console.log('the number is ' + i)
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

let q = 0;

do {
  // console.log('number ' + q);
  q++;
}
while (q < 8);

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



let numb = 25.6769;
let newnumb = numb.toExponential(2);

// console.log(newnumb);

//======= BODY =======

// function myfunction() {
//   document.getElementById('demo').innerHTML = 'Hello javascript';
// }

// document.body.children[0].style.background = 'grey';



// ARRAY

var array = ['first','second','third'];

// substract the last value into a variable
// var sing = array.pop();
// console.log(sing);

// substract the remove value into a variable
// var lag = array.shift();
// console.log(lag);

// console.log(array);


if (array.indexOf('last') !== -1 ) {
  console.log('Exists')
} else {  
  console.log('does not Exists')
}


var numbers = [5,10,15,20,25,30];

var filter = numbers.map(function(number){
  return number + 5;
});
console.log(filter);


const firstName = ['jack','joel','joe','jackson'];

firstName.forEach(function(fname){
  
    console.log('my name is ' + fname)
   
});

let wholeNumb = [5,10,15,20,25,30];

// wholeNumb.forEach(myfunction)

// function myfunction(age) {
//   console.log('my age is ' + age );
// }

var filterName = firstName.filter(function(name) {
  return name !== 'jackson'
});

console.log(filterName);

const arry = [2,4,6,8,10,12];

var newarry = arry.flatMap((x) => x * 2);

console.log(newarry);

// setTimeout(function(){
//     console.log('Good Morning');
// },3000)

let w = 0;

for (;w < 5; w++) {
  // console.log('countdown ' + w)
}

const unknown = {
  firstname: 'David',
  lastname: 'Yale',
  age: 20,
  school: 'Unilag'
}

for (let x in unknown) {
  
//  console.log(unknown[x])
}

const brands = ["BMW", "Volvo", "Mini","Toyota","Honda"];

for (let x of brands) {
  // console.log(x);
}

let x = 0;

while (x < 8) {

  // console.log(x);
  x++;
}


const person = {
  firstname: 'David',
  lastname: 'Yate',
  age: 20,
  school: 'Unilag',
  fullname : function () {
    return this.firstname + " " + this.lastname;
  }
}

// document.getElementById('obj').innerHTML = person.fullname();

const member = {
  firstname : 'Danny',
  lastname : 'Rand'
}

let method = person.fullname.bind(member);

console.log(method());

// ======== OBJECT, YOU UNDERSTAND OBJECT,YOU UNDERSTAND JAVASCRIPT ======== //


const family = {
  dad : 'John',
  mum : 'Rebecca',
  children : {
    sister1 : 'Justeena',
    sister2 : 'Opeyemi',
    me : 'Timilehin'
  }
};
// console.log(family);


// HOW TO CONVERT AN OBJECT TO AN ARRAY
// const objarray = Object.values(member);
// console.log(objarray);

// for (let x in family) {
//     console.log(family[x]);
// }

const friend = {}
friend.firstname = 'Henry';
friend.lastname = 'Black';
friend.age = 20;

const person2 = {
  firstName : 'Richard',
  lastName : 'Ford',
  language : 'English',
  get lang() {
   return this.language;
  }
};
// console.log(person2.language);

const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showstep: function() {
    console.log(this.step);
    return this;
  }
}

ladder.up().up().down().showstep().down().showstep();
// .up().up().up().showstep().down().showstep();


const obj = {counter : 5};

function User1(first,last,age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

const myfather = new User1('James','DOe',45)

console.log(myfather);

const mymother = new User1('Rachel','Doe',40)

console.log(mymother);

// A SIMPLE FUNCTION CONSTRUCTOR CALCULATOR

function Calculator() {

    this.read = function() {
      this.a = +prompt('a',0);
      this.b = +prompt('b',0);
    };

    this.sum = function() {
      return this.a + this.b;
    };

    this.mul = function() {
      return this.a * this.b;
    };

    this.total = function() {
      return this.sum() + this.mul();
    };
}

let calculator = new Calculator();
// calculator.read();

// alert('Sum is =' + calculator.sum() );
// alert('Mul is =' + calculator.mul() );
// alert('The total is ' + calculator.total() );


const task = {
  width : 250,
  height : 400,
  age : 25,
  name : 'Jacob'
};

function multiply(task) {
  for (let key in task) {
      if (typeof task[key] == 'number') {
          task[key] *= 2;
      }
  }
} 
multiply(task);
// console.log(task);

const letters = new Set();

letters.add('ade');
letters.add('timi');
letters.add('yemi');

// console.log(letters);

const apples = {name: 'Apples'};
const mangoes = {name: 'Mangoes'};
const bananas = {name: 'Bananas'};

const fruits = new Map();

fruits.set(apples, 300);
fruits.set(bananas, 350);
fruits.set(mangoes, 250);

// console.log(fruits);


class Car {
    constructor (){
      this.status = 'New Model';
      this.brand = 'BMW';
      this.year = 2015;
    }  
}

const cars = new Car();
const benz = new Car();
benz.color = 'black';

console.log(benz);

// class Brand {
//     constructor() {
//         this.car = 'Toyota';
//         this.cloth = 'Fenty';
//         this.phone = 'iphone';
//         this.shoe = 'Addidas';
//     }
// }

// const store = new Brand();
// store.location = 'Lagos';

// const shop = new Brand();
// shop.location = 'Abia';

// console.log(shop);