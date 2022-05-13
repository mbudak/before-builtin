// Your solution here
function reverseIt(arg) {
    var ret = '';
    // reverse loop
    for (var i = arg.length-1; i >= 0; i--) {
        ret = ret + arg[i];
    }
    return ret;
}

console.log('1234', reverseIt('1234'));
console.log('1201', reverseIt('1201'));
console.log('4', reverseIt('4'));
