const leapYears = function (year) {
    // Check divisibility rules:
    if (year % 400 === 0) {
      // e.g. 1600, 2000 -> leap years
      return true;
    } else if (year % 100 === 0) {
      // e.g. 1700, 1800, 1900 -> not leap years
      return false;
    } else if (year % 4 === 0) {
      // e.g. 2012, 2016, 2020 -> leap years
      return true;
    } else {
      return false;
    }
  };
  

// Do not edit below this line
module.exports = leapYears;
