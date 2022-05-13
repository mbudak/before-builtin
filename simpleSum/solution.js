function simpleSum(intA, intB) {
    // Unless the two values are the same, then return double their sum.
    if (intA != intB) {
        
        return (intA + intB) * 2;
    }
    // Given two int values, return their sum.
    return intA + intB;
}

console.log('2 2 -> ', simpleSum(2, 2));
console.log('2 3 -> ', simpleSum(2, 3));
