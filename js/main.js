console.log("connected");

//myAge stores person's age to be converted to dog years equivalent
const myAge = 33;

//earlyYears converts the first two years of a dog's life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5;

//laterYears equates to 4 dog years per human year after the first 2 dog years.
let laterYears = myAge - 2;
laterYears *= 4;

//console.log(earlyYears, laterYears);

//myAgeInDogYears stores the added early and later dog year variables.
let myAgeInDogYears = earlyYears + laterYears;

//console.log(myAgeInDogYears);

//.toLowerCase method returns a string with all lowercase letters.
let myName = 'Josue Rivera'.toLowerCase();

//prints string with variables in place
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);