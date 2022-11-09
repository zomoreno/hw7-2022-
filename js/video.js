var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	document.querySelector("#volume").innerHTML = video.volume*100+"%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down Video")
	video.playbackRate = 0.5;
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video")
	video.playbackRate = 2;
});