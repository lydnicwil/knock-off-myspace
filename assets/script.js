//document.querySelector('#ShowButton').value = "not text";
//$(window).on("load", funcTitle)

$(window).on("load", loadBtns)

function loadBtns () {
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => response.json())
  .then(function(data){
    document.getElementById('button-1').innerHTML = data.name;
    document.getElementById('button-1').title = data.username + ' ' + data.email;});

fetch('https://jsonplaceholder.typicode.com/users/2')
  .then((response) => response.json())
  .then(function(data){
    document.getElementById('button-2').innerHTML = data.name;
    document.getElementById('button-2').title = data.username + ' ' + data.email;});

fetch('https://jsonplaceholder.typicode.com/users/3')
  .then((response) => response.json())
  .then(function(data){
    document.getElementById('button-3').innerHTML = data.name;
    document.getElementById('button-3').title = data.username + ' ' + data.email;});
   
fetch('https://jsonplaceholder.typicode.com/users/4')
  .then((response) => response.json())
  .then(function(data){
    document.getElementById('button-4').innerHTML = data.name;
    document.getElementById('button-4').title = data.username + ' ' + data.email;});

fetch('https://jsonplaceholder.typicode.com/users/5')
  .then((response) => response.json())
  .then(function(data){
    document.getElementById('button-5').innerHTML = data.name;
    document.getElementById('button-5').title = data.username + ' ' + data.email;});
  
fetch('https://jsonplaceholder.typicode.com/users/6')
  .then((response) => response.json())
  .then(function(data){
    document.getElementById('button-6').innerHTML = data.name;
    document.getElementById('button-6').title = data.username + ' ' + data.email;});

fetch('https://jsonplaceholder.typicode.com/users/7')
  .then((response) => response.json())
  .then(function(data){
    document.getElementById('button-7').innerHTML = data.name;
    document.getElementById('button-7').title = data.username + ' ' + data.email;});
     
fetch('https://jsonplaceholder.typicode.com/users/8')
  .then((response) => response.json())
  .then(function(data){
    document.getElementById('button-8').innerHTML = data.name;
    document.getElementById('button-8').title = data.username + ' ' + data.email;});
  
fetch('https://jsonplaceholder.typicode.com/users/9')
  .then((response) => response.json())
  .then(function(data){
    document.getElementById('button-9').innerHTML = data.name;
    document.getElementById('button-9').title = data.username + ' ' + data.email;});
    
fetch('https://jsonplaceholder.typicode.com/users/10')
  .then((response) => response.json())
  .then(function(data){
    document.getElementById('button-10').innerHTML = data.name;
    document.getElementById('button-10').title = data.username + ' ' + data.email;});
//for(let i=1; i>11; i++){
  //if(i=1){
   // btn = document.getElementById("button-1");
   // document.getElementById(btn).innerHTML = "sheep2";}
 // else if(i=2){
 //   btn = document.getElementById("button-2");}
  //else if(i=3){
   // btn = document.getElementById("button-3");}
  //else if(i=4){
  //  btn = document.getElementById("button-4");}
 // else if(i=5){
 //   btn = document.getElementById("button-5");}
 // else if(i=6){
 //   btn = document.getElementById("button-6");}
 // else if(i=7){
  //  btn = document.getElementById("button-7");}
  //else if(i=8){
  //  btn = document.getElementById("button-8");}
  //else if(i=9){
  //  btn = document.getElementById("button-9");}
 // else if(i=10){
  //  btn = document.getElementById("button-10");}
 // });
//}
}

function displayUserInfo(id) {
var idNum = id.toString();
idNum = parseInt(idNum.charAt(idNum.length-1));
}