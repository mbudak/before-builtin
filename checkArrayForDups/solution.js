// Your solution here
function isDublicateInAnArray(arg) {
    var foundCount = 0;
    for (var i = 0; i < arg.length; i++) {                
        for (var j = 0; j < arg.length; j++) {
            if (arg[i] === arg[j]) {
                // console.log('LAN', arg[i], arg[j])
                foundCount = foundCount + 1;
            }
        }
        
    }
    if (foundCount > arg.length) {
        return true;
    }
    return false;
}

console.log('[1,2,3,1]', isDublicateInAnArray([1,2,3,1]));
console.log('[1,2,3,4]', isDublicateInAnArray([1,2,3,4]));