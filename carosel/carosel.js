var carContain = document.getElementById("carosel-container");
var carW = $(carContain).css("width");
var carH = $(carContain).css("height");


var backImg = ["doom.jpg", "nu.jpg"];

var imgOne = document.createElement("DIV");
var imgTwo = document.createElement("DIV");

//image one
imgOne.id = "doom";
imgOne.style.width = carW;
imgOne.style.height = carH;
imgOne.style.position = "absolute";
imgOne.style.top = "0px";
imgOne.style.left = "0px";
imgOne.style.transitionProperty = "left";
imgOne.style.transitionDuration = "0.5s";
imgOne.style.transitionTimingFunction = "linear";
imgOne.style.backgroundImage = "url('" + backImg[0] + "')";
imgOne.style.backgroundSize = "cover";
imgOne.style.backgroundRepeat = "no-repeat";
imgOne.style.backgroundColor = "#000";
imgOne.style.backgroundPosition = "center";

//image two
imgTwo.id = "nu";
imgTwo.style.width = carW;
imgTwo.style.height = carH;
imgTwo.style.position = "absolute";
imgTwo.style.top = "0px";
imgTwo.style.left = carW;
imgTwo.style.transitionProperty = "left";
imgTwo.style.transitionDuration = "0.5s";
imgTwo.style.transitionTimingFunction = "linear";
imgTwo.style.backgroundImage = "url('" + backImg[1] + "')";
imgTwo.style.backgroundSize = "cover";
imgTwo.style.backgroundRepeat = "no-repeat";
imgTwo.style.backgroundColor = "#000";
imgTwo.style.backgroundPosition = "center";

carContain.appendChild(imgOne);
carContain.appendChild(imgTwo);

console.log(carContain.childNodes[0].id);

setTimeout(function car(){

	var firstNode = carContain.childNodes[0];

	var test = document.createElement("DIV");

	test.style.width = carW;
	test.style.height = carH;
	test.style.position = "absolute";
	test.style.top = "0px";
	test.style.left = (2 * parseInt(carW)) + "px";
	test.style.transitionProperty = "left";
	test.style.transitionDuration = "0.5s";
	test.style.transitionTimingFunction = "linear";
	test.style.backgroundSize = "cover";
	test.style.backgroundRepeat = "no-repeat";
	test.style.backgroundColor = "#000";
	test.style.backgroundPosition = "center";

	if(parseInt($(firstNode).css("left")) == 0)
	{
		console.log("This ran");
		if(firstNode.id == "doom")
		{
			test.id = "doom";
			test.style.backgroundImage = "url('" + backImg[0] + "')";
			carContain.appendChild(test);
		}
		else
		{
			test.id = "nu";
			test.style.backgroundImage = "url('" + backImg[1] + "')";
			carContain.appendChild(test);
		}
	}
	else if(parseInt($(firstNode).css("left")) < 0)
	{
		carContain.removeChild(carContain.childNodes[0]);
		firstNode = carContain.childNodes[0];
		console.log("Next run");
		if(firstNode.id == "doom")
		{
			test.id = "doom";
			test.style.backgroundImage = "url('" + backImg[0] + "')";
			carContain.appendChild(test);
		}
		else
		{
			test.id = "nu";
			test.style.backgroundImage = "url('" + backImg[1] + "')";
			carContain.appendChild(test);
		}
	}

	var w = parseInt(carW);

	for(var i = 0; i < carContain.childNodes.length; i++)
	{
		var cl = parseInt($(carContain.childNodes[i]).css("left"));
		cl -= w;
		carContain.childNodes[i].style.left = cl + "px";
	}

	setTimeout(car, 2500);

}, 2000);
