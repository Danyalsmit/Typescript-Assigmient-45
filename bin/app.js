// 46
// let laptop = {
//   make: "dell",
//   model: "Xps 15",
//   year: 2021,
//   describe: () => {
//     console.log(`this laptop is a ${laptop.year}${laptop.make}${laptop.model}`);
//   },
// };
// laptop.describe();
// 47
// let laptops = [
//   { make: "dell", model: "XPS150", year: 2023 },
//   { make: "Asus", model: "XPS50", year: 2020 },
//   { make: "HP", model: "XPS15", year: 2021 },
// ];
// let [laptop1,laptop2,laptop3]= laptops;
// console.log(laptop1);
// console.log(laptop2);
// console.log(laptop3);
// 48
// let laptopset1 = ["abc", "bda", "abc"];
// let laptopset2 = ["aa", "aaa", "abf"];
// let combinePrices = [...laptopset1, ...laptopset2].sort((a, b) => a.localeCompare(b));
// console.log("combined",combinePrices);
// 49
// function logHobbies(...hobbies: string[]) {
//   hobbies.forEach((hobby) => {
//     console.log(`I enjoy ${hobby}`);
//   });
// }
// logHobbies("reading", "coding", "ridingbike");
// 50
// let specialDay = `My ideal day would involve :
// 1. waking up early and ging for a joging.
// 2. spending a few hours coding on a personal project
// 3. Ending a day by riding a bike`;
// console.log(specialDay);
// 51
// function calculateArea(width: number, height: number) {
//   return width * height;
// }
// const calculateArea = (width: number, height: number) => {
//    let a = width * height;
//    return a
// }
// console.log(calculateArea(5, 6));
// 52
// let smartphones = {
//   make: "samsung",
//   model: "Glaxy S10",
//   spec: {
//     storage: "212gb",
//     screenSize: "6.2 inches",
//   },
// };
// console.log(smartphones);
// 53
// let developerSkills = {
//   language: ["javascript", "Typescript", "python"],
//   Framework: ["React", "Angular", "Vue"],
//   tools: ["Git", "WebPack", "Docker"],
// };
// let { language, Framework, tools } = developerSkills;
// console.log(
//   `languages${language[0]}.framework:${Framework[0]}, tools:${tools[2]}`
// );
// // 54
// function createObject(key: string, value: string) {
//   let dynamicObject :{[key:string]:string} ={};
//   dynamicObject[key] = value;
//   return dynamicObject;
// }
// let user = createObject("theme", "dark");
// console.log(user);
// 55
// let numbers =[1,2,3,4,5]
// let doubleNumbers = numbers.map((key,number)=>{
//     return `Double${key} numbers${number * 2}`
// })
// console.log(`Double numbers${doubleNumbers}`);
// 56
// let mixedArray = [1, "apple", 2, "banana", true, "carrot"];
// let stringsArray = mixedArray.filter(item => typeof item === "boolean");
// console.log(stringsArray);
// 57
// let grades = [88, 94, 72, 99, 53, 77];
// let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
// console.log(averageGrade);
// 58
// function averageScore(...scores: number[]) {
//   let total = scores.reduce((sum, score) => sum + score, 0);
//  let  num = scores.length;
//  console.log(num);
//   return total / scores.length
// }
// console.log(averageScore(10,20,30,40));
// 59
// function makeAdder(valueToAdd:number):(number:number) => number{
//   return function(number:number):number{
//     return number + valueToAdd
//   }
// }
// let addFive = makeAdder(7)
// console.log(addFive(10));
// 60
// let userProfile =(function(){
//     let name = "danyal";
//     let age = 23;
//     return{
//         display:function(){
//             console.log(`Name: ${name}, Age:${age}`);
//         }
//     }
// })();
// userProfile.display();
// 61
// enum vehicleType{
//     car,
//     truck,
//     bike
// }
// console.log(vehicleType.bike);
// 62
// interface student {
//     name:string;
//     age:number;
//     courses:string[];
// }
// let student : student = {
//     name:"danyal",
//     age:23,
//     courses:["math","english"]
// }
// console.log(student);
// // 63
// type shape ={
//     kind:"circle"| "Retangle";
//     radius:number;
//     width?:number;
//     hight?:number;
// }
// let circle:shape ={
//     kind:"circle",
//     radius: 5
// }
// let retangle:shape ={
//     kind:"Retangle",
//     radius: 5,
//     width:45,
//     hight:25
// }
// console.log("circle",circle);
// console.log("retangle",retangle);
// // 64
// function combineString(text:string,num:number){
//     return text + num ;
// }
// console.log(combineString("Age:",85));
// // 65
// function remainder(num1: number, num2: number) {
//     return num1 % num2;
// }
// console.log(remainder(4, 2));
// 66
// function checkBoth(val1: boolean, val2: boolean) {
//   return val1 && val2;
// }
// console.log(checkBoth(true, true));
// 67
// function AddNumberToString(number1: number,numberString:string){
//   return number1 + Number(numberString)
// }
// console.log(AddNumberToString(4,"5"));\
// 68
// function multipleDecimal(num1:number,num2:number){
//   return Math.round((num1*num2 )*10)/100
// }
// console.log(multipleDecimal(1.4,2.4));
// // 69
// function divideAndRemeinder(divided:number,divisor:number){
// let quotient = Math.floor(divided / divisor);
// let reminder = divided % divisor
// return {quotient,reminder}
// }
// console.log(divideAndRemeinder(13,4));
//  70
// function printNumberWithLet(){
//   for (let i = 1; i<= 5;i++ ){
//     console.log(i);
//   }
// }
// printNumberWithLet()
// // 71
// let name = "ali";
// name = "akhter"
// console.log(name);
// const age = "25";
// try {
//   age ="26"
// } catch (error) {
//   console.log("Cannot reassign a constant variable.");
// }
// 72
// {
//   let blockLet = "visible inside the block";
//   let blockConst = "only inside the block";
//   console.log(blockLet);
//   console.log(blockConst);
// }
// try {
//   console.log(blockLet);
// } catch (error) {
//   console.log("error 1");
// }
// try {
//   console.log(blockConst);
// } catch (error) {
//   console.log("error 1");
// }
// 73
// function updateVariable(){
//   let number = 10;
//   console.log("Initial value:",number);
//   number = 20;
//   console.log("update value :", number);
// }
// updateVariable()
// 74
// function swapNumber() {
//   let a = 5,b = 10;
//   console.log("a", a, "b=====", b);
//   let temp = a;
//     a = b;
//     b = temp;
//     console.log("After Swap : a =",a ,"b =",b);
// }
// swapNumber()
// 75
// function useCompoundOperators() {
//   let x = 4;
//   console.log("Initial x:", x);
//   x += 2;
//   console.log("After addition:", x); // Shows x after addition
//   x -= 1; // Subtracts 1 from x
//   console.log("After subtraction:", x); // Shows x after subtraction
//   x *= 3; // Multiplies x by 3
//   console.log("After multiplication:", x); // Shows x after multiplication
//   x /= 2; // Divides x by 2
//   console.log("After division:", x); // Shows x after division
// }
// useCompoundOperators();
// // 76
// function addNumber(num1:number,num2:number){
//   return num1 + num2
// }
// console.log(addNumber(4,20));
// // 77
// function greatUser(name:string="anonymous"){
//   console.log(`Hello ${name}`);
// }
// greatUser("kumail")
// greatUser()
// 78
// function squareDecleration(num:number){
//   return num * num
// }
// const squareExpresion = function(num:number){
//   return num * num
// }
// console.log(squareDecleration(3));
// console.log(squareExpresion(4));
// 79
// let car = {
//   make: "toyota",
//   model: "Corolla",
//   year: 2000,
// };
// console.log(car.year);
// 80
// let car = {
//   make: "toyota",
//   model: "Corolla",
//   year: 2000,
// };
// (car as any).color = "Blue"; // Using type assertion
// car.year = 2005;
// console.log(car);
// 81
// function logObjectProperties(obj: { [key: string]: any }) {
//   for (let property in obj){
//     console.log(`${obj[property]}`);
//   }
// }
// const car: { [key: string]: any } = { make: "Toyota", model: "Corolla", year: 2021, color: "blue", extraFeature: true }; // Can have additional properties
// logObjectProperties(car);
// // 82
// function stringLength(str:string){
//   return str.length;
// }
// console.log(stringLength("mark"));
// 83
// function convertCase(str: string) {
//   let upperStr = str.toUpperCase();
//   let lowerStr = str.toLowerCase();
//   console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
// }
// convertCase("Hello World");
// // 84
// function replaceJavascriptWithTypeScript(sentence:string){
//   return sentence.replace(/javascript  /g ,"Typescript");
// }
// console.log(replaceJavascriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
//
// // 85
// function findCodePosition(str:string){
//   return str.indexOf("code")
// }
// console.log(findCodePosition("learnto code with javascript"));
// 86
// function hasJavascript(str:string){
//   return str.includes("javascript")
// }
// console.log(hasJavascript("I love coding in javascript"));
// 87
// function ectractFirst10Char(str:string){
//   return str.substring(0,10)
// }
//  console.log(ectractFirst10Char("I love coding in javascript"));
// // 88
// function roundToNearestInteger(num: number): number {
//   return Math.round(num);
// }
// console.log(roundToNearestInteger(4.7));
// console.log(roundToNearestInteger(4.4));
// 89
// function convertStringToNumber(str: string, num: number) {
//   let stri = parseFloat(str);
//   let nume = parseInt(num.toString());
//   return `${stri},${nume}`;
// }
// console.log(convertStringToNumber("123.45", 6));
// // 90
// function isValueNan(str:any){
//   return isNaN(str)
// }
// console.log(isValueNan("hello"));
// console.log(isValueNan(1));
// 91
// let favoriteFruits:string[] =["Apple","Mango","Banana"];
// favoriteFruits.push("grapes")
//   console.log(favoriteFruits);
// 92
// function removeLastElement<T>(str:T[]):T| undefined{
//   return str.pop()
// }
// const fruits: string[] = ["Apple", "Banana", "Cherry"];
// console.log(removeLastElement(fruits));
// console.log(fruits);
// 93
// function replaceBananaWithMango(fruits: string[]) {
//   const index = fruits.indexOf("Banana");
//   if (index !== -1) fruits[index] = "Mango";
// }
// const fruits: string[] = ["Apple", "Banana", "Cherry"];
// replaceBananaWithMango(fruits);
// console.log(fruits);
// 94
// const words: string[] = ["Hello", "World", "TypeScript", "JavaScript"];
// const lengths: number[] = words.map(word => word.length);
// console.log(lengths); 
// // 95
// function filterGreaterThanTen(numbers: number[]){
//   return numbers.filter(number => number > 10);
// }
// const numbers: number[] = [5, 10, 15, 20, 25];
// console.log(filterGreaterThanTen(numbers)); 
// 96
// function calculateSum(numbers: number[]): number {
//   return numbers.reduce((accumulator, current) => accumulator + current, 0);
// }
// const numbers: number[] = [1, 2, 3, 4, 5];
// console.log(calculateSum(numbers));
// 97
function getCurrentDateFormatted() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1);
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(getCurrentDateFormatted());
export {};
