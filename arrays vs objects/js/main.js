//primitives (strings, numbers, booleans)

let number = 12;
let number2 = 15;

console.log(number, number2);

number = number2;

console.log(number, number2);

let string = 'travels';
let string2 = 'working';

console.log(string, string2);

string = string2;

console.log(string, string2);

let boolean = true;
let antagonistboolean = false;

console.log(boolean, antagonistboolean);

boolean = antagonistboolean;

console.log(boolean, antagonistboolean);

//arrays

const array = ['hola', 5, true];
const newArray = array;

console.log(array, newArray);

newArray[2] = 'venga';

console.log(array, newArray); // newArray it's a reference to the previous array, so if we update newArray, it will call the previous reference
//if we want to make a copy of the array instead of the reference

const arrayCopy = array.slice(); //slice makes a complete or partial copy of an array. if you want it complete -  don't specify the limits

arrayCopy[2] = true;

console.log(array, arrayCopy);

//to make copies we can also use spread

const arrayCopyWithSpread = [...array]; //Sperad will take the content in array and it will put it into arrayCopyWithSpread

arrayCopyWithSpread[4] = 'added';

console.log(array, arrayCopyWithSpread);

//copy with from

const arrayCopyWithFrom = Array.from(array); 

arrayCopyWithFrom[3] = false;

console.log(array, arrayCopyWithFrom);

//Objects

const user = {
    name: 'María Luena',
    age: 33
}

const newUser = user;

console.log(user, newUser);

newUser.age = 30;
//it changes the original (user) because it's working with references

//to make a copy

const userCopy = Object.assign({}, user, {age: 25});
console.log(user, newUser, userCopy);

// in object.assign you start with an empty object, then you passes the array you wish to make a copy from and after you sort in your new properties

//const userCopySpread = {...user}; it doesn't work 

//console.log(user, userCopySpread);

const person = {
    name: 'Nano',
    age: 25,
    social: {
        twitter: '@nanovico',
        facebook: 'nano.developer'
    }
}
console.clear();
console.log(person);

const newPerson = Object.assign({}, person, { name: 'Rosa' });

console.log(person, newPerson);

const newPersonJSON = JSON.parse(JSON.stringify(person));
// no es un object, es un string