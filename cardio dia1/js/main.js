'use strict';

const directors = [
    { first: 'Stanley', last: 'Kubrick', year: 1928, passed: 1999 },
    { first: 'Pilar', last: 'Miró', year: 1940, passed: 1997 },
    { first: 'Theo', last: 'Van Gogh', year: 1957, passed: 2004 },
    { first: 'MF', last: 'Husain', year: 1915, passed: 2011 },
    { first: 'Maria', last: 'Luena', year: 1984, passed: 2100 },
    { first: 'Nacho', last: 'Romero', year: 1803, passed: 1890 }
];

const people = ['Conde, Celia', 'Marbán, Teresa', 'Aguilar, Marta', 'Cerezo, Elena', 'Parrado, Estela', 'Albarrán, Aida', 'Mourelo, Silvia'];

//Array.prototype.filter()
//1. Filter the list of directors for those who where born in 1900's
const nineteen = directors.filter(director => (director.year >= 1900 && director.year < 2000))

console.table(nineteen);

//Array.prototype.map()
//2. Give us an array of the director first and last names
const fullNames = directors.map(director => `${director.first} ${director.last}`);
console.log(fullNames);

//Array.prototype.sort()
//3. Sort the directors by birthdate, oldest to youngest
// const ordered =directors.sort(function(a, b){
//     if(a.year >b.year) {
//         return 1;
//     }
//     else {
//         return -1;
//     }
// });
const ordered = directors.sort((a, b) => a.year > b.year? 1: -1);
console.table(ordered)

//Array.prototype.reduce()
//4. How many years did all the directors live?
const totalYears = directors.reduce((total, director) => {
    return total + (director.passed - director.year);
}, 0);

console.log(totalYears); 

//5. Sort the inventors by years lived
const oldest = directors.sort(function(a, b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest)

//7. Sort exercise
//Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(alpha);

//8. Reduce exercise
//Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce(function (obj, quantity) {
    if (!obj[quantity]) {
        obj[quantity] = 0;
    }
    obj[quantity]++;
    return obj;
}, {
        car: 0,
        truck: 0,
        bike: 0,
        walk: 0,
        van: 0
    });

console.table(transportation);

//6. Create a list of films that contain 'by' anywhere the name 
//https://en.wikipedia.org/wiki/Category:Film

const category = document.querySelector('.CategoryTreeLabel'); 
const links = Array.from(category.querySelectorAll('a'));
const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('by'));