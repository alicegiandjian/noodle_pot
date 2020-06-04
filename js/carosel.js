//----------------------------
//Javascript global variables
var carosel = document.getElementById("carosel-container");
var cW;
var cH;
var ogcH = (50 * 16); //50em
var roll;
var stall;

var coverLeft = document.getElementById("cover-left");
var leftClick = document.getElementById("left-click");
var coverRight = document.getElementById("cover-right");
var rightClick = document.getElementById("right-click");

var lCH = parseInt($(leftClick).css("height"));

var moveCont = document.getElementsByClassName("move-contain");
var imgCont = document.getElementsByClassName("img-container");
var imgs = document.getElementsByClassName("images");

var sizes = new Array();
var pos = new Array();

//if 0 = load, if 1 = resize, if 2 = blur, if 3 = focus
var instance = 0; 

//for resizing
var rtime;
var timeout = false;
var delta = 200;

//----------------------------



//----------------------------
//Javascript Methods

function resizeend()
{
	if(new Date() - rtime < delta)
	{
		setTimeout(resizeend, delta);
	}
	else
	{
		timeout = false;
		if(instance != 2){
			console.log("done resizing");
			clearTimeout(stall);
			clearTimeout(roll);
			stall = setTimeout(function(){
				console.log("hello from resize");
				roll = setTimeout(function scroll(){

					$(leftClick).css("display", "none");
					$(rightClick).css("display", "none");
					$(coverLeft).css("display", "block");
					$(coverRight).css("display", "block");

					cW = parseInt($(carosel).css("width"));

					var posC = 0;

					for(var i = 0; i < pos.length; i++)
					{
						if(pos[i] == -1)
						{
							$(moveCont[i]).css("left", (-1 * cW) + "px");
						}
						else
						{
							$(moveCont[i]).css("left", posC + "px");
							posC += cW;
						}
					}

					for(var i = 0; i < moveCont.length; i++)
					{
						var curL = parseInt($(moveCont[i]).css("left")) - cW;

						if(curL == 0)
						{
							pos[i] = 0;
							$(moveCont[i]).css("z-index", 10000000);
							$(moveCont[i]).css("left", curL + "px");
						}
						else if(curL < 0)
						{
							if(curL == (-2 * cW))
							{
								console.log("maybe");
								pos[i] = 1;
								$(moveCont[i]).css("z-index", 1);
								$(moveCont[i]).css("left", cW + "px");
							}
							else
							{
								pos[i] = -1;
								$(moveCont[i]).css("z-index", 1000);
								$(moveCont[i]).css("left", curL + "px");
							}
						}
						
					}

					setTimeout(function(){
						$(leftClick).css("display", "block");
						$(rightClick).css("display", "block");
						$(coverLeft).css("display", "none");
						$(coverRight).css("display", "none");
					}, 500);

					console.log(pos);
					roll = setTimeout(scroll, 5000);

				}, 4500);
			}, 200);	
		}
	}
}

//----------------------------


//----------------------------
//Javascript actions

if(document.hidden)
{
	console.log("Hello from hidden");
}

document.addEventListener("visibilitychange", function(){

	//console.log(document.visibilityState);

	if(document.visibilityState == "hidden")
	{
		clearTimeout(stall);
		clearTimeout(roll);
		console.log("Hidden");
	}

	if(document.visibilityState == "visible")
	{
		console.log("visible");
		stall = setTimeout(function(){
			console.log("hello from visibility");
			roll = setTimeout(function scroll(){

				$(leftClick).css("display", "none");
				$(rightClick).css("display", "none");
				$(coverLeft).css("display", "block");
				$(coverRight).css("display", "block");

				cW = parseInt($(carosel).css("width"));

				var posC = 0;

				for(var i = 0; i < pos.length; i++)
				{
					if(pos[i] == -1)
					{
						$(moveCont[i]).css("left", (-1 * cW) + "px");
					}
					else
					{
						$(moveCont[i]).css("left", posC + "px");
						posC += cW;
					}
				}

				for(var i = 0; i < moveCont.length; i++)
				{
					var curL = parseInt($(moveCont[i]).css("left")) - cW;

					if(curL == 0)
					{
						pos[i] = 0;
						$(moveCont[i]).css("z-index", 10000000);
						$(moveCont[i]).css("left", curL + "px");
					}
					else if(curL < 0)
					{
						if(curL == (-2 * cW))
						{
							console.log("maybe");
							pos[i] = 1;
							$(moveCont[i]).css("z-index", 1);
							$(moveCont[i]).css("left", cW + "px");
						}
						else
						{
							pos[i] = -1;
							$(moveCont[i]).css("z-index", 1000);
							$(moveCont[i]).css("left", curL + "px");
						}
					}
						
				}

				setTimeout(function(){
					$(leftClick).css("display", "block");
					$(rightClick).css("display", "block");
					$(coverLeft).css("display", "none");
					$(coverRight).css("display", "none");
				}, 500);

				console.log(pos);
				roll = setTimeout(scroll, 5000);

			}, 4500);
		}, 200);
	}
});

/*$(window).focus(function(){

	if(instance != 0)
	{
		clearTimeout(stall);
		instance = 3;
		clearTimeout(roll);
		stall = setTimeout(function(){
			console.log("hello from focus");
			roll = setTimeout(function scroll(){

				$(leftClick).css("display", "none");
				$(rightClick).css("display", "none");
				$(coverLeft).css("display", "block");
				$(coverRight).css("display", "block");

				console.log("This is a test from focus");

				cW = parseInt($(carosel).css("width"));

					var posC = 0;

					for(var i = 0; i < pos.length; i++)
					{
						if(pos[i] == -1)
						{
							$(moveCont[i]).css("left", (-1 * cW) + "px");
						}
						else
						{
							$(moveCont[i]).css("left", posC + "px");
							posC += cW;
						}
					}

					for(var i = 0; i < moveCont.length; i++)
					{
						var curL = parseInt($(moveCont[i]).css("left")) - cW;

						if(curL == 0)
						{
							pos[i] = 0;
							$(moveCont[i]).css("z-index", 10000000);
							$(moveCont[i]).css("left", curL + "px");
						}
						else if(curL < 0)
						{
							if(curL == (-2 * cW))
							{
								console.log("maybe");
								pos[i] = 1;
								$(moveCont[i]).css("z-index", 1);
								$(moveCont[i]).css("left", cW + "px");
							}
							else
							{
								pos[i] = -1;
								$(moveCont[i]).css("z-index", 1000);
								$(moveCont[i]).css("left", curL + "px");
							}
						}
						
					}


					setTimeout(function(){
						$(leftClick).css("display", "block");
						$(rightClick).css("display", "block");
						$(coverLeft).css("display", "none");
						$(coverRight).css("display", "none");
					}, 500);

					console.log(pos);
					roll = setTimeout(scroll, 5000);

			}, 4500);
		}, 200);
	}
});

$(window).blur(function(){
	instance = 2;
	console.log("blur");
	clearTimeout(roll);
	clearTimeout(stall);
});*/

$(window).on("load", function(){

	console.log("loaded");

	instance = 0;

	cW = parseInt($(carosel).css("width"));
	cH = parseInt($(carosel).css("height"));



	var left = 0;

	for(var i = 0; i < moveCont.length; i++)
	{
		sizes.push(new Array());
		sizes[i].push(parseInt($(imgs[i]).css("width")));
		sizes[i].push(parseInt($(imgs[i]).css("height")));

		var w = parseInt($(imgs[i]).css("width"));
		var h = parseInt($(imgs[i]).css("height"));

		$(moveCont[i]).css("width", cW + "px");
		$(imgCont[i]).css("width", cW + "px");
		$(imgs[i]).css("width", cW + "px");

		var nH = (h * cW) / w;

		if(cH >= ogcH && nH >= cH)
		{
			$(carosel).css("height", ogcH + "px");
			$(moveCont[i]).css("height", ogcH + "px");
			$(imgCont[i]).css("height", ogcH + "px");
			var t = (ogcH / 2) - (nH / 2);
			$(imgs[i]).css("height", nH + "px");
			$(imgs[i]).css("top", t + "px");
			$(leftClick).css("top", ((ogcH / 2) - (lCH / 2)) + "px");
			$(rightClick).css("top", ((ogcH / 2) - (lCH / 2)) + "px");
			$(coverLeft).css("top", ((ogcH / 2) - (lCH / 2)) + "px");
			$(coverRight).css("top", ((ogcH / 2) - (lCH / 2)) + "px");
		}
		else
		{
			$(carosel).css("height", nH + "px");
			$(moveCont[i]).css("height", nH + "px");
			$(imgCont[i]).css("height", nH + "px");
			var t = (nH / 2) - (nH / 2);
			$(imgs[i]).css("height", nH + "px");
			$(imgs[i]).css("top", t + "px");
			$(leftClick).css("top", ((nH / 2) - (lCH / 2)) + "px");
			$(rightClick).css("top", ((nH / 2) - (lCH / 2)) + "px");
			$(coverLeft).css("top", ((nH / 2) - (lCH / 2)) + "px");
			$(coverRight).css("top", ((nH / 2) - (lCH / 2)) + "px");
		}

		if((i + 1) == moveCont.length)
		{
			pos.push(-1);
			$(moveCont[i]).css("left", (-1 * cW) + "px");
		}
		else
		{
			pos.push(i);
			$(moveCont[i]).css("left", left + "px");
			left += cW;
		}

	}

	console.log(pos);

	roll = setTimeout(function scroll(){

		$(leftClick).css("display", "none");
		$(rightClick).css("display", "none");
		$(coverLeft).css("display", "block");
		$(coverRight).css("display", "block");

		cW = parseInt($(carosel).css("width"));

		var posC = 0;

		for(var i = 0; i < pos.length; i++)
		{
			if(pos[i] == -1)
			{
				$(moveCont[i]).css("left", (-1 * cW) + "px");
			}
			else
			{
				$(moveCont[i]).css("left", posC + "px");
				posC += cW;
			}
		}

		for(var i = 0; i < moveCont.length; i++)
		{
			var curL = parseInt($(moveCont[i]).css("left")) - cW;

			if(curL == 0)
			{
				pos[i] = 0;
				$(moveCont[i]).css("z-index", 10000000);
				$(moveCont[i]).css("left", curL + "px");
			}
			else if(curL < 0)
			{
				if(curL == (-2 * cW))
				{
					console.log("maybe");
					pos[i] = 1;
					$(moveCont[i]).css("z-index", 1);
					$(moveCont[i]).css("left", cW + "px");
				}
				else
				{
					pos[i] = -1;
					$(moveCont[i]).css("z-index", 1000);
					$(moveCont[i]).css("left", curL + "px");
				}
			}
			
		}


		setTimeout(function(){
			$(leftClick).css("display", "block");
			$(rightClick).css("display", "block");
			$(coverLeft).css("display", "none");
			$(coverRight).css("display", "none");
		}, 500);

		console.log(pos);
		roll = setTimeout(scroll, 5000);

	}, 4500);

});

$(window).resize(function(){

	instance = 1;

	clearTimeout(stall);
	clearTimeout(roll);

	var cW = parseInt($(carosel).css("width"));

	for(var i = 0; i < pos.length; i++)
	{
		if(pos[i] == 0)
		{
			$(moveCont[i]).css("left", "0px");
		}
		else if(pos[i] == 1)
		{
			$(moveCont[i]).css("left", cW + "px");
		}
		else
		{
			$(moveCont[i]).css("left", (-1 * cW) + "px");
		}
	}

	for(var i = 0; i < moveCont.length; i++)
	{
		$(moveCont[i]).css("width", cW + "px");
		$(imgCont[i]).css("width", cW + "px");
		$(imgs[i]).css("width", cW + "px");

		var nH = (sizes[i][1] * cW) / sizes[i][0];

		if(cH >= ogcH && nH >= cH)
		{
			$(carosel).css("height", ogcH + "px");
			$(moveCont[i]).css("height", ogcH + "px");
			$(imgCont[i]).css("height", ogcH + "px");
			var t = (ogcH / 2) - (nH / 2);
			$(imgs[i]).css("height", nH + "px");
			$(imgs[i]).css("top", t + "px");
			$(leftClick).css("top", ((ogcH / 2) - (lCH / 2)) + "px");
			$(rightClick).css("top", ((ogcH / 2) - (lCH / 2)) + "px");
			$(coverLeft).css("top", ((ogcH / 2) - (lCH / 2)) + "px");
			$(coverRight).css("top", ((ogcH / 2) - (lCH / 2)) + "px");
		}
		else
		{
			$(carosel).css("height", nH + "px");
			$(moveCont[i]).css("height", nH + "px");
			$(imgCont[i]).css("height", nH + "px");
			var t = (nH / 2) - (nH / 2);
			$(imgs[i]).css("height", nH + "px");
			$(imgs[i]).css("top", t + "px");
			$(leftClick).css("top", ((nH / 2) - (lCH / 2)) + "px");
			$(rightClick).css("top", ((nH / 2) - (lCH / 2)) + "px");
			$(coverLeft).css("top", ((nH / 2) - (lCH / 2)) + "px");
			$(coverRight).css("top", ((nH / 2) - (lCH / 2)) + "px");
		}
	}

	rtime = new Date();

	if(timeout === false)
	{
		timeout = true;
		setTimeout(resizeend, delta);
	}

});

$(leftClick).click(function(){

	clearTimeout(stall);
	clearTimeout(roll);

	$(coverLeft).css("display", "block");
	$(leftClick).css("display", "none");

	var cW = parseInt($(carosel).css("width"));

	for(var i = 0; i < moveCont.length; i++)
	{
		var cL = parseInt($(moveCont[i]).css("left")) - cW;
		if(cL == 0)
		{
			pos[i] = 0;
			$(moveCont[i]).css("z-index", 10000000);
			$(moveCont[i]).css("left", cL + "px");
		}
		else
		{
			if(cL == (-2 * cW))
			{
				console.log("maybe");
				pos[i] = 1;
				$(moveCont[i]).css("z-index", 1);
				$(moveCont[i]).css("left", cW + "px");
			}
			else
			{
				pos[i] = -1;
				$(moveCont[i]).css("z-index", 1000);
				$(moveCont[i]).css("left", cL + "px");
			}
		}
	}

	setTimeout(function(){

		$(coverLeft).css("display", "none");
		$(leftClick).css("display", "block");

	}, 500);

	stall = setTimeout(function(){

		roll = setTimeout(function scroll(){

			$(leftClick).css("display", "none");
			$(rightClick).css("display", "none");
			$(coverLeft).css("display", "block");
			$(coverRight).css("display", "block");

			cW = parseInt($(carosel).css("width"));

			var posC = 0;

			for(var i = 0; i < pos.length; i++)
			{
				if(pos[i] == -1)
				{
					$(moveCont[i]).css("left", (-1 * cW) + "px");
				}
				else
				{
					$(moveCont[i]).css("left", posC + "px");
					posC += cW;
				}
			}

			for(var i = 0; i < moveCont.length; i++)
			{
				var curL = parseInt($(moveCont[i]).css("left")) - cW;

				if(curL == 0)
				{
					pos[i] = 0;
					$(moveCont[i]).css("z-index", 10000000);
					$(moveCont[i]).css("left", curL + "px");
				}
				else if(curL < 0)
				{
					if(curL == (-2 * cW))
					{
						console.log("maybe");
						pos[i] = 1;
						$(moveCont[i]).css("z-index", 1);
						$(moveCont[i]).css("left", cW + "px");
					}
					else
					{
						pos[i] = -1;
						$(moveCont[i]).css("z-index", 1000);
						$(moveCont[i]).css("left", curL + "px");
					}
				}
				
			}


			setTimeout(function(){
				$(leftClick).css("display", "block");
				$(rightClick).css("display", "block");
				$(coverLeft).css("display", "none");
				$(coverRight).css("display", "none");
			}, 500);

			console.log(pos);
			roll = setTimeout(scroll, 5000);

		}, 4500);

	}, 700);

});

$(rightClick).click(function(){

	clearTimeout(stall);
	clearTimeout(roll);

	$(coverRight).css("display", "block");
	$(rightClick).css("display", "none");

	var cW = parseInt($(carosel).css("width"));

	for(var i = 0; i < moveCont.length; i++)
	{
		var cL = parseInt($(moveCont[i]).css("left")) + cW;
		if(cL == 0)
		{
			pos[i] = 0;
			$(moveCont[i]).css("z-index", 10000000);
			$(moveCont[i]).css("left", cL + "px");
		}
		else
		{
			if(cL == (2 * cW))
			{
				console.log("maybe");
				pos[i] = -1;
				$(moveCont[i]).css("z-index", 1);
				$(moveCont[i]).css("left", (-1 * cW) + "px");
			}
			else
			{
				pos[i] = 1;
				$(moveCont[i]).css("z-index", 100);
				$(moveCont[i]).css("left", cL + "px");
			}
		}
	}

	setTimeout(function(){

		$(coverRight).css("display", "none");
		$(rightClick).css("display", "block");

	}, 500);

	stall = setTimeout(function(){

		roll = setTimeout(function scroll(){

			$(leftClick).css("display", "none");
			$(rightClick).css("display", "none");
			$(coverLeft).css("display", "block");
			$(coverRight).css("display", "block");

			cW = parseInt($(carosel).css("width"));

			var posC = 0;

			for(var i = 0; i < pos.length; i++)
			{
				if(pos[i] == -1)
				{
					$(moveCont[i]).css("left", (-1 * cW) + "px");
				}
				else
				{
					$(moveCont[i]).css("left", posC + "px");
					posC += cW;
				}
			}

			for(var i = 0; i < moveCont.length; i++)
			{
				var curL = parseInt($(moveCont[i]).css("left")) - cW;

				if(curL == 0)
				{
					pos[i] = 0;
					$(moveCont[i]).css("z-index", 10000000);
					$(moveCont[i]).css("left", curL + "px");
				}
				else if(curL < 0)
				{
					if(curL == (-2 * cW))
					{
						console.log("maybe");
						pos[i] = 1;
						$(moveCont[i]).css("z-index", 1);
						$(moveCont[i]).css("left", cW + "px");
					}
					else
					{
						pos[i] = -1;
						$(moveCont[i]).css("z-index", 1000);
						$(moveCont[i]).css("left", curL + "px");
					}
				}
				
			}


			setTimeout(function(){
				$(leftClick).css("display", "block");
				$(rightClick).css("display", "block");
				$(coverLeft).css("display", "none");
				$(coverRight).css("display", "none");
			}, 500);

			console.log(pos);
			roll = setTimeout(scroll, 5000);

		}, 4500);

	}, 700);

});


/*$(leftClick, coverLeft).on("mouseenter", function(){

	$("#left-gradient").css("background-color", "rgba(0,0,0,0.3)");

});

$(leftClick, coverLeft).on("mouseleave", function(){

	$("#left-gradient").css("background-color", "rgba(0,0,0,0)");

});

$(rightClick, coverRight).on("mouseenter", function(){

	$("#right-gradient").css("background-color", "rgba(0,0,0,0.3)");

});

$(rightClick, coverRight).on("mouseleave", function(){

	$("#right-gradient").css("background-color", "rgba(0,0,0,0)");

});*/
