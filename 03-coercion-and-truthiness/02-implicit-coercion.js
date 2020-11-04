// let sum = 10 + 20; //adding

// console.log(sum);//30 number

// let string = "10" + "20"; // concatenation 

// console.log(string); //1020 string

// let notSure = 10 + "20"; // "10" + "20"

// console.log(notSure);
// console.log(typeof notSure);


// let willBeAString = "10" + 20 + 30 + 40 + 50;
// "10" + "20" + 30 + 40 + 50
// "1020" + 30 + 40 + 50
// "1020" + "30" + 40 + 50
// "102030" + 40 + 50
// "102030" + "40" + 50
// "10203040" + 50
// "10203040" + "50"
// "10203040"
// console.log(willBeAString);
// console.log(typeof willBeAString);


// let willBeAString = 10 + 20 + 30 + 40 + "50";
// 10 + 20 + 30 + 40 + "50"
// 30 + 30 + 40 + "50"
// 60 + 40 + "50"
// 100 + "50"
// "100" + "50"
// "10050"
// console.log(willBeAString);
// console.log(typeof willBeAString);



let willBeAString = 10 + 20 + "30" + 40 + 50;
// 10 + 20 + "30" + 40 + "50"
// 30 + "30" + 40 + 50
// "30" + "30" + 40 + 50
// "3030" + 40 + 50
// "3030" + "40" + 50 
// "303040" + 50
// "303040" + "50"
// "30304050"
console.log(willBeAString);
console.log(typeof willBeAString);



const a = 12345;
// "12345"
const stra = String(a);
const str = "" + a;


// const sum = Number(str[3]) + Number(str[4]);
const sum = +str[3] + +str[4];

console.log(sum);

