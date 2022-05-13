// Your solution here
function findMaxInt(arg) {
    var temp = '0';
    for (var i = 0; i < arg.length; i++){
        if (parseInt(temp) < parseInt(arg[i])) {
            temp = arg[i];
        }
    }

    return temp;
}

console.log('[ 1, 2, 3 ]', findMaxInt([ 1, 2, 3 ]));
console.log('[ 3, 6, 4, 5, 2, 1 ]', findMaxInt([ 3, 6, 4, 5, 2, 1 ]));
console.log('[ 3, 3, 3 ]', findMaxInt([ 3, 3, 3 ]));