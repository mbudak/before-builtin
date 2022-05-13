// Your solution here
function loneSum(a, b, c) {
    
    // all same
    if (a == b & a == c) {
        return a;
    } 
    if (b == c) {
        return a + b;
    }
    if (a == c) {
        return a + b;
    }
    if (a == b & b != c) {
        return b + c;
    }
    // all unique
    return a + b + c; 
}

console.log('1 2 3 -> ', loneSum(1, 2, 3));
console.log('1 1 3 -> ', loneSum(1, 1, 3));
console.log('1 2 1 -> ', loneSum(1, 2, 1));
console.log('1 1 1 -> ', loneSum(1, 1, 1));
console.log('1 2 2 -> ', loneSum(1, 2, 2));