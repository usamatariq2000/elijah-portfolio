/* Please ❤ this if you like it! */


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

	//This line is to hide the contact section in the beginning as it was causing issues with the responsiveness
	$(".contact-section").hide();

	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
		$(".contact-section").hide();
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
		$(".contact-section").show();
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
		$(".nature-section").hide();
		$(".wildlife-section").hide();
		$(".travel-section").hide();
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
		$(".nature-section").show();
		$(".wildlife-section").show();
		$(".travel-section").show();
	});

	
	//Travel portfolio page
	
	$(".travel").on('click', function () {
		$("body").addClass("travel-on");
		$(".nature-section").hide();
		$(".wildlife-section").hide();
		$(".contact-section").hide();

	});
	$(".travel-close").on('click', function () {
		$("body").removeClass("travel-on");
		$(".nature-section").show();
		$(".wildlife-section").show();
		$(".contact-section").show();
	});

	
	//Wildlife portfolio page
	
	$(".wildlife").on('click', function () {
		$("body").addClass("wildlife-on");
		$(".nature-section").hide();
		$(".travel-section").hide();
		$(".contact-section").hide();
	});
	$(".wildlife-close").on('click', function () {
		$("body").removeClass("wildlife-on");
		$(".nature-section").show();
		$(".travel-section").show();
		$(".contact-section").show();
	});

	
	//Nature portfolio page
	
	$(".nature").on('click', function () {
		$("body").addClass("nature-on");
		$(".wildlife-section").hide();
		$(".travel-section").hide();
		$(".contact-section").hide();
	});
	$(".nature-close").on('click', function () {
		$("body").removeClass("nature-on");
		$(".wildlife-section").show();
		$(".travel-section").show();
		$(".contact-section").show();
	});

	
})(jQuery);