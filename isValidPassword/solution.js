function checkPassword(arg) {
    var min8 = false;
    var min1Capital = false;
    var min1Lowercase = false;

    // min 8 character
    if (arg.length >= 8) {
        min8 = true;
    }
    // min1capital
    for (var i = 0; i < arg.length; i++){
        if (arg[i] == arg[i].toUpperCase()) {
            min1Capital = true;
        }
    }
    // min1lowercase
    for (var i = 0; i < arg.length; i++){
        if (arg[i] == arg[i].toLowerCase()) {
            min1Lowercase = true;
        }
    }
    // All three are true
    if (min8 + min1Capital + min1Lowercase >= 3) {
        return true;
    } 
    return false;
}

console.log('RexTheDog', checkPassword('RexTheDog'));
console.log('rexthedog', checkPassword('rexthedog'));
console.log('Dog', checkPassword('Dog'));