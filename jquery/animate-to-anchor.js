/**
* Scrolls to anchor with animation
*
**/


$(".anchor").click(function(e) {
        
		e.preventDefault();
        
		var a = $(this).attr("href");
        
		$("body,html").stop(!0, !0).animate({
            
			scrollTop: $(a).offset().top
        
		}, 1000)

})