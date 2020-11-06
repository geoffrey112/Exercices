// Without parameters 1.
function date(){
  let date = new Date();
  return date;
}

document.getElementById("date").innerHTML = date();



// Without parameters 2.
function os(){
  let OS = "OS Inconnu"; 
  if (navigator.appVersion.indexOf("Win")!=-1) OS = "Your operating system is: Windows"; 
  if (navigator.appVersion.indexOf("Mac")!=-1) OS = "Your operating system is: MacOS"; 
  if (navigator.appVersion.indexOf("X11")!=-1) OS = "Your operating system is: Unix"; 
  if (navigator.appVersion.indexOf("Linux")!=-1) OS = "Your operating system is: Linux";
  return OS;
}

document.getElementById("device").innerHTML = os();



// With one parameter 1.











