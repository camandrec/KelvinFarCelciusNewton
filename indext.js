const kelvin = 0; //This variable depicts the forecast today in Kelvin scale's temperature, it remains constant thorough the code.
let celsius = kelvin - 273; //This variable converts Kelvin scale's temperature into Celsius scale's temperature.
let farenheit = celsius * (9/5) + 32; //This variable converts Celsius scale's temperature into Farenheit scale's temperature;
farenheit = Math.floor(farenheit); //This line rounds down the Farenheit scale's temperature.
let newton = celsius * (33/100); //This line calculates the Newton scale's temperature.
newton = Math.floor(newton); //This line rounds down the Newton scale's temperature.

console.log(`The temperature is ${farenheit} degrees Farenheit`)

console.log(`The temperature is ${newton} degrees Newton`)