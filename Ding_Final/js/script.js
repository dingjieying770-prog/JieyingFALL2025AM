var myVar = setInterval(myTimer ,1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  var footerElement = document.querySelector("footer p");

  if (footerElement) {
    footerElement.innerHTML = "© 2025 Jieying Ding | Current Time: " + t;
  }
}



var i = 0;
var txt = 'Welcome to my Summer Vacation Adventure!'; 
var speed = 100; 

function typeWriter() {
  if (i < txt.length) {
    
    document.getElementById("typewriter-text").innerHTML += txt.charAt(i);
    i++;
   
    setTimeout(typeWriter, speed);
  }
}


window.onload = function() {
  typeWriter();
};