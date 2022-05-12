// Your solution here
// to run on terminal
// node solution

// Sum all sequental numbers that given the target
function greatsum(target) {
    var ret = 0; // default return value
    for (let step = 1; step <= target; step++) {
        ret = ret + step;
    }
    return ret;
}

console.log('input 4 ', greatsum(4));
console.log('input 10 ', greatsum(10));
console.log('input 2001 ', greatsum(2001));
