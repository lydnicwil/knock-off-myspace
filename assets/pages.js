
$(window).on("load", openAlbum)
function openAlbum(num) {
    fetch('https://jsonplaceholder.typicode.com/albums/' + 7 + '/photos')
    .then((response) => response.json())
    .then(function(data){
        for(let i = 0; i < 50; i++){
        //var img = document.createElement('img');
        //img.src= data.url;
        //document.getElementById('body').appendChild(img);
        var currentUrl = data[i].url;
        $('#photos-displayed').append('<img src= ' + currentUrl + '/>'); }
    });
}
