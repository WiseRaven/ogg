// Create a new player with the constructor
var player = new OGVPlayer();

// Now treat it just like a video or audio element
document.body.appendChild(player);
player.src = '1513414415_BopB.ogg';
//player.play();
player.addEventListener('ended', function() {
    console.log('asd')
});