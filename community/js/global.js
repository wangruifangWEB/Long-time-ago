// 手指图片横向滑动
function fingerTouch(innerEle,innerEleFather,fillEle,outerEle){
	var my_history_contW = innerEle.width() * innerEle.length;
	innerEleFather.width(my_history_contW + fillEle.width());
	(function($){
		$(window).load(function(){
			outerEle.mCustomScrollbar({
				horizontalScroll:true
			});
			function myCallback(el,id){
				if($(id).css("opacity")<1){return;}
				var span=$(id).find("span");
				clearTimeout(timeout);
				span.addClass("on");
				var timeout=setTimeout(function(){span.removeClass("on")},350);
			}
		});
	})(jQuery);
}
new fingerTouch($('.my_history_cont li'),$('.my_history_cont'),$('.list_padding_width'),$(".my_history_cont_warp"));
new fingerTouch($('.my_collection_cont li'),$('.my_collection_cont'),$('.list_padding_width'),$(".my_collection_cont_warp"));
