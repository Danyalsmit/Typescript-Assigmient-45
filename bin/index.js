//2 var name : string = "Danyal";
// console.log(`Hello ${name} Would you learn to typescript today`);
export {};
//3  var name: string = "Danyal";
// console.log(name.toLowerCase() );
// console.log( name.toUpperCase());
// console.log( name.charAt(0).toLocaleUpperCase()+ name.slice(1).toLowerCase());
// 4
// console.log('Oscar Wild once said ,"Always forgive your enemies; noting annoys them so much."')
// 5
// let famousperson : string = "Oscar wild"
// let message : string = `${famousperson} once said , "Always forgive your enemies;nothing annoys them so much."`
// console.log(message)
// 6
// let person : string ="\t\n Danyal \t\n"
// console.log(person)
// console.log(person.trim()),
// 7
// console.log(10+5);//Addition
// console.log(10-6);//subtraction
// console.log(10/2);//division
// console.log(10*3);//multiplication
//8
// console.log(4+4);//Addition
// console.log(16-8);//subtraction
// console.log(16/2);//division
// console.log(2*4);//Multiplicatiom
// 9
// let favoriteNumber:number = 8;
// console.log(`my favorite number is ${favoriteNumber}.`);
// 10 danyal, 2024-03-06
// This program prints a personal message.
// let myName:string = "danyal"
// console.log(`Hello${myName}would you like to learn some Typescript today`)
// 11
// let friends:string[]=["Ali","Dabeer","Azeem"];
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i])
// }
// 12
// let names:string[]=["Alice","Bob","Mark"];
// for(let name of names){
// console.log(`hello ${name},would you learn some typescript today`)
// }
// 13
// let transport :string[]=["honda","tesla","suzuki"];
// transport.forEach(e => {
//     console.log(`i would like to own,${e}`);
// });
// 14
// let guest :string[]=['Ali','Mansoor','haris'];
// guest.forEach(f=>{
//     console.log(`Dear ${f} ,Would you like to join me for dinner?`)
// })
// 15
// let guests: string[] = ["Albert","Einstein", "Marie Curie", "john"];
// let notcomming = "Einstein";
// console.log(`${notcomming} can't make it dinner.`);
// let newOne = "Mark";
// guests[guests.indexOf(notcomming)] = newOne ;
// guests.forEach(f=>{
//     console.log(`Dear${f} would you like to join me for dinner ?`);
// })
// 16
// let guests:string[]=["john","Ali","Khan","haris"];
// console.log(`Great news ! i found a bigger dinner table`);
//  guests.unshift("newton");
//  guests.splice(guests.length / 2 ,0,  "charles");
// guests.push("imran");
//  guests.forEach(f=>{console.log(`${f} hello Dear`)})
// 17
// let guests:string[]=["john","Ali","Khan","haris","Haseeb"];
// console.log("unfortunately,I can only invite two guests");
// while(guests.length > 2){
// let removeGuests = guests.pop();
// console.log(`sorry ${removeGuests} i can't invite you to dinner`);
//
// }
// guests.forEach(f=>{
// console.log(`Dear ${f} you're still invited to dinner .`);
//
// })
// guests.splice(0,guests.length);
// console.log(guests);
// // 18
// let places :string[]=["Australia","England","Pakistan","New zealand"];
// console.log("same Order",places);
// console.log("Alphabetic order",[...places].sort());
// console.log("same order",places);
// console.log("Reverse Alphabetic order",[...places].sort().reverse());
// console.log("Orignal Order",places);
// places.reverse();
// console.log("reverse order",places)
// places.sort();
// console.log("Alphabetic order",places);
// places.reverse();
// console.log("Reverse Alphabetic order",places);
// 19
// let guests:string[]=["Albertr","Ali","Haris"];
// console.log(`i an inviting ${guests.length} people to dinner.`);
// 20
// let cities:string[]=["Karachi","Lahore","Islamabad","Faislabad"];
// console.log("Cities i like to visit",cities);
// 21
// let car:{name:string;model:string;year:number}={
//     name:"honda",
//     model:"old",
//     year:1998,
// };
// console.log(`car info ${car.name}  and year ${car.year} `);
// 22
// let friend:string[]=["bob","mark","Alex"];
// console.log(friend[3]);
// friend[2];
// 23
// let name = "Azar";
// console.log("name == 'Azar' ?i predict true");
// console.log(name == "Azar");
// console.log("name == fasil ? i  predict false");
// console.log(name == "fasil");
// // 24
// // equality with string
// console.log("testing equality withstring");
// console.log("apple"== "apple");
// // console.log('apple'=='Apple');
// // using the lower  case function
// console.log("Testing with lower case");
// console.log("Apple".toLowerCase()=="apple");
// // numeric test
// console.log("Numeric tests");
// console.log(10 > 5);
// console.log(10 < 5);
// // test using And or operator
// console.log("test with and or");
// console.log(true&&false);
// console.log(true||false);
// // test weather item is an array
// let fruit:string[]=["Apple","Banana","Orange"]
// console.log("Apple is an fruit?");
// console.log(fruit.includes("Apple"));
// // test item not in array
// console.log("is mango not in fruits");
// console.log(!fruit.includes("mango"));;
// 25
// let alien_color = "red";
// if(alien_color == "red"){
//     console.log("you just earned 5$ ");
// }
// if(alien_color == "green"){
// }
// // 26
// let color = "green";
// if(color == "red"){
// console.log("you are fail");
// }else{
//   console.log( "you passed");
// }
// let color = "red";
// if(color == "red"){
// console.log("you will select correct");
// }else{
// console.log("you lost");
// }
// 27
// let color = 'red';
// if(color == "red"){
//     console.log("red is correct");
// }else if(color == "green"){
// console.log("wrong color");
// }else if(color == "yello"){
// console.log("wrong selected");
// }
// let color2 = 'yellow';
// if(color2 == "red"){
//     console.log("red is wrong");
// }else if(color2 == "green"){
// console.log("wrong color");
// }else if(color2 == "yellow"){
// console.log("correct  selected");
// }
// let color1 = 'green';
// if(color1 == "red"){
//     console.log("wrong color");
// }else if(color1 == "green"){
//     console.log("green is correct");
// }else if(color1 == "yello"){
// console.log("wrong selected");
// }
// 28
// let age: number = 25;
// if (age < 2) {
//   console.log("the person is a baby");
// } else if (age < 13) {
//   console.log("this person is a kid");
// } else if (age < 20) {
//   console.log("this person is a teenager");
// } else if (age < 65) {
//   console.log("this person is an adult");
// } else {
//   console.log("this person is an elder");
// }
// // 29
// let favorite_fruits: string[] = ["Apple", "Mango", "Banana"];
// if (favorite_fruits.includes("Apple")) {
//   console.log("you really like Apple");
// }
// if (favorite_fruits.includes("Mango")) {
//   console.log("you really like Mangos");
// }
// 30
// let usernames: string[] = ["Admin", "user1", "user2", "user3", "user4"];
// usernames.forEach((username) => {
//   if (username === "Admin") {
//     console.log("Hello Admin would you like to see a status report");
//   } else {
//     console.log(`HELLO ${username}, THnak you for logging in again.`);
//   }
// });
// 31
// let usernames: string[] = [];
// if (usernames.length === 0) {
//   console.log("we need to find some users!");
// }
// 32
// let currentuser: string[] = ["user1", "user2", "user3"];
// let newuser: string[] = ["admin", "user1", "user","uaua"];
// newuser.forEach((new1) => {
//   if (
//     currentuser.some((current) => current.toLowerCase() === new1.toLowerCase())
//   ) {
//     console.log(`${new1} will need to enter new user`);
//   } else {
//     console.log(`${new1} is avaliable`);
//   }
// });
// // 33
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
// numbers.forEach(f=>{
//   let suffix = "th"
//   if(f === 1){
//     suffix = "st";
//   }else if(f === 2){
//     suffix = "nd";
//   }else if (f === 3){
//     suffix = "rd";
//   }
//   console.log(`${f}${suffix}`);
// })
// 34
// let pizzas: string[] = ["fajita", "pepperoni", "tikka"];
// pizzas.forEach((pizza) => {
//   console.log(`i like ${pizza}`);
// });
// console.log("i really love pizza");
// 35
// let animals: string[] = ["dog", "cat", "rabbit"];
// animals.forEach((animal) => {
//   console.log(`a ${animal} would make a great pet`);
// });
// console.log("Any of these animal would make a great pet");
// 36(function)
// function make_shirt(size: string, message: string) {
//   console.log(
//     `Making a ${size} t shirt with the message "${message}" printed on it`
//   );
// }
// make_shirt("medium","you can do it!")
// 37
// function t_shirt(
//   size: string = "large",
//   message: string = "i love typescript"
// ) {
//   console.log(
//     `making a ${size} shirt wiyh the message"${message} printed on it"`
//   );
// }
// t_shirt()
// t_shirt("medium")
// t_shirt("medium","Dive in ty codding")
// 38
// function cities(city: string, country: string = "pakistan") {
//   console.log(`${city} is in ${country} `);
// }
// cities("karachi");
// cities("lahore");
// cities("Tokyo","japan");
// 39
// function cityAndCountry(city: string, country: string): string {
//   return `${city},${country}`;
// }
// console.log(cityAndCountry("lahore", "pakistan"));
// console.log(cityAndCountry("tokyo", "japan"));
// 40
// function make_album(artist: string, title: string, tracks?: number) {
//   let album = { artist, title,tracks };
//   if (tracks) {
//     album['tracks'] = tracks;
//   }
//   return album;
// }
// console.log(make_album("Artist One", "The First Album"));
// // 41
// // let megicians: string[] = ["alice", "bob", "rmark"];
// function show_magicians(megicians:string[]){
//   megicians.forEach(megician => {
//     console.log(megician);
//   });
// };
// show_magicians(megicians);
// // 42
// function make_great(magicians: string[]) {
//   for (let i = 0; i < magicians.length; i++) {
//       magicians[i] = magicians[i] + " the Great";
//   }
// }
// make_great(megicians); // Modifies the original array
// show_magicians(megicians);
// 43
// let megicians: string[] = ["Alice ", "Bob", "Mark", "David"];
// function make_great(megicians: string[]): string[] {
//   let greatMegicians :string []= [];
//   megicians.forEach(megician => {
//     greatMegicians.push(`${megician} the great`);
//   });
//   return greatMegicians;
// }
// function show_magicians(megicians:string[]){
//     megicians.forEach(megician => {
//       console.log(megician);
//     });
//   }
// let greatMegicians = make_great(megicians); //modify array
// console.log("orignal megicians");
// show_magicians(megicians);
// console.log("modify megicians");
// show_magicians(greatMegicians);
// // 44
// function making_sandwich(...items: string[]) {
//   console.log(`Making a sandwich with:${items.join(",")}.`);
// }
// making_sandwich("katchep", "chees");
// making_sandwich("katchep", "chees", "tomato");
// making_sandwich("katchep", "chees", "tomato","mustard","mayo");
// 45
// function make_car(
//   manufacturer: string,
//   model: string,
//   ...options: [string, any][]
// ): Object {
//   let car :any = { manufacturer, model };
//   options.forEach(([key, value]) => car[key] = value);
//   return car;
// }
// console.log(make_car("Toyota", "Corolla",["color","red"],["year",2020]));
// console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
