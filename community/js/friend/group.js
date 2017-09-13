// 手指图片横向滑动
function fingerTouch(innerEle,innerEleFather,fillEle,outerEle){
	var my_history_contW = innerEle.width() * innerEle.length + $('.banner_margin_width').width();
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
$('.list_cont_warp').each(function(i){
	$('.list_cont_warp').eq(i).addClass('list_cont_warp'+(i+1));
	$('.list_cont').eq(i).addClass('list_cont'+(i+1));
	new fingerTouch($('.list_cont'+(i+1)+' li'),$('.list_cont'+(i+1)),$('.list_padding_width'),$('.list_cont_warp'+(i+1)));
});



//  加载刷新
$(function(){
	$('.swiper-container, .w').height($(window).height());
    var loadFlag = true;
    var oi = 0;
    var mySwiper = new Swiper('.swiper-container',{
        direction: 'vertical',
        scrollbar: '.swiper-scrollbar',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        onTouchMove: function(swiper){//手动滑动中触发
            var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
            var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;
            var translateY=parseInt(mySwiper.getWrapperTranslate('y'));
            if(translateY > 0){
                $('.swiper-wrapper,.w').css('transform','translate3d(0px, 0px, 0px)');
            }
        },
        onTouchEnd: function(swiper) {
            var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
            var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;
             // 上拉加载
            if(mySwiper.translate <= _viewHeight - _contentHeight - 50 && mySwiper.translate < 0) {
                $.ajax({
                    url:"",
                    type:"post",
                    success:function(data){

                    },
                    error:function(){
                        $('.loadtip p').css('display','block');
                        if(loadFlag){
                            $(".loadtip p").html('正在加载...');
                            setTimeout(function() {
                                for(var i =0;i<3;i++) {
                                    $(".index").append(`
                                        <div class="group">
                                            <div class="group_title"><img src="images/friend/group_title_icon.png" alt=""><span>生活更简单</span></div>
                                            <div class="list_cont_warp">
                                                <ul class="list_cont">
                                                    <li class="group_banner">
                                                        <a href="javascript:;">
                                                            <img src="images/friend/group_banner.png"/>
                                                            <div class="group_banner_detail">
                                                                <div class="group_banner_title"><span>竹杆小组</span><img src="images/friend/group_grophy.png" alt="" class="group_grophy"></div>
                                                                <p>北京市东城区竹杆社区服务小组</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="group_banner">
                                                        <a href="javascript:;">
                                                            <img src="images/friend/group_banner.png"/>
                                                            <div class="group_banner_detail">
                                                                <div class="group_banner_title"><span>竹杆小组</span><img src="images/friend/group_grophy.png" alt="" class="group_grophy"></div>
                                                                <p>北京市东城区竹杆社区服务小组</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="group_banner">
                                                        <a href="javascript:;">
                                                            <img src="images/friend/group_banner.png"/>
                                                            <div class="group_banner_detail">
                                                                <div class="group_banner_title"><span>竹杆小组</span><img src="images/friend/group_grophy.png" alt="" class="group_grophy"></div>
                                                                <p>北京市东城区竹杆社区服务小组</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    `);
                                }
                                 $(".loadtip p").hide();
                                mySwiper.update(); // 重新计算高度;
                                $('.list_cont_warp').each(function(i){
        							$('.list_cont_warp').eq(i).addClass('list_cont_warp'+(i+1));
        							$('.list_cont').eq(i).addClass('list_cont'+(i+1));
        							new fingerTouch($('.list_cont'+(i+1)+' li'),$('.list_cont'+(i+1)),$('.list_padding_width'),$('.list_cont_warp'+(i+1)));
        							$('.list_cont_warp'+(i+1)).mCustomScrollbar({
        								horizontalScroll:true,
        		                        advanced:{
        								    updateOnContentResize:true
        								}
        							})
        						});
                            }, 800);
                        }else{
                            $(".loadtip p").html('没有更多啦！');
                        }

                    }
                });
            }
            //刷新
            if(mySwiper.translate >= 50) {
                $(".init-loading").fadeIn();
                $('.init-loading img').css({'top':'-0.5rem'});
                $.ajax({
                    url:"",
                    type:"post",
                    success:function(data){

                    },
                    error:function(){
                        setTimeout(function() {
                            for(var i =0;i<3;i++) {
                                $(".tab_switch_first_cont").append(`

                                `);
                            }
                            $('.init-loading').hide();
                            $('.init-loading img').css({'top':'-3rem'});
                            $("#slide").css("padding-top","0");
                            mySwiper.update(); // 重新计算高度;

                        }, 800);
                    }
                });
            }
            return false;
        }
    });
var mySwiper2 = new Swiper('.swiper-container2',{
    onTransitionEnd: function(swiper){
//	$('.w').css('transform', 'translate3d(0px, 0px, 0px)');
        $('.swiper-container2 .swiper-slide-active').css('height','auto').siblings('.swiper-slide').css('height','0px');
        mySwiper.update();
        $('.tab a').eq(mySwiper2.activeIndex).addClass('active').siblings('a').removeClass('active');
    }
});
});
