/*----------------------------------
Global Variables
----------------------------------*/
var tableContents = document.getElementsByClassName('table-contents');
var imgR = document.getElementsByClassName('img-right');
var imgL = document.getElementsByClassName("img-left");
var contentArea = document.getElementsByClassName('content-area');
var check = true;
var ogLW = 0;

/*--------------------------------*/


$(window).on("load", ()=>{


	if(window.innerWidth <= 400)
	{
		//This will also be the image height & width, and the width of the table area
		var itemW = 0.9 * window.innerWidth;

		for(var i = 0; i < contentArea.length; i++)
		{
			//(tableContents[i].childNodes);
			//("Hello");
			$(contentArea[i]).css("width", window.innerWidth + "px");
			if((i % 2) == 0){
				//Image is to the right
				$(imgR[(i / 2)]).css('width', itemW + "px");
				$(imgR[(i / 2)]).css("height", itemW + "px");
				$(imgR[(i / 2)]).css("right", (window.innerWidth * 0.05) + "px");
			}
			else
			{
				//Image is to the left
				$(imgL[((i - 1) / 2)]).css('width', itemW + "px");
				$(imgL[((i - 1) / 2)]).css("height", itemW + "px");
				$(imgL[((i - 1) / 2)]).css("left", (window.innerWidth * 0.05) + "px");
			}
			
			$(tableContents[i].childNodes[1]).css("font-size", "15px");
			var tbH = parseInt($(tableContents[i]).css("height"));
			$(tableContents[i].childNodes[1]).css("width", itemW + "px");
			$(tableContents[i]).css("top", (itemW + 10) + "px");
			var marginLeft = 0;
			if(window.innerWidth > parseInt($(tableContents[i]).css("width")))
			{
				marginLeft = (window.innerWidth / 2) - (parseInt($(tableContents[i]).css('width')) / 2);
			}
			//This just keeps consistency, so the styles aren't freaking out
			if((i % 2) == 0){
				$(tableContents[i]).css("left", marginLeft + "px");
			}
			else
			{
				$(tableContents[i]).css("right", marginLeft + "px");
			}
			var newH = tbH + 10 + itemW;

			$(contentArea[i]).css("height", newH + "px");
			$(contentArea[i]).css("margin-left", "0px");
		}
		
	}
	else
	{
		for(var i = 0; i < tableContents.length; i++)
		{
			$(tableContents[i].childNodes[1]).css("width", "auto");
		}
		var largest = 0;
		for(var i = 0; i < tableContents.length; i++)
		{
			$(tableContents[i].childNodes[1]).css("font-size", "20px");
			if(parseInt($(tableContents[i].childNodes[1]).css("width")) >= largest)
			{
				largest = parseInt($(tableContents[i].childNodes[1]).css("width"));
			}
		}
		//var imgW = parseInt($(imgR[0]).css("width"));
		if((largest + 420) < window.innerWidth)
		{
			//("This may work");
			for(var i = 0; i < contentArea.length; i++)
			{
				//(tableContents[i].childNodes);
				$(tableContents[i].childNodes[1]).css("font-size", "20px");
				var tableH = parseInt($(tableContents[i]).css("height"));
				var tableW = parseInt($(tableContents[i]).css("width"));
				$(contentArea[i]).css("margin-left", ((window.innerWidth / 2) - ((largest + 420) / 2)) + "px");

				if((i % 2) == 0)
				{
					$(imgR[(i / 2)]).css("height", 400 + "px");
					$(imgR[(i / 2)]).css("width", 400 + "px");
				}
				else
				{
					$(imgL[((i - 1) / 2)]).css("height", 400 + "px");
					$(imgL[((i - 1) / 2)]).css("width", 400 + "px");
				}
				//This is the same width for all of them
				var conW = 420 + largest;

				$(contentArea[i]).css("width", conW + "px");

				if(tableH > 400)
				{
					$(contentArea[i]).css("height", tableH + "px");
					$(tableContents[i]).css("top", "0px");
					if((i % 2) == 0)
					{
						//Image is to the right
						$(tableContents[i]).css("left", "0px");
						$(imgR[(i / 2)]).css('right', "0px");
						$(imgR[(i / 2)]).css("top", ((tableH / 2) - (200)) + "px");
					}
					else
					{
						//Image is to the left
						$(tableContents[i]).css("right", "0px");
						$(imgL[((i - 1) / 2)]).css('left', "0px");
						$(imgL[((i - 1) / 2)]).css("top", ((tableH / 2) - (200)) + "px");
					}
				}
				else
				{
					$(contentArea[i]).css('height', 400 + "px");
					$(tableContents[i]).css("top", (200 - (tableH / 2)) + "px");
					if((i % 2) == 0)
					{
						//Image is to the right
						$(imgR[(i / 2)]).css("right", "0px");
						$(tableContents[i]).css("left", "0px");
					}
					else
					{
						//Image is to the left
						$(imgL[((i - 1) / 2)]).css("left", "0px");
						$(tableContents[i]).css("right", "0px");
					}
				}

			}

		}
		else
		{

			for(var i = 0; i < contentArea.length; i++)
			{
				$(tableContents[i].childNodes[1]).css("font-size", "18px");
				$(contentArea[i]).css("width", "100vw");

				if((i % 2) == 0)
				{					
					$(imgR[(i / 2)]).css("width", 400 + "px");
					$(imgR[(i / 2)]).css("height", 400 + "px");
					$(imgR[(i / 2)]).css("top", "0px");
					$(imgR[(i / 2)]).css("right", ((window.innerWidth / 2) - (200)) + "px");
				}
				else
				{
					$(imgL[((i - 1) / 2)]).css("width", 400 + "px");
					$(imgL[((i - 1) / 2)]).css("height", 400 + "px");
					$(imgL[((i - 1) / 2)]).css("top", "0px");
					$(imgL[((i - 1) / 2)]).css("left", ((window.innerWidth / 2) - (200)) + "px");
				}

				var tableW = parseInt($(tableContents[i]).css("width"));
				var tableH;

				if(tableW < window.innerWidth)
				{
					if((i % 2) == 0)
					{
						$(tableContents[i]).css("left", ((window.innerWidth / 2) - (tableW / 2)) + "px");
					}
					else
					{
						$(tableContents[i]).css("right", ((window.innerWidth / 2) - (tableW / 2)) + "px");
					}
					tableH = parseInt($(tableContents[i]).css("height"));
					$(tableContents[i]).css('top', "420px");
				}
				else
				{
					if((i % 2) == 0)
					{
						$(tableContents[i]).css("left", "0px");
					}
					else
					{
						$(tableContents[i]).css("right", "0px");
					}
					$(tableContents[i]).css('top', "420px");
					tableH = parseInt($(tableContents[i]).css("height"));
				}

				var areaSize = 420 + tableH;

				$(contentArea[i]).css("height", areaSize + "px");
				$(contentArea[i]).css("margin-left", "0px");
			}

		}
	}
});

$(window).on("resize", ()=>{


	if(window.innerWidth <= 400)
	{
		//This will also be the image height & width, and the width of the table area
		var itemW = 0.9 * window.innerWidth;

		for(var i = 0; i < contentArea.length; i++)
		{
			//(tableContents[i].childNodes);
			//("Hello");
			$(contentArea[i]).css("width", window.innerWidth + "px");
			if((i % 2) == 0){
				//Image is to the right
				$(imgR[(i / 2)]).css('width', itemW + "px");
				$(imgR[(i / 2)]).css("height", itemW + "px");
				$(imgR[(i / 2)]).css("right", (window.innerWidth * 0.05) + "px");
			}
			else
			{
				//Image is to the left
				$(imgL[((i - 1) / 2)]).css('width', itemW + "px");
				$(imgL[((i - 1) / 2)]).css("height", itemW + "px");
				$(imgL[((i - 1) / 2)]).css("left", (window.innerWidth * 0.05) + "px");
			}
			
			$(tableContents[i].childNodes[1]).css("font-size", "15px");
			var tbH = parseInt($(tableContents[i]).css("height"));
			$(tableContents[i].childNodes[1]).css("width", itemW + "px");
			$(tableContents[i]).css("top", (itemW + 10) + "px");
			var marginLeft = 0;
			if(window.innerWidth > parseInt($(tableContents[i]).css("width")))
			{
				marginLeft = (window.innerWidth / 2) - (parseInt($(tableContents[i]).css('width')) / 2);
			}
			//This just keeps consistency, so the styles aren't freaking out
			if((i % 2) == 0){
				$(tableContents[i]).css("left", marginLeft + "px");
			}
			else
			{
				$(tableContents[i]).css("right", marginLeft + "px");
			}
			var newH = tbH + 10 + itemW;

			$(contentArea[i]).css("height", newH + "px");
			$(contentArea[i]).css("margin-left", "0px");
		}
		
	}
	else
	{
		for(var i = 0; i < tableContents.length; i++)
		{
			$(tableContents[i].childNodes[1]).css("width", "auto");
		}
		var largest = 0;
		for(var i = 0; i < tableContents.length; i++)
		{
			$(tableContents[i].childNodes[1]).css("font-size", "20px");
			if(parseInt($(tableContents[i].childNodes[1]).css("width")) >= largest)
			{
				largest = parseInt($(tableContents[i].childNodes[1]).css("width"));
			}
		}
		//var imgW = parseInt($(imgR[0]).css("width"));
		if((largest + 420) < window.innerWidth)
		{
			//("This may work");
			for(var i = 0; i < contentArea.length; i++)
			{
				//(tableContents[i].childNodes);
				$(tableContents[i].childNodes[1]).css("font-size", "20px");
				var tableH = parseInt($(tableContents[i]).css("height"));
				var tableW = parseInt($(tableContents[i]).css("width"));
				$(contentArea[i]).css("margin-left", ((window.innerWidth / 2) - ((largest + 420) / 2)) + "px");

				if((i % 2) == 0)
				{
					$(imgR[(i / 2)]).css("height", 400 + "px");
					$(imgR[(i / 2)]).css("width", 400 + "px");
				}
				else
				{
					$(imgL[((i - 1) / 2)]).css("height", 400 + "px");
					$(imgL[((i - 1) / 2)]).css("width", 400 + "px");
				}
				//This is the same width for all of them
				var conW = 420 + largest;

				$(contentArea[i]).css("width", conW + "px");

				if(tableH > 400)
				{
					$(contentArea[i]).css("height", tableH + "px");
					$(tableContents[i]).css("top", "0px");
					if((i % 2) == 0)
					{
						//Image is to the right
						$(tableContents[i]).css("left", "0px");
						$(imgR[(i / 2)]).css('right', "0px");
						$(imgR[(i / 2)]).css("top", ((tableH / 2) - (200)) + "px");
					}
					else
					{
						//Image is to the left
						$(tableContents[i]).css("right", "0px");
						$(imgL[((i - 1) / 2)]).css('left', "0px");
						$(imgL[((i - 1) / 2)]).css("top", ((tableH / 2) - (200)) + "px");
					}
				}
				else
				{
					$(contentArea[i]).css('height', 400 + "px");
					$(tableContents[i]).css("top", (200 - (tableH / 2)) + "px");
					if((i % 2) == 0)
					{
						//Image is to the right
						$(imgR[(i / 2)]).css("right", "0px");
						$(tableContents[i]).css("left", "0px");
					}
					else
					{
						//Image is to the left
						$(imgL[((i - 1) / 2)]).css("left", "0px");
						$(tableContents[i]).css("right", "0px");
					}
				}

			}

		}
		else
		{

			for(var i = 0; i < contentArea.length; i++)
			{
				$(tableContents[i].childNodes[1]).css("font-size", "18px");
				$(contentArea[i]).css("width", "100vw");

				if((i % 2) == 0)
				{					
					$(imgR[(i / 2)]).css("width", 400 + "px");
					$(imgR[(i / 2)]).css("height", 400 + "px");
					$(imgR[(i / 2)]).css("top", "0px");
					$(imgR[(i / 2)]).css("right", ((window.innerWidth / 2) - (200)) + "px");
				}
				else
				{
					$(imgL[((i - 1) / 2)]).css("width", 400 + "px");
					$(imgL[((i - 1) / 2)]).css("height", 400 + "px");
					$(imgL[((i - 1) / 2)]).css("top", "0px");
					$(imgL[((i - 1) / 2)]).css("left", ((window.innerWidth / 2) - (200)) + "px");
				}

				var tableW = parseInt($(tableContents[i]).css("width"));
				var tableH;

				if(tableW < window.innerWidth)
				{
					if((i % 2) == 0)
					{
						$(tableContents[i]).css("left", ((window.innerWidth / 2) - (tableW / 2)) + "px");
					}
					else
					{
						$(tableContents[i]).css("right", ((window.innerWidth / 2) - (tableW / 2)) + "px");
					}
					tableH = parseInt($(tableContents[i]).css("height"));
					$(tableContents[i]).css('top', "420px");
				}
				else
				{
					if((i % 2) == 0)
					{
						$(tableContents[i]).css("left", "0px");
					}
					else
					{
						$(tableContents[i]).css("right", "0px");
					}
					$(tableContents[i]).css('top', "420px");
					tableH = parseInt($(tableContents[i]).css("height"));
				}

				var areaSize = 420 + tableH;

				$(contentArea[i]).css("height", areaSize + "px");
				$(contentArea[i]).css("margin-left", "0px");
			}

		}
	}

});




