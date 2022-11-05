"use strict";
/*
const markBmi = 23
const johnBmi = 21

if (markBmi > johnBmi) {
    console.log(`mark's BMI (${markBmi}) is higher than john's BMI (${johnBmi}).`)
} else {
    console.log(`john's BMI (${johnBmi}) is higher than mark's BMI (${markBmi}).`)
}
*/

/*
const dolphinsAvg =(96+80+89)/3;
const koalasAvg =(96+80+89)/3;

if (dolphinsAvg > koalasAvg && dolphinsAvg > 100) {
    console.log("dolphins have won the match")
} else if (dolphinsAvg < koalasAvg && koalasAvg > 100) {
    console.log("koalas have won the match")
} else if (dolphinsAvg == koalasAvg && dolphinsAvg >= 100 && koalasAvg >=100){
    console.log("both won")
} else {
    console.log("nobody won")
}
*/

/*
const day = "tuesday"

if (day === "monday") {
    console.log('plan course')
    console.log('go to coding')
} else if(day === "tuesday") {
    console.log('prep theory')
} else if (day === "wednesday" || day === "thursday") {
    console.log('write code')
} else if (day === "friday") {
    console.log("record vids")
} else if (day === "saturday" || day === "sunday"){
    console.log("enjoy the weekend")
} else {
    console.log("not a valid day")
}
*/
/////////ternary operator ? alt if else//////////
/*
const bill = 100;
const tip = bill <= 300 && bill >=30 ? bill*0.15 : bill*0.2;
const value =bill+tip;
console.log (`your bill is $${bill} and tip amount is ${tip}. total $${value}`)
*/

/////////calling function inside a function//////////
/*
const cutFruit =function (fruit) {
    return fruit *4;
}

const fruitProcess = function (apples, oranges){
    const applePieces = cutFruit(apples)
    const orangePieces =cutFruit(oranges)
    const juice = `juice prepared from ${applePieces} apple slices and ${orangePieces} orange slices.`;
    return juice;
}
console.log(fruitProcess(2,4))
*/
/////////function,if else//////////
/*
let calcAvg = (a, b, c) => (a+b+c)/3;
const scoreDolphins = calcAvg(90,20,30);
const scoreKoala =calcAvg(20,30,40);

const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`dolphins win the match`)
    } else if (avgKoalas >= 2* avgDolphins) {
        console.log(`koalas win the match`)
    } else{
        console.log(`no winners`)
    }
}
checkWinner(scoreDolphins,scoreKoala)
*/
/////////using function on array//////////
/*
const calcTip = function(bill){
    return bill <= 300 && bill >=30 ? bill*0.15 : bill*0.2;

}

const bills = [100, 200, 300];
const tips =[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills,tips)
*/
/////////using objects, function inside object, method and this//////////
/*
const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBmi: function() {
        this.bmi=this.mass/this.height**2;
        return this.bmi;
    }
}
const john ={
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBmi: function() {
        this.bmi= this.mass/this.height**2;
        return this.bmi;
    }
}
mark.calcBmi();
john.calcBmi();
if (mark.bmi > john.bmi) {
    console.log(`Mark's BMI ${mark.bmi} is higher than John's BMI ${john.bmi}`)
} else {
    console.log(`Mark's BMI ${mark.bmi} is lower than John's BMI ${john.bmi}`)
}
*/
/////////for loop//////////
/*
const age = []
const mith = [2010, 2000, 1990, 1998, 1987]
for (let i = mith.length - 1; i >= 0; i--) {
    console.log(2022 - mith[i]);

    age.push(2022 - mith[i])
}
console.log(age)
*/
/////////nested for loop//////////
/*
for(let exercise = 1; exercise < 4; exercise++){
    console.log(`exercise${exercise}`)

    for(let rep = 1; rep <6; rep++){
        console.log(`lifting weights ${rep}`)
    }
}
*/
/////////while loop//////////
/*
let dice =Math.trunc(Math.random()*6)+1;
    while(dice !==6){
    console.log(`you rolled ${dice}`);
    dice=Math.trunc(Math.random()*6)+1;
    if (dice ===6){
        console.log(`game over`);
    }
}
*/
/////////tip calc from array using function and for loop//////////
/*
const calcTip = function (bill) {
    return bill <= 300 && bill >= 30 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);
}
console.log(tips, total);

const calcAvg = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum / arr.length;
}
console.log(calcAvg(total));
*/
/////////concat 2 array, find min, max value in the array, return amplitude(max-min)/////////
/*
const temp1 = [10, 23, 42, 1, 13, 75, 35, 98];
const temp2 = [11, 3, 52, 31, -3, 72, 5, 188];
const temp = temp1.concat(temp2);

const calcTemp = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTemp(temp);
console.log(amplitude);
*/
/////////array to string//////////
/*
const temp = [17, 21, 23];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}c in ${i + 1}days... `;
  }
  console.log("..." + str);
};
printForecast(temp);
*/
