const fibonacci = function(input) {
    // convert input to an integer
    const n = parseInt(input, 10)

    // check if input is a valid positive number
    if(isNaN(n) || n < 0) {
        return 'OOPS';
    }

    // handle fibonacci logic
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++){
        const next = a + b;
        a = b;
        b = next;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
