
;(function($) {
	$.fn.cssImageMaps = function() {
		//alert('here') ;
		var $img = this ;

		var cssImageMap = function() {
			$img.each(function() {
			
				if (typeof($(this).attr('data-width')) == 'undefined')
					return;
				
				//alert('img') ;
				
				var that = this,
					$that = $(that);
				// Since WebKit doesn't know the height until after the image
				// has loaded, perform everything in an onload copy
				$('<img />').load(function() {
					var imageWidth = $that.attr('data-width') ;
					//alert(imageWidth) ;
					var imageSize = $that.width() ;
					var scale = imageSize / imageWidth ;
					//alert(scale) ;
					
					$map = $(that.parentNode) ;
					$map.find('a').each(function() {
						//alert('here') ;
						var $this = $(this);

						var x = $this.attr('data-x') ;
						//alert(x) ;
						var y = $this.attr('data-y') ;
						var xw = $this.attr('data-width') ;
						var yw = $this.attr('data-height') ;
						//alert('here') ;
						$this.css('left', x*scale + 'px') ;
						//alert('here') ;
						//alert('px') ;
						$this.css('top', y*scale + 'px') ;
						$this.css('width', xw*scale + 'px') ;
						$this.css('height', yw*scale + 'px') ;
											
					});
				}).attr('src', $that.attr('src'));
			});
		};
		$(window).resize(cssImageMap).trigger('resize');
	
		return this;
	};
})(jQuery);