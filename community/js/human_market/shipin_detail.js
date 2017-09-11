// 订阅按钮点击事件
$('.dingyue .tab_switch_right button').click(function(){
	if($('.dingyue .tab_switch_right button').hasClass('isDingyue')){
		$('.dingyue .tab_switch_right button').html('已订阅');
		$('.dingyue .tab_switch_right button').addClass('hasDingyue').removeClass('isDingyue');
	}else{
		$('.dingyue .tab_switch_right button').html('订阅');
		$('.dingyue .tab_switch_right button').addClass('isDingyue').removeClass('hasDingyue');
	}
})

// 课程详情收藏按钮点击事件
$('.course_detail .course_detail_title img').click(function(){

	if($('.course_detail .course_detail_title img').hasClass('course_collect')){
		$('.course_detail .course_detail_title img').attr('src','../../images/human_market/ls_collect_no.png');
		$('.course_detail .course_detail_title img').removeClass('course_collect');
	}else{
		$('.course_detail .course_detail_title img').attr('src','../../images/human_market/ls_collect_yes.png');
		$('.course_detail .course_detail_title img').addClass('course_collect');
	}
})

// 合辑详情收藏按钮点击事件
$('.heji_detail .heji_detail_title .heji_click_warp').click(function(){
	if($('.heji_detail .heji_detail_title .heji_click_warp').hasClass('heji_collect')){
		$('.heji_detail .heji_detail_title .heji_click_warp img').attr('src','../../images/human_market/collect_not.png');
		$('.heji_detail .heji_detail_title .heji_click_warp p').html('收藏');
		$('.heji_detail .heji_detail_title .heji_click_warp p').css('color','#666');
		$('.heji_detail .heji_detail_title .heji_click_warp').removeClass('heji_collect');
	}else{
		$('.heji_detail .heji_detail_title .heji_click_warp img').attr('src','../../images/human_market/collect.png');
		$('.heji_detail .heji_detail_title .heji_click_warp p').css('color','#f9bc0f');
		$('.heji_detail .heji_detail_title .heji_click_warp p').html('已收藏');
		$('.heji_detail .heji_detail_title .heji_click_warp').addClass('heji_collect');
	}
})

// 点赞按钮事件
$('.pinglun_detail .pinglun_detail_ul .pinglun_dianzan').click(function(){
	var i=$('.pinglun_detail .pinglun_detail_ul .pinglun_dianzan').index(this);
	if($('.pinglun_detail .pinglun_detail_ul .pinglun_dianzan').eq(i).hasClass('pinglun_dianzan_yes')){
		$('.pinglun_detail .pinglun_detail_ul .pinglun_dianzan').eq(i).css('background-image','url(../../images/human_market/pinglun_dianzan.png)');
		$('.pinglun_detail .pinglun_detail_ul .pinglun_dianzan').eq(i).removeClass('pinglun_dianzan_yes');
	}else{
		$('.pinglun_detail .pinglun_detail_ul .pinglun_dianzan').eq(i).css('background-image','url(../../images/human_market/pinglun_dianzan_yes.png)');
		$('.pinglun_detail .pinglun_detail_ul .pinglun_dianzan').eq(i).addClass('pinglun_dianzan_yes');
	}
})
// 滚动事件
window.onscroll=function(){
	console.log(1);
	var scrollH_first= $('.course_detail').offset().top - $('.tab_switch_ul').height(); // 课程详情对顶部的距离
	var scrollH_second= $('.relate_recommen').offset().top - $('.tab_switch_ul').height(); //相关推荐对顶部的距离
	var scrollH_third= $('.pinglun').offset().top - $('.tab_switch_ul').height(); //评论对顶部的距离
	if($(document).scrollTop() >= scrollH_third){  //第三个锚点
		$('.tab_switch_ul').fadeIn(500);
		$('.tab_switch_ul').css({'position':'fixed','top':'0'});
		$('.tab_switch_ul li').eq(2).addClass('active').siblings().removeClass('active');
		$('.fabu_warp').css('position','fixed');

	}else if($(document).scrollTop() >= scrollH_second){  //第二个锚点
		$('.tab_switch_ul').fadeIn(500);
		$('.tab_switch_ul').css({'position':'fixed','top':'0'});
		$('.tab_switch_ul li').eq(1).addClass('active').siblings().removeClass('active');
		$('.fabu_warp').css('position','absolute');
	}else if($(document).scrollTop() >= scrollH_first){    //第一个锚点
		$('.tab_switch_ul').fadeIn(500);
		$('.tab_switch_ul').css({'position':'fixed','top':'0'});
		$('.tab_switch_ul li').eq(0).addClass('active').siblings().removeClass('active');
		$('.fabu_warp').css('position','absolute');
	}else{
		$('.tab_switch_ul').hide();
		$('.fabu_warp').css('position','absolute');
	}

	// 回到底部
	if($(document).scrollTop() >= $(window).height()){
		$('#toTop').fadeIn(500);
		$('#toTop').click(function(){
			$('html,body').animate({scrollTop:'0px'},1000);return false;
		});
	}
}
$('.video_play').toggle(function() {
	document.getElementsByTagName('video')[0].play();
},function() {
	document.getElementsByTagName('video')[0].pause();
})
// 锚点定位问题
var navHeight=$('.tab_switch_ul').height();
function locateAt(e){
    e =  document.getElementById(e);/*以id命名的锚点*/
    y = e.offsetTop;
    while(e=e.offsetParent){ y += e.offsetTop;}
    y-=navHeight;/*悬浮菜单的高度*/
    window.scrollTo(0,y);
    console.log(y);
}

// 发送按钮
$('.fabu_warp button').click(function(){

})

// 上拉加载
$(function(){
	var loadFlag=true;
	var pinglun=document.getElementById('pinglun');
	var n = 1, startX = 0, startY = 0, endX = 0, endY = 0;
	pinglun.addEventListener('touchstart',function (ev){
		startX=ev.touches[0].pageX;
		startY=ev.touches[0].pageY;
	}, false);
	pinglun.addEventListener('touchmove',function (ev){
//		ev.preventDefault();
		endX=ev.touches[0].pageX;
		endY=ev.touches[0].pageY;
	}, false);
	pinglun.addEventListener('touchend',function (ev){
        if (startY-endY>100) {//向上滑动
            $.ajax({
            	url:"http://www.baidu.com",
				type:"post",
				success: function(data){

				},
				error:function(){
					$(".loadtip p").show();
					if(loadFlag){
						$(".loadtip p").html('正在加载...');
					}else{
						$(".loadtip p").html('没有更多啦！');
					}
					setTimeout(function() {
						for(var i =0;i<20;i++) {
							$(".list-group").append(`
								<div class="pinglun_detail clearfix">
				    				<div class="pinglun_detail_img">
				    					<img src="../../images/human_market/header_index.png"/>
				    				</div>
				    				<ul class="pinglun_detail_ul">
				    					<li>用户名A</li>
				    					<li>用户评论用户评论用户评论用户评论用户评论用户评论用户评论</li>
				    					<li><span>3小时</span>前<div class="pinglun_dianzan">22</div></li>
				    				</ul>
				    			</div>
							`);
						}
						$(".loadtip p").hide();
						if($('.list-group').is(':empty')){
							$('#no_pinglun').css('display','block');
						}else{
							$('#no_pinglun').css('display','none');
						}
					}, 800);

				}
            })
            $(".loadtip").css('display','block');
        } else if (startY-endY<-200) {//向下滑动
        	console.log(1);
        }
    }, false);
})
