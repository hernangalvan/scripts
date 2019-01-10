/**
* Scroll element and fix to top
*
*/

$(window).scroll(function(){
			ajustar_scroll();
});


function ajustar_scroll() {
	
	var scrollTop = $(window).scrollTop();
	var windowWidth = $(window).width();
	console.log(windowWidth);
	
	if(windowWidth>992){
		
		$(".fixedPosition").each(function(){
			var element = $(this);
			var element_height = element.height();
			var from = element.attr("data-fixed-from");
			var stop_at = element.attr("data-fixed-stop-at");
			var active = true;

			if( stop_at != undefined ) {
				var stop_at_element = $(stop_at);
				var stop_at_element_height = $(stop_at_element).height();

				if( ( scrollTop + element_height ) > stop_at_element.offset().top ) {
					active = false;
				}
			}
			if( active ) {
				if( scrollTop > from ) {
					element.css({ 
						"position" : "fixed",
						"bottom" : "initial",
						"top" : 0
					});
				} else if( scrollTop < from ) {
					element.css({ 
						"position" : "absolute",
						"bottom" : "initial",
						"top" : 81
					});
				}
			} else {
				element.css({
					"position" : "fixed",
					"top" : "initial",
					//"bottom" : stop_at_element_height,
					"bottom":66
				});
			}
		});
		
	}
	
}