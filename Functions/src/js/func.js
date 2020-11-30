// Without parameters 
// 1.
function myDate(){
  let day = new Date().getDay();
  
  // Note: Sunday is 0, Monday is 1, etc..
  switch(day){
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
    break;
    case 2:
      day = "Tuesday";
    break;
    case 3:
      day = "Wednesday";
    break;
    case 4:
      day = "Thursday"
    break;
    case 5:
      day = "Friday";
    break;
    default:
      day = "Saturday";
  }

  const date = new Date().getDate();
  let month = new Date().getMonth();
  switch(month){
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
    break;
    case 2 :
      month = "March";
    break;
    case 3:
      month = "April";
    break;
    case 4:
      month = "May";
    break;
    case 5:
      month = "June";
    break;
    case 6:
      month = "July";
    break;
    case 7:
      month = "August";
    break;
    case 8:
      month = "September";
    break;
    case 9:
      month = "October";
    break;
    case 10:
      month = "November";
    break;
    case 11:
      month = "December";
    break;
  }

  const years = new Date().getFullYear();
  let hours = new Date().getHours();
  let amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutes = new Date().getMinutes();

  return `${day} ${date} ${month} ${years}, ${hours}:${minutes} ${amPm}`;
}

document.getElementById("date").innerHTML = myDate();



// 2.
function myOs(){
  let OS = "OS Inconnu"; 
  if (navigator.appVersion.indexOf("Win")!=-1) OS = "Your operating system is: Windows"; 
  if (navigator.appVersion.indexOf("Mac")!=-1) OS = "Your operating system is: MacOS"; 
  if (navigator.appVersion.indexOf("X11")!=-1) OS = "Your operating system is: Unix"; 
  if (navigator.appVersion.indexOf("Linux")!=-1) OS = "Your operating system is: Linux";

  return OS;
}

document.getElementById("device").innerHTML = myOs();


////////////////////////////////////


// With one parameter 
// 1.

let button1 = document.getElementById("checkNumber");
let input1 = document.getElementById("checkNumberInput");
let invalidChars = ["e", "E", "+", ",", "."];

input1.addEventListener('keydown', function(chars){
  if (invalidChars.includes(chars.key)) {
    chars.preventDefault();
  }
});

button1.addEventListener('click', function(nb){
  nb = document.getElementById("checkNumberInput").value;
  let answer = document.getElementById("checkNb").innerHTML = nb % 2 == false;
});



// 2.
function returnPI(nb){
  return Math.PI.toFixed(nb);
}

document.getElementById("pi").innerHTML = returnPI(2);



// 3.
let button3 = document.getElementById("reverseButton");
button3.addEventListener('click', function(input){
  input = document.getElementById("inputReverse").value;
  let answer = document.getElementById("reverse").innerHTML = input.split("").reverse().join("");
});



// 4.
let button4 = document.getElementById("checkLength");
button4.addEventListener('click', function(string){
  string = document.getElementById("inputLength").value;
  let answer = document.getElementById("length").innerHTML = string.length;
});



// 5.
let button5 = document.getElementById("lengthArray");
button5.addEventListener('click', function(array){
  array = document.getElementById("inputArray").value.split(/[,]/g);
  let answer = document.getElementById("array").innerHTML = array.length;
  console.log(array);
});



// 6
let button6 = document.getElementById("ArrayString");
button6.addEventListener('click', function(string){
  string = document.getElementById("inputString").value;
  let answer = document.getElementById("arrayString").innerHTML = string.split(" ");
});



// 7.
function returnObject(string){
  return new String(string).split(" ");
}

document.getElementById("object").innerHTML = `${returnObject("Hello world!")} (Type is: ${typeof returnObject()})`;


////////////////////////////////////// 


// With two parameters
// 1.
function checkString(string1, string2){
  return string1.includes(string2);
}

document.getElementById("checkString").innerHTML = checkString("Hello world!", "world");



// 2.
function removeSec(string1, string2){
  return string1.replace(string2, "");
}

document.getElementById("remove").innerHTML = removeSec("Hello world !", "world");



// 3.
function order(array, string){
  return array.sort() + string;
}

document.getElementById("order").innerHTML = `${order(["betrave ", "concombre ", "abricot "], "Ascending")}`;





// let button = document.getElementById("buttonTest");
// button.addEventListener('click', function(){
//   let input = document.getElementById("inputTest").value;
//   console.log(input);
// });

// let button = document.getElementById("buttonTest");
// button.addEventListener('click', function(){
//   let input = document.getElementById("inputTest").value;
//   alert(input);
//   document.getElementById("p").innerHTML = input;
// });