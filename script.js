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

class WeatherAdviser {
  constructor(currentTemperature) {
    this.currentTemperature = currentTemperature;
  }

  getWeatherAdvise() {
    switch (true) {
      case this.currentTemperature >= 90:
        return console.log("A");
      case this.currentTemperature >= 80:
        return console.log("B");
      case this.currentTemperature >= 70:
        return console.log("C");
      case this.currentTemperature >= 60:
        return console.log("D");
      case this.currentTemperature <= 59:
        return console.log("F");
    }
  }
}

const weatherAdviser = new WeatherAdviser(89);

weatherAdviser.getWeatherAdvise();
