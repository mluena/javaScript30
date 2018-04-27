const people = [
    { name: 'Maria', year: 1984 },
    { name: 'Alba', year: 1987 },
    { name: 'Elena', year: 1994 },
    { name: 'Noelia', year: 1999 }
];


const comments = [
    { text: 'Love my job', id: 098765 },
    { text: 'Music lover', id: 2345176 },
    { text: 'travelling the world', id: 8573645 },
    { text: 'breaking the waves', id: 756394 },
    { text: 'nonsense', id: 638943 }
];

//Some and Every Checks
//will check if at least one thing in your array meets what you are looking for,
//some will check
//Array.prototype.some() // is at least one person 19?

// const isAdult = people.some(function(person) {
//     const currentYear = (new Date()).getFullYear();
//     if(currentYear - person.year >= 19) {
//         return true;
//     }

// }); Opción 1. Hecho debajo de una forma más simple

// const isAdult = people.some(person => {
//     const currentYear = (new Date()).getFullYear();
//     return currentYear - person.year >=19;
// }); Opción 2

const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log({isAdult});

//Array.prototype.every() // is everyoe 19?

const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year == 19);

console.log({allAdults});
//Array.prototype.find()
//find will return the first one the it finds
//Find is like filters, but instead returns just the one you are looking for
//find the comment with the ID 756394

// const comment = comments.find(function(comment) {
//     if(comment.id === 8573645) {
//         return true;
//     }
// });
// console.log({comment}) Hecho debajo con arroy functions y ternarios

//const idSearch = comments.find(comment => (comment.id == 8573645)? true : false); podríamos ahorrar el ternario porque si pasa va a devolver true

const idSearch = comments.find(comment => (comment.id === 8573645));

console.log({idSearch})

//Find the comment with the ID 638943

const index = comments.findIndex(comment => (comment.id === 638943));
console.log(index);

//comments.splice(index, 4);

const newComments = [
    
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];

console.table(newComments)

//marcar el inicio y el fin, en este caso del principio, elemento de índice 0
//hasta el índice, en este caso 4
//y luego marcas desde donde hasta el final (indice+1), porque queremos de la posición 5 al final
// ... para spread into an array
//lo que hago es marcar de donde a donde. Línea 72 



