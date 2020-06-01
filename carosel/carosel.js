var carosel = document.getElementById("carosel-container");
var cW = parseInt($(carosel).css("width"));
var cH = parseInt($(carosel).css("height"));
var ogW = cW;
var ogH = cH;

var moveCont = document.getElementsByClassName("move-contain");
var imgCont = document.getElementsByClassName("img-container");
var imgs = document.getElementsByClassName("images");

var pos = [0, 0, 0];
var sizes = [];
var smallest = 0;
var leftPos = 0;

for(var i = 0; i < imgCont.length; i++)
{
	var w = parseInt($(imgs[i]).css("width"));
	var h = parseInt($(imgs[i]).css("height"));

	sizes.push(new Array());
	sizes[i].push(w);
	sizes[i].push(h);

	$(moveCont[i]).css("width", cW + "px");
	$(imgCont[i]).css("width", cW + "px");
	$(imgs[i]).css("width", cW + "px");
	var nH = (h * cW) / w;

	if(i == 0)
	{
		smallest = nH;
	}
	else
	{
		if(nH <= smallest)
		{
			smallest = nH;
		}
	}

	if(cH >= window.innerHeight && nH >= cH)
	{
		$(carosel).css("height", window.innerHeight + "px");
		$(moveCont[i]).css("height", window.innerHeight + "px");
		$(imgCont[i]).css("height", window.innerHeight + "px");
		$(imgs[i]).css("height", nH + " px");
		var t = (window.innerHeight / 2) - (nH / 2);
		$(imgs[i]).css("top", t + "px");
	}
	else
	{
		$(carosel).css("height", nH + "px");
		$(moveCont[i]).css("height", nH + "px");
		$(imgCont[i]).css("height", nH + "px");
		$(imgs[i]).css("height", nH + " px");
		var t = (nH / 2) - (nH / 2);
		$(imgs[i]).css("top", t + "px");
	}

	$(moveCont[i]).css("left", leftPos + "px");
	leftPos += cW;
}

var roll = null;

/*ar roll = setTimeout(function scroll(){

	for(var i = 0; i < moveCont.length; i++)
	{
		var l = parseInt($(moveCont[i]).css("left")) - cW;
		$(moveCont[i]).css("left", l + "px");

		if(l == 0)
		{
			$(moveCont[i]).css("z-index", 1000000);
			pos[i] = 1;
		}

		if(l < 0)
		{
			$(moveCont[i]).css("z-index", 100);
			pos[i] = 2;
		}

		if(l == (-2 * cW))
		{
			$(moveCont[i]).css("z-index", 1);
			$(moveCont[i]).css("left", cW + "px");
			pos[i] = 0;
		}
	}

	roll = setTimeout(scroll, 2000);

}, 2000);*/

var roll = setTimeout(function scroll(){

	for(var i = 0; i < moveCont.length; i++)
	{
		var l = parseInt($(moveCont[i]).css("left")) - cW;
		$(moveCont[i]).css("left", l + "px");

		if(l == 0)
		{
			$(moveCont[i]).css("z-index", 1000000);
			pos[i] = 1;
		}

		if(l < 0)
		{
			$(moveCont[i]).css("z-index", 100);
			pos[i] = 2;
		}

		if(l == (-2 * cW))
		{
			$(moveCont[i]).css("z-index", 1);
			$(moveCont[i]).css("left", cW + "px");
			pos[i] = 0;
		}
	}

	roll = setTimeout(scroll, 2000);

}, 2000);

var rtime;
var timeout = false;
var delta = 200;
$(window).resize(function(){

	clearTimeout(roll);
	rtime = new Date();
	if(timeout === false) 
	{
		timeout = true;
		setTimeout(resizeend, delta);
	}

	console.log(pos);

	cW = window.innerWidth;
	cH = parseInt($(carosel).css("height"));

	smallest = 0;

	for(var i = 0; i < moveCont.length; i++)
	{
		$(moveCont[i]).css("width", cW + "px");
		$(imgCont[i]).css("width", cW + "px");
		$(imgs[i]).css("width", cW + "px");

		if(pos[i] == 1)
		{
			$(moveCont[i]).css("left", "0px");
		}
		else if(pos[i] == 2)
		{
			$(moveCont[i]).css("left", (-1 * cW) + "px");
		}
		else
		{
			$(moveCont[i]).css("left", cW + "px");
		}

		//doesn't work when resized before movement


		var nH = (sizes[i][1] * cW) / sizes[i][0];

		if(i == 0)
		{
			smallest = nH;
		}
		else
		{
			if(nH <= smallest)
			{
				smallest = nH;
			}
		}

		if(cH >= window.innerHeight && nH >= cH)
		{
			$(carosel).css("height", window.innerHeight + "px");
			$(moveCont[i]).css("height", window.innerHeight + "px");
			$(imgCont[i]).css("height", window.innerHeight + "px");
			$(imgs[i]).css("height", nH + " px");
			var t = (window.innerHeight / 2) - (nH / 2);
			$(imgs[i]).css("top", t + "px");
		}
		else
		{
			$(carosel).css("height", nH + "px");
			$(moveCont[i]).css("height", nH + "px");
			$(imgCont[i]).css("height", nH + "px");
			$(imgs[i]).css("height", nH + " px");
			var t = (nH / 2) - (nH / 2);
			$(imgs[i]).css("top", t + "px");
		}
	}

});

function resizeend() 
{
	if(new Date() - rtime < delta)
	{
		setTimeout(resizeend, delta);
	}
	else
	{
		timeout = false;
		console.log("done resizing");
		roll = setTimeout(function scroll(){

			for(var i = 0; i < moveCont.length; i++)
			{
				var l = parseInt($(moveCont[i]).css("left")) - cW;
				$(moveCont[i]).css("left", l + "px");

				if(l == 0)
				{
					$(moveCont[i]).css("z-index", 1000000);
					pos[i] = 1;
				}

				if(l < 0)
				{
					$(moveCont[i]).css("z-index", 100);
					pos[i] = 2;
				}

				if(l == (-2 * cW))
				{
					$(moveCont[i]).css("z-index", 1);
					$(moveCont[i]).css("left", cW + "px");
					pos[i] = 0;
				}
			}

			roll = setTimeout(scroll, 2000);

		}, 2000);
	}
}


/*$(window).resize(function(){

	var cW = parseInt($(carosel).css("width"));
	var cH = parseInt($(carosel).css("height"));

	var smallest = 0;

	for(var i = 0; i < carosel.childNodes.length; i++)
	{
		$(carosel.childNodes[i]).css("width", cW + "px");

		var nH = (sizes[i][1] * cW) / sizes[i][0];

		if(i == 0)
		{
			smallest = nH;
		}
		else
		{
			if(nH < smallest)
			{
				smallest = nH;
			}
		}

		if(cH >= window.innenHeight && nH >= cH)
		{
			$(carosel).css("height", window.innenHeight + "px");
			$(imgCont[i]).css("height", window.innenHeight + "px");
			$(carosel.childNodes[i]).css("height", nH + "px");
			smallest = window.innenHeight;
		}
		else
		{
			$(carosel).css("height", smallest + "px");
			$(imgCont[i]).css("height", smallest + "px");
			$(img[i]).css("height", nH + "px");
		}

	}

	carosel.style.height = smallest + "px";

	for(var i = 0; i < imgCont.length; i++)
	{
		imgCont[i].style.height = smallest + "px";
		var h = parseInt($(imgs[i]).css("height"));
		var t = (smallest / 2) - (h / 2);
		imgs[i].style.top = t + "px";
	}

});*/

/*var carosel = document.getElementById("carosel-container");
var cW = parseInt($(carosel).css("width"));
var cH = parseInt($(carosel).css("height"));

var sizes = [];

console.log(carosel.childNodes);

var c = 0;

for(var i = 0; i <= carosel.childNodes.length; i+=2)
{
	carosel.removeChild(carosel.childNodes[c]);
	c++;
}

console.log(carosel.childNodes);

for(var i = 0; i < carosel.childNodes.length; i++)
{
	var ogW = parseInt($(carosel.childNodes[i]).css("width"));
	var ogH = parseInt($(carosel.childNodes[i]).css("height"));
	sizes.push(new Array());
	sizes[i].push(ogW);
	sizes[i].push(ogH);
	$(carosel.childNodes[i]).css("width", cW + "px");

	var nH = (ogH * cW) / ogW;

	console.log(nH);
	console.log(cH);

	if(nH < cH)
	{
		console.log("less than");
		$(carosel.childNodes[i]).css("height", nH + "px");
		$(carosel).css("height", nH + "px");
	}
	else
	{
		$(carosel.childNodes[i]).css("height", nH + "px");
	}
}

$(window).resize(function(){

	var cW = parseInt($(carosel).css("width"));
	var cH = parseInt($(carosel).css("height"));

	for(var i = 0; i < carosel.childNodes.length; i++)
	{
		$(carosel.childNodes[i]).css("width", cW + "px");

		var nH = (sizes[i][1] * cW) / sizes[i][0];

		if(cH >= window.innenHeight && nH >= cH)
		{
			$(carosel).css("height", window.innenHeight + "px");
			$(carosel.childNodes[i]).css("height", nH + "px");
		}
		else
		{
			$(carosel.childNodes[i]).css("height", nH + "px");
			$(carosel).css("height", nH + "px");
		}

	}

});*/