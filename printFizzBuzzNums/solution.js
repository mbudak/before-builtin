// Your solution here
function printNumbers(){
    for (var i = 1; i <= 100; i ++ ){
        if (i % 3 == false & i % 5 == false) { // both 3rd and 5th is true
            console.log('Result: ', i, 'FizzBuzz');
        } else if (i % 3 == false ) { // each 3rd
            console.log('Result: ', i, "Fizz");
        } else if (i % 5 == false ) { // each 5th
            console.log('Result: ', i, 'Buzz');
        } else { // rest of it
            console.log('Result: ', i);
        }
    }
}


printNumbers();