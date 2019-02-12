// nav bar 
ScrollReveal().reveal('.navbar', { duration: 2000, origin: 'bottom'});

// image
ScrollReveal().reveal('.showcase-left', { delay: 0, duration: 4000, origin: 'top', distance: '300%',});

//paragraph
ScrollReveal().reveal('.showcase-right', { duration: 4000, origin: 'right', distance: '300%' }); 

// button
ScrollReveal().reveal('.showcase-btn', { delay: 4000,  duration: 2000, origin: 'bottom', scale: 2 }); 
                  
ScrollReveal().reveal('#testimonial div', { duration: 2000, origin: 'bottom', });

ScrollReveal().reveal('.info-left', { duration: 2000, origin: 'left', distance: '300%', viewFactor: 0.2 });

ScrollReveal().reveal('.info-right', { duration: 2000, origin: 'right', distance: '300%', viewFactor: 0.2 });

//jon doe
ScrollReveal().reveal('.customer', {duration: 3000, viewFactor: 0.2, }); 

$(function() {
	// Smooth Scrolling
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		  $('html, body').animate({
			scrollTop: target.offset().top
		  }, 1000);
		  return false;
		}
	  }
	});
});

 

// NOTES

 //scale: -2                      specifies the size of elements have prior to being revealed.
// distance: '300%',         works better as a percentage
// viewFactor: 0.2            When 2% of element is seen the element well do something
// duration: 2000,               how long animations take to complete.
// origin: 'bottom'               direction elements come from when revealed. 