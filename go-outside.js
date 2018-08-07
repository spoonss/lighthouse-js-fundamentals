function whichSchool(age) {
    // Your code in here ...
    if (age < 12){
      return "you should go to Elementary School";
    } else if (age >= 13 && age <= 18){
      return "you should go to Secondary School";
    } else {
      return "you should go to Lighthouse labs";
    }
  }
  
  
  console.log(whichSchool(35));
  console.log(whichSchool(10));
  console.log(whichSchool(14));
