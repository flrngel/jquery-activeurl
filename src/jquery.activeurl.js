(function($){
	$.fn.activeurl=function(options){
		var settings = $.extend({
			class: "active",
			attr: "data-url",
			callback: null
		},options);

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
