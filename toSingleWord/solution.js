function toSingleWord(str) {
    // New Solution
    return str.toLowerCase().replaceAll(" ", "");
}

// Ancient Method
function toSingleWordRaw(str) {
    var ret = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            ret = ret + str[i]
        }
    }
    return ret.toLocaleLowerCase();
}


console.log('Tg School ->', toSingleWord('Tg School'));
console.log('favorite tree ever ->', toSingleWord('favorite tree ever here'));
console.log('one word ->', toSingleWord('one word'));


console.log('favorite tree ever ->', toSingleWordRaw('favorite tree ever here'));