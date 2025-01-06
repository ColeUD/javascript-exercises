const convertToCelsius = function(temp) {
  const celsius = (temp - 32) * (5 / 9);
  // If celsius is an integer, return it as is; otherwise round to one decimal
  return Number.isInteger(celsius) ? celsius : parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  const fahrenheit = (9 / 5) * temp + 32;
  // If fahrenheit is an integer, return it as is; otherwise round to one decimal
  return Number.isInteger(fahrenheit) ? fahrenheit : parseFloat(fahrenheit.toFixed(1));
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
