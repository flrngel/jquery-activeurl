(function($){
	$.fn.activeurl=function(options){
		var settings = $.extend({
			'className': "active",
			'attr': "data-url",
			'callback': null
		},options);

		this.each(function(){
			var pattern=new RegExp($(this).attr(settings.attr));
			var grep=location.pathname.match(pattern);
			if( grep ){
				$(this).addClass(settings.className);
			}
		});

		if( settings.callback ){
			settings.callback;
		}
	}
}(jQuery));
