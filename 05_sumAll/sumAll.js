const sumAll = function(a, b) {
    // 1. check for non-numbers 
    if (typeof a !== 'number' || typeof b !== 'number') {
        return `ERROR`;
    }

    // 2. check for non-integers
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }

    // 3. check for negative numbers
    if (a < 0 || b < 0) {
        return 'ERROR';
    }



    // determine which is smaller and which is larger
    const min = Math.min(a, b);
    const max = Math.max(a, b);
   
    // sum the range using a simple loop
    let total = 0;
    for (let i = min; i <= max; i++) {
        total += i;
    }

    return total;
}







// Do not edit below this line
module.exports = sumAll;
