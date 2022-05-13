// Your solution here
function findFirstDublicateInteger(array) {
    for (var i = 0; i < array.length; i++) {
        // we don't need to start beginning
        for (var j = i + 1; j < array.length; j++){
            if (array[i] == array[j]){
                return array[j];
            }
        }
    }


}

console.log('[ 2, 5, 6, 3, 5 ]', findFirstDublicateInteger([ 2, 5, 6, 3, 5 ]));
console.log('[ 1, 3, 4, 1, 3, 4 ]', findFirstDublicateInteger([ 1, 3, 4, 1, 3, 4 ]));
console.log('[ 2, 4, 5 ]', findFirstDublicateInteger([ 2, 4, 5 ]));