//document.querySelector('#ShowButton').value = "not text";
//$(window).on("load", funcTitle)

var idNum = '';
var postsHidden = 'false';
var albumsHidden = false;

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
}

function displayUserInfo(id) {
idNum = id.toString();
idNum = parseInt(idNum.charAt(idNum.length-1));

fetch('https://jsonplaceholder.typicode.com/users/' + idNum)
  .then((response) => response.json())
  .then(function(data){
    document.getElementById('current-name').innerHTML = ' ' + data.name;
    document.getElementById('current-email').innerHTML = ' ' + data.email;
    document.getElementById('current-website').innerHTML = ' ' + data.website;
    document.getElementById('current-phone').innerHTML = ' ' + data.phone;
});

fetch('https://jsonplaceholder.typicode.com/users/' + idNum + '/posts')
  .then((response) => response.json())
  .then(function(data){
    document.getElementById('current-post-1').innerHTML = ' ' + data[0].body;
    document.getElementById('current-post-2').innerHTML = ' ' + data[1].body;
    document.getElementById('current-post-3').innerHTML = ' ' + data[2].body;
    document.getElementById('current-post-4').innerHTML = ' ' + data[3].body;
    document.getElementById('current-post-5').innerHTML = ' ' + data[4].body;
});

fetch('https://jsonplaceholder.typicode.com/users/' + idNum + '/albums')
  .then((response) => response.json())
  .then(function(data){
    document.getElementById('current-album-1').innerHTML = ' ' + data[0].title;
    document.getElementById('current-album-2').innerHTML = ' ' + data[1].title;
    document.getElementById('current-album-3').innerHTML = ' ' + data[2].title;
    document.getElementById('current-album-4').innerHTML = ' ' + data[3].title;
    document.getElementById('current-album-5').innerHTML = ' ' + data[4].title;
    document.getElementById('current-album-6').innerHTML = ' ' + data[5].title;
    document.getElementById('current-album-7').innerHTML = ' ' + data[6].title;
    document.getElementById('current-album-8').innerHTML = ' ' + data[7].title;
    document.getElementById('current-album-9').innerHTML = ' ' + data[8].title;
    document.getElementById('current-album-10').innerHTML = ' ' + data[9].title;
});
}

function displayPosts() {
        if(postsHidden){
            document.getElementById("#posts-content").style.display = "";
            postsHidden = 'false';}
        else{
            document.getElementById("#posts-content").style.display = "none";
            postsHidden = 'true';}
}

function displayAlbums() {
    if(albumsHidden){
        document.getElementById("#albums-content").style.display = "";
        postsHidden = 'false';}
    else{
        document.getElementById("#albums-content").style.display = "none";
        postsHidden = 'true';}
}