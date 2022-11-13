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
	var video = document.querySelector("#player1")
	video.playbackRate *= .9;
	console.log("video speed is " + videolplaybackRate)
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video")
	var video = document.querySelector("#player1")
	video.playbackRate /= .9;
	console.log("video speed is " + videolplaybackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip to Video")
	var video = document.querySelector("#player1");
	video.currentTime += 10;
	console.log("current time is " + video.currentTime)
	video.onended = function() {
		alert("The video has ended");
		video.currentTime = 0;
	}
});
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video")
	if(video.muted == true){
		console.log("Unmute")
		video.muted = false
		this.innerHTML = "Mute"
	}
	else{
		console.log("Mute")
		video.muted = true
		this.innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("click", function(){
	console.log("The current value is ", this.value)
	video.volume = this.value/100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});
// document.querySelector("#skip").addEventListener("click", function() {
// 	console.log("Skip to Video")
// 	var video = document.getElementById("myVideo");
// 	video.onended = function() {
//     alert("The video has ended");
// 	}
// });
