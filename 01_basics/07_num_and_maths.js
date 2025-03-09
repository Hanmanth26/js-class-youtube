 const score = 400

 const balance = new Number(100)
// console.log(balance);//number showng

//  console.log(balance.toString());
// console.log(balance.toString().length);//lenghth of the string
// console.log(balance.toFixed(2));
// console.log(balance.toFixed(1));//fixed decimal value

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));//nearest value 

 const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));// convert the indian value based on the coma


// +++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));// negative value will be changed only negative value, positive valuve become a same 
// console.log(Math.round(4.3));// give me roundoff value
// console.log(Math.ceil(4.2));//choice the upeer value or lower value (it will choice the top value)
// console.log(Math.floor(4.6));//lower value choising
// console.log(Math.min(4,3,8,6));// maximum valuve
// console.log(Math.max(8,5,68,2));//maximum valuve

console.log(Math.random());//the output will generat between of the 0/1
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);// add the 1 because the output will be generat 1upwordes

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1));
console.log(Math.floor(Math.random() * (max - min + 1)) + min)