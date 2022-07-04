let parkWalkStr = "I can walk in the park all day!";
console.log(parkWalkStr.slice(18, 22));

let helloStr = "Hello World";
let helloStrUp = helloStr.toUpperCase();
console.log(helloStrUp);

let earthlingsStr = "Hello Earthling";
let earthlingsStrLow = earthlingsStr.toLowerCase();
console.log(earthlingsStrLow);

let jsStr = "JavaScript";
// let jsStrSlice = jsStr.slice(3, 6);
console.log(jsStr.slice(3, 6));

let niceShoesStr = "nice shoes";
console.log(niceShoesStr.indexOf("l"));
console.log(niceShoesStr.indexOf("n"));

let oldStr = "Word";
let first = oldStr[0];
let newStr = first + oldStr + first;
console.log(newStr);

let scritcherStr = "Three";
let lastThreeChars = scritcherStr.slice(-3);
console.log(lastThreeChars + scritcherStr + lastThreeChars);

let boogieNightsStr = "Two";
let start = boogieNightsStr[0];
let end = boogieNightsStr[2];
let middle = boogieNightsStr.slice(1, 2);
console.log(end + middle + start);

let firstName = "First";
let city = "Rome";
let job = "driver";
console.log(
  "My name is " + firstName + ". I live in " + city + " and I am a " + job
);
