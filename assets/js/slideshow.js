window.setInterval(function(){
slideshow();
}, 1000);

var imgCount = 0;
var dir = 'assets/img/';
var images = ['banner1.png', 'banner2.png', 'banner3.png','banner4.png'];

function slideshow() {
	document.getElementById('banner').setAttribute("style", "background-image: url(" + dir + images[imgCount] + ");");
	imgCount++;
	if(imgCount >= 4){
		imgCount = 0;
	}

}
