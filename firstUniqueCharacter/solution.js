
function findFirstUniqueChar(str) {
    for (var i = 0; i < str.length; i++)
    {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
        
    }
    
}

console.log("the quick brown fox jumps over the calm kitten quietly", findFirstUniqueChar("the quick brown fox jumps over the calm kitten quietly"));
console.log("this hat is the greatest!", findFirstUniqueChar("this hat is the greatest!"));
console.log("what a wonderful day it has been!", findFirstUniqueChar("what a wonderful day it has been!"));   
