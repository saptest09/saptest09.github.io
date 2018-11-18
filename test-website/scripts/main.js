// image change

var image = document.querySelector("img");

image.onclick = function(){

if(image.getAttribute("src")=="images/firefox.jpg"){
image.setAttribute("src","images/firefox2.jpg")
}
else{
image.setAttribute("src","images/firefox.jpg");

}
}

//personalized user name

var button = document.querySelector("button");
var heading = document.querySelector("h1");

if(!localStorage.getItem("name")){
setUserName();
}
else{
  heading.textContent = localStorage.getItem("name");
}

function setUserName(){
var name = prompt("please enter your name");
localStorage.setItem("name",name);
heading.textContent = name;

}

button.onclick = setUserName;
