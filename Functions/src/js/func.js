// Without parameters 
// 1.
function date(){
  let date = new Date();
  return date;
}

document.getElementById("date").innerHTML = date();



// 2.
function os(){
  let OS = "OS Inconnu"; 
  if (navigator.appVersion.indexOf("Win")!=-1) OS = "Your operating system is: Windows"; 
  if (navigator.appVersion.indexOf("Mac")!=-1) OS = "Your operating system is: MacOS"; 
  if (navigator.appVersion.indexOf("X11")!=-1) OS = "Your operating system is: Unix"; 
  if (navigator.appVersion.indexOf("Linux")!=-1) OS = "Your operating system is: Linux";
  return OS;
}

document.getElementById("device").innerHTML = os();


////////////////////////////////////


// With one parameter 
// 1.
function checkNb(nb){
  return nb % 2 == false;
}

document.getElementById("checkNb").innerHTML = checkNb(0);



// 2.
function pi(nb){
  let pi = Math.PI;
  let virgule = pi.toFixed(nb);
  return virgule;

  // return Math.PI.toFixed(nb); // Other answer
}

document.getElementById("pi").innerHTML = pi(2);



// 3.
function reverse(string){
  let splitString = string.split(""); 
  let reverseString = splitString.reverse(); // First answer
  let joinString = reverseString.join(""); 
  return joinString;

  // string = string.split(""); 
  // string = string.reverse(); // Second answer found
  // string = string.join("");
  // return string;


  // return string.split("").reverse().join(""); //Other smaller answer seen on internet 

  // But what is the best answer?
}

document.getElementById("reverse").innerHTML = reverse("Hello world!");



// 4.
function length(string){
  return string.length;
}

document.getElementById("lenght").innerHTML = length("Hello world!");



// 5.
function lengthArray(string){
  return string.length;
}

document.getElementById("array").innerHTML = lengthArray(["M4 ", "G18 ", "AWP"]);



// 6
function returnArray(string){
  return string.split(" ");
}

document.getElementById("returnArray").innerHTML = returnArray("Hello world!");



// 7.
function object(string){
  return new String(string).split(" ");
}

document.getElementById("object").innerHTML = `${object("Hello world!")} (Type is: ${typeof object()})`;



// With two parameters
// 1.















