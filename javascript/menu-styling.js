//This will get the Company Header Information
var companyHeader = document.getElementById("company-header");
var companyHeaderH = parseInt($(companyHeader).css("height"));
var companyHeaderW = parseInt($(companyHeader).css("width")) + 60; //this accomodates for the boundaries

//This above information will affect most if not all the styling on the
//website menu
var inMenu = document.getElementById("in-menu");
var inMenuH = companyHeaderH + 60;
$(inMenu).css("height", inMenuH + "px");

//I will position the company header here
$(companyHeader).css("top", ((inMenuH / 2) - (companyHeaderH / 2)) + "px");

//This will be the hamburger block
var hamburgerButton = document.getElementById("hamburger-button");
var hamburgerButtonH = parseInt($(hamburgerButton).css("height"));

$(hamburgerButton).css("top", ((inMenuH / 2) - (hamburgerButtonH / 2)) + "px");