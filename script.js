// Ticket Pricing: Write a program that prompts the
// user to enter their age and then determines the price
// of a movie ticket based on the following criteria:

// Prompt message to get users age.
let getAge = prompt("Please Enter Age For Ticket Fee.");

// *******

// Ticket class Object.
class Ticketing {
  constructor(age) {
    this.age = age;
  }

  // Function to check condition for users age.
  getUsersAge() {
    if (this.age <= 12) {
      console.log("$10");
    } else if (this.age <= 17) {
      console.log("$15");
    } else if (this.age >= 18) {
      console.log("$20");
    } else {
      console.log("Please enter a valid age");
    }
  }
}
// Instance of the Ticketing class
const printTicket = new Ticketing(getAge);
// Calling objects and its function.
printTicket.getUsersAge();

/*Weather Clothing Adviser: Develop a program that asks 
the user for the current temperature and whether it is raining or not. 
Based on this information, advise the user on what clothing to wear. */

// Class object to get clothing advice
class WeatherAdviser {
  constructor(currentTemperature, isRaining) {
    this.currentTemperature = currentTemperature;
    this.isRaining = isRaining;
  }

  // Check the temperature and provide clothing advice
  getWeatherAdvise() {
    let advice = "";
    switch (true) {
      case this.currentTemperature < 0:
        advice = "It's freezing! Wear a heavy winter coat, scarf, and gloves.";
        return console.log(advice);
      case this.currentTemperature >= 0 && this.currentTemperature <= 10:
        advice = "It's cold outside. Wear a coat and a warm sweater.";
        return console.log(advice);
      case this.currentTemperature > 10 && this.currentTemperature <= 20:
        advice =
          "The weather is cool. A light jacket or sweater should be fine.";
        return console.log(advice);
      case this.currentTemperature > 20 && this.currentTemperature <= 30:
        advice = "It's warm. Wear light clothing like a t-shirt and shorts.";
        return console.log(advice);
      default:
        advice = "It's really hot! Stay cool with shorts and a t-shirt.";
        return console.log(advice);
    }
  }

  // Check if it's raining

  checkRainStatus() {
    let advice = "";
    if (this.isRaining === "raining") {
      advice = " Also, don't forget to take an umbrella or a raincoat.";
      return console.log(advice);
    }
  }
}

const weatherAdviser = new WeatherAdviser(35, "raining");

weatherAdviser.getWeatherAdvise();
weatherAdviser.checkRainStatus();

/** Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number.
 * The Fibonacci sequence starts with 0 and 1, and
 * each subsequent number is the sum of the two
 * preceding numbers (0, 1, 1, 2, 3, 5, 8, ...)
 * **/

function fibonacci(n) {
  // Base cases: F(0) = 0 and F(1) = 1
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  // Recursive case: F(n) = F(n-1) + F(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
let n = 10; // For example, to find the 10th Fibonacci number
console.log(`Fibonacci(${n}) =`, fibonacci(n));

/* Power Function: Write a recursive function to calculate 
the result of raising a number to a given power. */

function power(base, exponent) {
  // Base case: any number raised to the power of 0 is 1
  if (exponent === 0) {
    return 1;
  }

  // Recursive case: base^exponent = base * base^(exponent-1)
  return base * power(base, exponent - 1);
}

// Example usage:
let base = 2;
let exponent = 5;
console.log(`${base}^${exponent} =`, power(base, exponent));
