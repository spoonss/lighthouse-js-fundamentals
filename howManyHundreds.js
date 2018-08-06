function howManyHundreds(number){
	var result = number / 100;
	return Math.floor(result); 
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
