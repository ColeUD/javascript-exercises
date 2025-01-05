const reverseString = function(string) {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;

// looks like it turns the string into an array, and then goes backwards through 
// the string by concatenating the character at string[i] into a new string called result
// so hello will return olleh