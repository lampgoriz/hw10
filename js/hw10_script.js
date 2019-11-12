console.log("Task 1");
function arr(a){
    for(let i  = 0; i<mass.length; i++){
        mass[i]*=2;
        newArr[i] = mass[i];
    }
    return newArr;
}

var mass = [1,2,3];
var newArr = [];

console.log(arr());


console.log("Task 2");

var obj = {
	bread: 25,
	milk: 30,
	chips: 50,
	water: 10,
	cucumbers: 42
}
var sum = 0;
var max = 0;
var min = Infinity;
var tempMax = 0;
var tempMin = Number;

for (let key in obj){
    sum += obj[key];
    tempMax = obj[key];
    tempMin = obj[key];
    if(tempMax > max){
        max = tempMax;
    }
    if(tempMin < min){
        min = tempMin;
    }
}
console.log("Sum: " + sum);
console.log("Max: " + max);
console.log("Min: " + min);


console.log("Task 3");

let array1 = [[4,5,13],[-5,0,4],[12,-3,12]];
let array2 = [[5,8,0],[87,65,7],[-50,24,43]];
let sumArray = [];
let temparr = 0;

for(let i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++)        
        temparr = array1[i][j] + array2[i][j];
        sumArray[i][j] = temparr;
        console.log(sumArray);
}
console.log(sumArray);
























