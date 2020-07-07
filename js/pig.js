$(window).on("load", ()=>{

	let windowW = window.innerWidth;
	if(windowW < 535)
	{
		var pigW = parseInt($("#pig-logo").css("width"));
		$("#pig-logo").css("margin-left", ((windowW / 2) - (pigW / 2)) + "px");
	}
	else
	{
		var pigW = parseInt($("#pig-logo").css("width"));
		$("#pig-logo").css("margin-left", "0px");
	}

});

$(window).on("resize", ()=>{

	let windowW = window.innerWidth;
	if(windowW < 535)
	{
		var pigW = parseInt($("#pig-logo").css("width"));
		$("#pig-logo").css("margin-left", ((windowW / 2) - (pigW / 2)) + "px");
	}
	else
	{
		var pigW = parseInt($("#pig-logo").css("width"));
		$("#pig-logo").css("margin-left", "0px");
	}
	
});