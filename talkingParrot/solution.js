function talkingParrot(hour, isTalking){
    if (hour <= 7 & isTalking) {
        return true;
    }
    if (hour >= 20 & isTalking) {
        return true;
    } 
    // default
    return false;
}


console.log('hour 2, talking -> ', talkingParrot(2, true));
console.log('hour 2, not talking -> ', talkingParrot(2, false));
console.log('hour 10, true -> ', talkingParrot(10, true));
console.log('hour 22, true -> ', talkingParrot(22, true));
console.log('hour 23, false -> ', talkingParrot(23, false));