const convertToCelsius = function(input) {
    //temp - 32 * 5/9
    celsius = (input - 32) * 5/9;
    console.log("celsius var = " + celsius);
    celsiusFinal = celsius.toFixed(1);
    console.log("celisusFinal var = " + celsiusFinal);
    return (Number(celsiusFinal));
};

const convertToFahrenheit = function(number) {

  fah = (number * 9/5) + 32;
  fahFInal = fah.toFixed(1);
  return (Number(fahFInal));

  //temp * 9/5 + 32
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
