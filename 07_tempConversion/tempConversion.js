const convertToCelsius = function(tempFahr) {
  return +(((tempFahr - 32) / 1.8).toFixed(1));
  
};

const convertToFahrenheit = function(tempCels) {
  return +((tempCels * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
