$(document).ready(function(){
	setTimeout(function(){ 
		$('.owl-carousel').owlCarousel({
			loop:false,
			margin:10,
			responsiveClass:true,
			autoplay:false,
			autoplayTimeout:5000,
			autoplayHoverPause:false,
			responsive:{
				0:{
					items:1,
					nav:true
				},
				600:{
					items:1,
					nav:false
				},
				1000:{
					items:1,
					nav:true,
					loop:false,
					
				}
			}
		});
	//console.log("listo");
	
	},500);
	
  });