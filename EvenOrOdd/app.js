/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function even_or_odd(number) {
    //return number % 2 === 0 ? 'even' : 'odd';
    return number % 2 === 1 ? 'odd' : 'even';
}

// Run Tests

console.log(even_or_odd(4));
console.log(even_or_odd(13));