// Your solution here

function average(array){
    var sumall = 0;
    
    for (let i = 0; i < array.length; i++)
    {
        sumall = sumall + array[i];
    }
    
    return sumall / array.length;
}



console.log('[ 1, 4, 7 ] -> ', average([ 1, 4, 7 ]));
console.log('[ 10, 5 ] -> ', average([ 10, 5 ]));
console.log('[ 1.5, 3, 2.5, 1 ] -> ', average([ 1.5, 3, 2.5, 1 ]));
