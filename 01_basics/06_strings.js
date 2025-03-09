const namr ="Ajay"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log('Hello my name is ${name} and my repo count is $ {repoCount}');

const gameName = new String('A-ja-y-k')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));


const newString = gameName.substring(0,3)
console.log(newString);

// const anotherString = gameName.slice(0,4)//this function we get the negative values also that value will be reverse 
// console.log(anotherString);

// const anotherString = gameName.slice(-5, 4)
// console.log(anotherString);

const newStringOne = "   ajay  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ajay.com/ajay%80kumbar"

console.log(url.replace('%80','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

