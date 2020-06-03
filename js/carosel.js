$(window).click(function(e){
	e.preventDefault();
});

var carosel = document.getElementById("carosel-container");
var cW = parseInt($(carosel).css("width"));
var cH = parseInt($(carosel).css("height"));

var leftClick = document.getElementById("left-click");
var lCH = parseInt($(leftClick).css("height"));
var rightClick = document.getElementById("right-click");
var rCH = parseInt($(rightClick).css("height"));

var coverLeft = document.getElementById("cover-left");
var coverRight = document.getElementById("cover-right");

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
		$(leftClick).css("top", ((cH / 2) - (lCH / 2)) + "px");
		$(coverLeft).css("top", ((cH / 2) - (lCH / 2)) + "px");
		$(rightClick).css("top", ((cH / 2) - (rCH / 2)) + "px");
		$(coverRight).css("top", ((cH / 2) - (rCH / 2)) + "px");
	}
	else
	{
		$(carosel).css("height", nH + "px");
		$(moveCont[i]).css("height", nH + "px");
		$(imgCont[i]).css("height", nH + "px");
		$(imgs[i]).css("height", nH + " px");
		var t = (nH / 2) - (nH / 2);
		$(imgs[i]).css("top", t + "px");
		$(leftClick).css("top", ((nH / 2) - (lCH / 2)) + "px");
		$(coverLeft).css("top", ((nH / 2) - (lCH / 2)) + "px");
		$(rightClick).css("top", ((nH / 2) - (rCH / 2)) + "px");
		$(coverRight).css("top", ((nH / 2) - (lCH / 2)) + "px");
	}

	if(leftPos == 0)
	{
		pos[i] = 1;
		$(moveCont[i]).css("z-index", 1000000);
	}
	else if(leftPos == cW)
	{
		pos[i] = 0;
		$(moveCont[i]).css("z-index", 1);
	}
	
	if((i + 1) == imgCont.length)
	{
		pos[i] = 2;
		$(moveCont[i]).css("z-index", 100);
		$(moveCont[i]).css("left", (-1 * cW) + "px");
	}
	else
	{
		$(moveCont[i]).css("left", leftPos + "px");
		leftPos += cW;
	}


}

var roll = null;

var roll = setTimeout(function scroll(){

	for(var i = 0; i < moveCont.length; i++)
	{
		if(pos[i] == 1)
		{
			$(moveCont[i]).css("left", "0px");
		}
		else if(pos[i] == 2)
		{
			$(moveCont[i]).css("left", (-1 * cW) + "px");
		}
		else if(pos[i] == 0)
		{
			$(moveCont[i]).css("left", cW + "px");
		}
	}

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

	$(leftClick).css("top", ((cH / 2) - (lCH / 2)) + "px");
	$(coverLeft).css("top", ((cH / 2) - (lCH / 2)) + "px");
	$(rightClick).css("top", ((cH / 2) - (rCH / 2)) + "px");
	$(coverRight).css("top", ((cH / 2) - (rCH / 2)) + "px");

	smallest = 0;

	for(var i = 0; i < moveCont.length; i++)
	{
		if(pos[i] == 1)
		{
			$(moveCont[i]).css("left", "0px");
		}
		else if(pos[i] == 2)
		{
			$(moveCont[i]).css("left", (-1 * cW) + "px");
		}
		else if(pos[i] == 0)
		{
			$(moveCont[i]).css("left", cW + "px");
		}
	}

	for(var i = 0; i < moveCont.length; i++)
	{
		$(moveCont[i]).css("width", cW + "px");
		$(imgCont[i]).css("width", cW + "px");
		$(imgs[i]).css("width", cW + "px");

		//doesn't work when resized before movement
		//FIX IMEDIATELY


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

$(window).focus(function(){

	clearTimeout(roll);

	console.log("ready");

	console.log("in focus");

	roll = setTimeout(function scroll(){

		for(var i = 0; i < moveCont.length; i++)
		{
			if(pos[i] == 1)
			{
				$(moveCont[i]).css("left", "0px");
			}
			else if(pos[i] == 2)
			{
				$(moveCont[i]).css("left", (-1 * cW) + "px");
			}
			else if(pos[i] == 0)
			{
				$(moveCont[i]).css("left", cW + "px");
			}
		}

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

});

$(window).blur(function(){

	console.log("I'm screaming");

	clearTimeout(roll);

	setTimeout(function(){
		roll = setTimeout(function scroll(){

			for(var i = 0; i < moveCont.length; i++)
			{
				if(pos[i] == 1)
				{
					$(moveCont[i]).css("left", "0px");
				}
				else if(pos[i] == 2)
				{
					$(moveCont[i]).css("left", (-1 * cW) + "px");
				}
				else if(pos[i] == 0)
				{
					$(moveCont[i]).css("left", cW + "px");
				}
			}

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

		}, 1500);
	}, 500);

});

var check;

$(leftClick).click(function(){
	clearTimeout(check);
	clearTimeout(roll);

	$(coverLeft).css("display", "block");
	$(leftClick).css("display", "none");
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

	setTimeout(function()
	{
		$(coverLeft).css("display", "none");
		$(leftClick).css("display", "block");	
	}, 500);

	check = setTimeout(function(){

		roll = setTimeout(function scroll(){

			for(var i = 0; i < moveCont.length; i++)
			{
				if(pos[i] == 1)
				{
					$(moveCont[i]).css("left", "0px");
				}
				else if(pos[i] == 2)
				{
					$(moveCont[i]).css("left", (-1 * cW) + "px");
				}
				else if(pos[i] == 0)
				{
					$(moveCont[i]).css("left", cW + "px");
				}
			}

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

		}, 1300);
	}, 700);
});

$(rightClick).click(function(){
	clearTimeout(check);
	clearTimeout(roll);

	$(coverRight).css("display", "block");
	$(rightClick).css("display", "none");
	for(var i = 0; i < moveCont.length; i++)
	{
		var l = parseInt($(moveCont[i]).css("left")) + cW;
		$(moveCont[i]).css("left", l + "px");

		if(l == 0)
		{
			$(moveCont[i]).css("z-index", 1000000);
			pos[i] = 1;
		}

		if(l >= cW)
		{
			$(moveCont[i]).css("z-index", 100);
			pos[i] = 0;
		}

		if(l == (2 * cW))
		{
			$(moveCont[i]).css("z-index", 1);
			$(moveCont[i]).css("left", (-1 * cW) + "px");
			pos[i] = 2;
		}
	}

	setTimeout(function()
	{
		$(coverRight).css("display", "none");
		$(rightClick).css("display", "block");
	}, 500);

	check = setTimeout(function(){

		roll = setTimeout(function scroll(){

			for(var i = 0; i < moveCont.length; i++)
			{
				if(pos[i] == 1)
				{
					$(moveCont[i]).css("left", "0px");
				}
				else if(pos[i] == 2)
				{
					$(moveCont[i]).css("left", (-1 * cW) + "px");
				}
				else if(pos[i] == 0)
				{
					$(moveCont[i]).css("left", cW + "px");
				}
			}

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

		}, 1300);
	}, 700);
});



