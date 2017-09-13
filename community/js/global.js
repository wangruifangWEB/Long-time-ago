// 手指图片横向滑动
function fingerTouch(innerEle,innerEleFather,fillEle,outerEle){
	var my_history_contW = innerEle.width() * innerEle.length;
	innerEleFather.width(my_history_contW + fillEle.width());
	(function($){
		$(window).load(function(){
			outerEle.mCustomScrollbar({
				horizontalScroll:true,
				advanced:{
				    updateOnContentResize:true
				}
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
//$('.list_padding_width')具体设置在dingyue.html
$('.list_cont_warp').each(function(i){
	$('.list_cont_warp').eq(i).addClass('list_cont_warp'+(i+1));
	$('.list_cont').eq(i).addClass('list_cont'+(i+1));
	new fingerTouch($('.list_cont'+(i+1)+' li'),$('.list_cont'+(i+1)),$('.list_padding_width'),$('.list_cont_warp'+(i+1)));
});


function zuohua(){
//	$(document).ready(function(e) {
    // 设定每一行的宽度=屏幕宽度+按钮宽度
    // 设定常规信息区域宽度=屏幕宽度
    $(".dingyue").width($(document).width());
    $(".mydingyue_cont").width( $(".dingyue").width()+$(".cancel_dingyue").width());
    // 获取所有行，对每一行设置监听
    var lines = $(".mydingyue_cont");
    var len = lines.length;
    var lastX, lastXForMobile;
    // 用于记录被按下的对象
    var pressedObj;  // 当前左滑的对象
    var lastLeftObj; // 上一个左滑的对象
    // 用于记录按下的点
    var start;
    // 网页在移动端运行时的监听
    for (var i = 0; i < len; ++i) {
    	   lines[i].addEventListener('touchstart', function(e){
            lastXForMobile = e.changedTouches[0].pageX;
            pressedObj = this; // 记录被按下的对象
            // 记录开始按下时的点
            var touches = event.touches[0];
            start = {
                x: touches.pageX, // 横坐标
                y: touches.pageY  // 纵坐标
            };
        });
        lines[i].addEventListener('touchstart', function(e){
            lastXForMobile = e.changedTouches[0].pageX;
            pressedObj = this; // 记录被按下的对象

            // 记录开始按下时的点
            var touches = event.touches[0];
            start = {
                x: touches.pageX, // 横坐标
                y: touches.pageY  // 纵坐标
            };
        });
        lines[i].addEventListener('touchmove',function(e){
            var touches = event.touches[0];
            delta = {
                x: touches.pageX - start.x,
                y: touches.pageY - start.y
            };
            if (Math.abs(delta.x) > Math.abs(delta.y)) {
                event.preventDefault();
            }
        });
        lines[i].addEventListener('touchend', function(e){
            if (lastLeftObj && pressedObj != lastLeftObj) { // 点击除当前左滑对象之外的任意其他位置
                $(lastLeftObj).animate({marginLeft:"0"}, 200); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
            }
            var diffX = e.changedTouches[0].pageX - lastXForMobile;
            if (diffX < -50) {
                $(pressedObj).animate({marginLeft:"-1.26rem"}, 200); // 左滑
                lastLeftObj && lastLeftObj != pressedObj &&
                    $(lastLeftObj).animate({marginLeft:"0"}, 200); // 已经左滑状态的按钮右滑
                lastLeftObj = pressedObj; // 记录上一个左滑的对象
            } else if (diffX > 50) {
              if (pressedObj == lastLeftObj) {
                $(pressedObj).animate({marginLeft:"0"}, 200); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
              }
            }
        });
    }
//});

}
