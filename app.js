let convert = {};

convert.cToF = function(celsius) {
  if(!Number.isInteger(celsius)) return undefined;
  return celsius * 9 / 5 + 32;
}

convert.cToK = function(celsius) {
	if(!Number.isInteger(celsius)) return undefined;
	return celsius + 273.15;
}

convert.fToC = function(fahrenheit) {
  if(!Number.isInteger(fahrenheit)) return undefined;
  return (fahrenheit - 32) * 5 / 9;
}

convert.fToK = function(fahrenheit) {
	if(!Number.isInteger(fahrenheit)) return undefined;
	return (fahrenheit + 459.67) * 5 / 9;
}

convert.kToC = function(kelvin) {
	if(!Number.isInteger(kelvin)) return undefined;
	return kelvin - 273.15;
}

convert.kToF = function(kelvin) {
	if(!Number.isInteger(kelvin)) return undefined;
	return kelvin - 459.67;
}

module.exports = convert;