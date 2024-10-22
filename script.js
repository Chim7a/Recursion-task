// Ticket Pricing: Write a program that prompts the
// user to enter their age and then determines the price
// of a movie ticket based on the following criteria:
let getAge = prompt("Please Enter Age For Ticket Fee.");
class Ticketing {
  constructor(age) {
    this.age = age;
  }

  getUsersAge() {
    if (this.age <= 12) {
      alert("$10");
    } else if (this.age <= 17) {
      alert("$15");
    } else if (this.age >= 18) {
      alert("$20");
    } else {
      alert("Please enter a valid age");
    }
  }
}

const printTicket = new Ticketing(getAge);

printTicket.getUsersAge();
