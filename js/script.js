// jQuery to load once other things on page is fully loaded

// Setting Variables
// Targeting HTML Variables
var mobileNav = true;
var navContainer = $("#nav");
var mobileIcon = $("#mobile-menu");
var slide = $(".slide");

$(document).ready(function(){
	// Setting slide width based on window - navContainer width.
	slide.css("width", ($(window).width() - navContainer.width()));

	// Mobile Navigation Interactivity
	navContainer.click(function(){
			if(!mobileNav){
				navContainer.css("width", "30px");
				$(".nav-item").fadeOut(500);

				// Changing the Chevron based on whether nav is open or not
				mobileIcon.removeClass("fa-chevron-left");
				mobileIcon.addClass("fa-chevron-right");
				
				mobileNav = true;
			} else {
				navContainer.css("width", "100vw");
				$(".nav-item").fadeIn(500);

				// Changing the Chevron based on whether nav is open or not
				mobileIcon.removeClass("fa-chevron-right");
				mobileIcon.addClass("fa-chevron-left");
				
				mobileNav = false;
			}
	});
});

// Responsive resize of slide based on window
$(window).resize(function(){
	slide.css("width", ($(window).width() - navContainer.width()));
});