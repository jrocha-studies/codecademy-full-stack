// forecast today in kelvin
const KELVIN = 300;

// forecast today in celsius based on forecast in kelvin
const CELSIUS = KELVIN - 273;
const FAHRENHEIT = Math.floor(CELSIUS * (9 / 5) + 32);
const NEWTON = Math.floor(CELSIUS * (33 / 100));

console.log(`The temperature is ${KELVIN} degrees Kelvin`);
console.log(`The temperature is ${CELSIUS} degrees Celsius`);
console.log(`The temperature is ${FAHRENHEIT} degrees Fahrenheit`);
console.log(`The temperature is ${NEWTON} degrees Newton`);
