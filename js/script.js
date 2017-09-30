// jQuery to load once other things on page is fully loaded

// Setting Variables
// Targeting HTML Variables
var mobileNav = true;
var navContainer = $("#nav");
var mobileIcon = $("#mobile-menu");
var slide = $(".slide");

$(document).ready(function(){

	// Mobile Navigation Interactivity
	navContainer.click(function(){
		var originalWidth = navContainer.width;
		console.log($(window).width());

		if(!mobileNav && ( $(window).width() < 1199 ) ){
			navContainer.css("width", originalWidth);
			slide.css("margin-left", "0px");
			$(".nav-item").fadeOut(1000);

			// Changing the Chevron based on whether nav is open or not
			mobileIcon.removeClass("fa-chevron-left");
			mobileIcon.addClass("fa-chevron-right");
			
			setTimeout(function(){
				mobileIcon.css("text-align", "center");
			}, 1000);
			
			mobileNav = true;
		} else{
			navContainer.css("width", "150px");
			slide.css("margin-left", "150px");
			$(".nav-item").fadeIn(1000);

			// Changing the Chevron based on whether nav is open or not
			mobileIcon.removeClass("fa-chevron-right");
			mobileIcon.addClass("fa-chevron-left");
			mobileIcon.css("text-align", "right");
			
			mobileNav = false;
		}
	});
});

setTimeout(function(){
	$('#tip').css('display','none');
},800);