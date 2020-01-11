var pic=[
"photos/a (29).jpg",
"photos/a (40).jpg",
"photos/a (41).jpg",
"photos/a (42).jpg",
"photos/a (12).jpg"
];

var p=0;
function aside(){
			document.getElementById('first').src=pic[p]
	if (p<(pic.length-1)){
		p++
	}
		else{
			p=0
		}
}
setInterval(aside,2000);

var images=[
"photos/a (6).jpg",
"photos/a (7).jpg",
"photos/a (8).jpg",
"photos/a (9).jpg",
"photos/a (11).jpg",
"photos/a (14).jpg",
"photos/a (15).jpg",
"photos/a (16).jpg",
"photos/a (17).jpg",
"photos/a (18).jpg",
"photos/a (19).jpg",
];

var r=0;
function slide(){
			document.getElementById('main1').src=images[r]
	if (r<(images.length-1)){
		r++
	}
		else{
			r=0
		}
}
setInterval(slid,2000);

var picture=[
"photos/a (18).jpg",
"photos/a (7).jpg",
"photos/a (19).jpg",
"photos/a (9).jpg",
"photos/a (14).jpg",
"photos/a (17).jpg",
"photos/a (15).jpg",
"photos/a (11).jpg",
"photos/a (8).jpg",
"photos/a (16).jpg",
"photos/a (19).jpg",
];

var z=0;
function slid(){
			document.getElementById('main2').src=picture[z]
	if (z<(picture.length-1)){
		z++
	}
		else{
			z=0
		}
}
setInterval(slid,2000);


var image=[
"photos/a (11).jpg",
"photos/a (8).jpg",
"photos/a (19).jpg",
"photos/a (9).jpg",
"photos/a (14).jpg",
"photos/a (17).jpg",
"photos/a (18).jpg",
"photos/a (11).jpg",
"photos/a (7).jpg",
"photos/a (15).jpg",
"photos/a (16).jpg",
];

var o=0;
function slider(){
			document.getElementById('main3').src=image[o]
	if (o<(image.length-1)){
		o++;
	}
		else{
			o=0;
		}
}
setInterval(slider,2000);

function setNewImage(){
	document.getElementById('img1').src="photos/a (17).jpg";
}

function setOldImage(){
	document.getElementById('img1').src="photos/a (19).jpg";
}

// sliderstartfromhere

var bannerstatus = 1;
var bannerTimer = 3000;

window.onload= function(){
	bannerloop();
}
var startBannerLoop = setInterval(function(){
	bannerloop();
}, bannerTimer);

// mouse enter mouseleave
document.getElementById('main-banner').onmouseenter = function(){
	clearInterval(startBannerLoop);
}

document.getElementById('main-banner').onmouseleave = function(){
	startBannerLoop = setInterval(function(){
	bannerloop();
},bannerTimer);
}

// for arrow key
document.getElementById('imgbanbtn-prev').onclick= function(){
	if (bannerstatus ==1) {
		bannerstatus=2;
	}
	else if (bannerstatus==2){
		bannerstatus=3;
	}
	else if (bannerstatus==3){
		bannerstatus =1;
	}
	bannerloop();
}
document.getElementById('imgbanbtn-next').onclick=function(){
	bannerloop();
}

function bannerloop(){
	if (bannerstatus == 1) {
		document.getElementById('imgbtn2').style.opacity="0";
		setTimeout(function(){
			document.getElementById('imgbtn1').style.right="0";
			document.getElementById('imgbtn1').style.zIndex="1000";
			document.getElementById('imgbtn2').style.right="100%";
			document.getElementById('imgbtn2').style.zIndex="1500";
			document.getElementById('imgbtn3').style.right="100%";
			document.getElementById('imgbtn3').style.zIndex="500";

		}, 500);
		setTimeout(function(){
			document.getElementById('imgbtn2').style.opacity="1";
		}, 1000);

		bannerstatus=2;
	}
	else if (bannerstatus==2){
		document.getElementById('imgbtn3').style.opacity ="0";
		setTimeout(function(){
			document.getElementById('imgbtn2').style.right="0";
			document.getElementById('imgbtn2').style.zIndex="1000";
			document.getElementById('imgbtn3').style.right="100%";
			document.getElementById('imgbtn3').style.zIndex="1500";
			document.getElementById('imgbtn1').style.right="100%";
			document.getElementById('imgbtn1').style.zIndex="500";
		}, 500);
		setTimeout(function(){
			document.getElementById('imgbtn3').style.opacity="1";
		}, 1000);
		bannerstatus=3;
	}
	else if (bannerstatus==3){
		document.getElementById('imgbtn1').style.opacity ="0";
		setTimeout(function(){
			document.getElementById('imgbtn3').style.right="0";
			document.getElementById('imgbtn3').style.zIndex="1000";
			document.getElementById('imgbtn1').style.right="100%";
			document.getElementById('imgbtn1').style.zIndex="1500";
			document.getElementById('imgbtn2').style.right="100%";
			document.getElementById('imgbtn2').style.zIndex="500";
		}, 500);
		setTimeout(function(){
			document.getElementById('imgbtn1').style.opacity="1";
		}, 1000);
		bannerstatus=1;
	}
}
