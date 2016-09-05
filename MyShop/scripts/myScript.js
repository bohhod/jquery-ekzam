$(document).ready(function(){

	
	$('.header').hover(function()
		{
			$(this).css({'backgroundPosition': '30% 40%', 'transition': '2s linear'});
		}, function()
		{
			$(this).css({'backgroundPosition': '53% 60%', 'transition': '5s linear'});
		}		
	);


	$('img').hover(function()
		{
			$(this).addClass('opacity_img');
		}, function()
		{
			$(this).removeClass('opacity_img');		
		}
	);

	
	$( ".bagImg" ).mouseover(function() {
	  	$( this ).effect( "size", 
		  	{
		    	to: {zIndex: 2, width: 350, height: 350, margin: -75, opacity: 1}
		  	}, 1 );
	});
	$( ".bagImg" ).mouseout(function() {
	  	$( this ).effect( "size", 
		  	{
	    		to: {zIndex: 1, width: 205, height: 170, margin: 5, opacity: 0.8}
	  		}, 500 );
	});
		
});