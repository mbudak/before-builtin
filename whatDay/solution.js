function WeekDay(arg) {
    arg = (arg % 7); // Modulo 7 

    if (arg == 1) {
        return 'Monday';
    }
    if (arg == 2) {
        return 'Tuesday'
    }
    if (arg == 3) {
        return 'Wednesday'
    }
    if (arg == 4) {
        return 'Thursday'
    }
    if (arg == 5) {
        return 'Friday'
    } 
    if (arg == 6) {
        return 'Saturday'
    }
    if (arg == 7) {
        return 'Sunday'
    }
}

console.log('1', WeekDay(1));
console.log('5', WeekDay(5));
console.log('8', WeekDay(8));
// Bonus
console.log('21', WeekDay(21));
console.log('431', WeekDay(431));
console.log('1002', WeekDay(1002));