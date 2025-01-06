const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	if ( a === 0 || a === 1) return 1; // Base case: 0! and 1! = 1
  let total = 1;
  for (let i = 2; i <= a; i++) { 
    total *= i; // multiply total by each number from 2 to a
  }
  return total;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
