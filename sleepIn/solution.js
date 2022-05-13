function sleepIn(weekday, vacation){
    if (weekday == false || vacation == true) {
        return true;
    }
    return false;
}

console.log(' -> ', sleepIn(false, false))
console.log(' -> ', sleepIn(false, true))
console.log(' -> ', sleepIn(true, false))
console.log(' -> ', sleepIn(true, true))
