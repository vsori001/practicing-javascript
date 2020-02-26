// Setting the value of kelvin
const kelvin = 828;

// Converting Kelvin to Celsius
let celsius = kelvin - 273;

// Converting Celsius to Fahrenheit
let fahrenheit = Math.floor(celsius * (9/5) + 32);

let newton = Math.floor( celsius * (33/100) );



console.log('The temperature is '+ fahrenheit + ' degrees Fahrenheit.');
console.log('The temperature is ' + newton + ' degrees Newton.');
