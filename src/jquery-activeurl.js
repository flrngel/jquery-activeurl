(function($){
	$.fn.activeurl=function(options){
		// options
		// - attr:
		// - class:
		// - callback
		var settings = $.extend({
			class: "active",
			attr: "data-url"
		},options);

		var i=0;

		this.each(function(){
			var pattern=new RegExp($(this).attr(settings.attr));
			var grep=location.pathname.match(pattern);
			if( grep ){
				$(this).addClass(settings.class);
			}
		});

		if( settings.callback ){
			settings.callback();
		}
	}
}(jQuery));
