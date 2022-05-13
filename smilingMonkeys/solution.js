function monkeyTrouble(aSmile, bSmile) {
    if (aSmile & bSmile || !aSmile & !bSmile) {
        return true;
    }
    return false;
}

console.log('both Smile', monkeyTrouble(true, true));
console.log('only a Smile', monkeyTrouble(true, false));
console.log('only b Smile', monkeyTrouble(false, true));
console.log('both not Smile', monkeyTrouble(false, false));