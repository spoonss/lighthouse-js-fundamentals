function ageCalculator (name, yearOfBirth, currentYear){
  var age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}
/*Suzie is 32 years old.*/

console.log(ageCalculator("Suzie", 1984, 2016));
console.log(ageCalculator("Jack", 2004, 2016));
console.log(ageCalculator("Ali", 2016, 2016));

