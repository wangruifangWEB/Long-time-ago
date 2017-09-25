var li_len=Math.ceil($('.zutp_list li').length/3);
var ul_len=li_len*$('.zutp_list li').height();
$('.zutp_list').height(ul_len);



var buchongH=parseInt(0.23*100);
$('.talk_message').css('top',$('header').height() + $('.zutp_list').height() +buchongH+'px' );

if($('.zutp_list li').length==4){
	$('.zutp_list li:nth-child(2)').css('margin-right','30px');
	$('.zutp_list li:nth-child(3)').css('margin-right','0.06rem');
}
$('.swiper-wrapper .w').height($(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('.z-tab').height());
$('.swiper1').height($(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('.z-tab').height());
$('.talk_message').height($(window).height()-$('header').height()-$('.zutp_list').height());
$('.swiper2').height($('.talk_message').height()-$('.talk_message_title').height())
var winHeight=$(window).height();
$('.play_toggle').click(function(){
	var vid=document.getElementById('vid');
	vid.play();
	$('.play_toggle').css('display','none');
})
$('.scroll').height($(window).height());
$('.read_cont').height($(window).height()-$('header').height());
$('.read_cont').css('top',$(window).height());

var intro_detail_len=$(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height();
var intro_detail_len_all=$(window).height()-intro_detail_len;

$('.intro_detail').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height()-20+'px');
$('.intro_detail').css('top',intro_detail_len_all+20+'px');

$('.swiper1 .swiper-container,.swiper1 .w').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height()-25+'px');
$('.swiper2 .swiper-container,.swiper2 .w').height($(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('.talk_message_title').outerHeight()-$('.z-sr').outerHeight()-20+'px');


$('.on2').click(function() {
	$('.z-sr').animate({'left':'50%'});
	$(this).find('a').addClass("active");
	$('.talk_message').animate({'left':'0'});
	$('.z-sr').animate({'left':'50%'});
	
	$('.face-content').animate({'left':'0'});
	$('.talk_hidden').animate({'display':'none'});
})

$('.on1').one('click',function(){ 
	$(this).find('img').attr('src',$(this).find('img').attr('data'));
	$('.notice_layer').html('您已成功点赞');
	$('.notice_layer').show();
	$('.notice_layer').fadeOut(1000);
})


$('.on3').click(function() { 
	$(".bg123").show();
})
$('.z-sr').click(function(){
	$('.read_cont').animate({'top':'0.98rem'});
	document.getElementById("textfocus").focus();
	$('.read_cont_detail').val('');
})
$('.bg123').click(function(){
	$(this).hide();
	$('.on3 img').attr('src','../images/qr-c-1.png');
})
$('.btn').click(function(){
	var oldVal=$('#text').html();
	var newVal=$('.read_cont_detail').html()+oldVal;
	$('.read_cont_detail').html(newVal);
	$('#text').html('');
})
$('.intro_portal .intro_portal_click').click(function(){
	$('.intro_detail').animate({'left':'0'});
})
$('.talk_message_cont_send').click(function(){
	$('.read_cont').animate({'top':winHeight});
	$('.read_cont_detail').val('');
})
$('.talk_message_cont_return').click(function(){
	$('.read_cont').animate({'top':winHeight});
	$('.read_cont_detail').val('');
})
$('.intro_detail_portal_click').click(function(){
	$('.intro_detail').animate({'left':'7.5rem'});
})
$('.talk_message_title .talk_message_title_close').click(function(){
	$('.talk_hidden').css('display','block');
	$('.talk_message').animate({'left':'7.5rem'});
	$('.face-content').animate({'left':'7.5rem'});
	$('.on2 img').attr('src','../images/qr-d-1.png');
	$('.z-sr').animate({'left':'200%'});
	$('.talk_hidden').animate({'left':'0'});
})



$('.intro_detail_txt').css({'min-height':$(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('z-tab').outerHeight()-$('.intro_detail_portal').outerHeight()-$('.intro_detail_addr').outerHeight()});

$('.z-tab-box').on('scroll',function(){
   var top = parseInt($('.z-dz-box').height()) + 30;
   if($('.z-tab-box').scrollTop() >= top){
   	$('.on2 a').addClass('active');
   	$('.on2 a img').attr('src',$('.on2 a  img').attr('data'));
   }else{
   	$('.on2 a').removeClass('active');
   	$('.on2 a img').attr('src',$('.on2 a  img').attr('rel'));
   }
});


var loadFlag = true;
var mySwiper1 = new Swiper('.swiper1 .swiper-container',{
	direction: 'vertical',
	scrollbar: '.swiper1 .swiper-scrollbar',
	slidesPerView: 'auto',
	mousewheelControl: true,
	freeMode: true,
	onTouchMove: function(swiper){		//手动滑动中触发
		var swiper1=document.getElementById('swiper1');
		var _viewHeight = swiper1.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
		var _contentHeight = swiper1.getElementsByClassName('swiper-slide')[0].offsetHeight;
		var translateY=parseInt(mySwiper1.getWrapperTranslate('y'));
//		console.log(translateY);
		if($('.zutp_list li').length>6){
			if(translateY < 0){
				$('.zutp_list li:nth-child(6)').nextAll().slideUp();
				$('.zutp_list').height(2*$('.zutp_list li').height());
				$('.swiper1 .swiper-container,.swiper1 .w').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height()-25+'px');
				$('.swiper2 .swiper-container,.swiper2 .w').height($(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('.talk_message_title').outerHeight()-$('.z-sr').outerHeight()-20+'px');
				var intro_detail_len=$(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height();
				var intro_detail_len_all=$(window).height()-intro_detail_len;
				$('.intro_detail').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height()-20+'px');
				$('.intro_detail').css('top',intro_detail_len_all+20+'px');
				$('.talk_message').height($(window).height()-$('header').height()-$('.zutp_list').height());
				var buchongH=parseInt(0.23*100);
				$('.talk_message').css({'top':$('header').height() + $('.zutp_list').height() +buchongH+'px','background-color':'#fff'});
				$('.swiper1').height($(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('.z-tab').height());
				$('.swiper-wrapper .w').height($(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('.z-tab').height());
				$('.intro_detail_txt').css({'min-height':$(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('z-tab').outerHeight()-$('.intro_detail_portal').outerHeight()-$('.intro_detail_addr').outerHeight()});
			}
			if(translateY > 0){
				
				$('.zutp_list').height(3*$('.zutp_list li').height());
				$('.zutp_list li:nth-child(6)').nextAll().slideDown(500);
				$('.swiper1 .swiper-container,.swiper1 .w').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height()-25+'px');
				$('.swiper2 .swiper-container,.swiper2 .w').height($(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('.talk_message_title').outerHeight()-$('.z-sr').outerHeight()-20+'px');
				var intro_detail_len=$(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height();
				var intro_detail_len_all=$(window).height()-intro_detail_len;
				$('.intro_detail').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height()-20+'px');
				$('.intro_detail').css('top',intro_detail_len_all+20+'px');
				$('.talk_message').height($(window).height()-$('header').height()-$('.zutp_list').height());
				var buchongH=parseInt(0.23*100);
				$('.talk_message').css({'top':$('header').height() + $('.zutp_list').height() +buchongH+'px','background-color':'#fff'});
				$('.swiper1').height($(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('.z-tab').height());
				$('.swiper-wrapper .w').height($(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('.z-tab').height());
				$('.intro_detail_txt').css({'min-height':$(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('z-tab').outerHeight()-$('.intro_detail_portal').outerHeight()-$('.intro_detail_addr').outerHeight()});
			}
		}
		
	},
	onTouchEnd: function(swiper) {
		var swiper1=document.getElementById('swiper1');
		var _viewHeight = swiper1.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
		var _contentHeight = swiper1.getElementsByClassName('swiper-slide')[0].offsetHeight;
		 // 上拉加载
		
		if(mySwiper1.translate <= _viewHeight - _contentHeight - 50 && mySwiper1.translate < 0) {
			/*$('.zutp_list li:nth-child(6)').nextAll().slideUp();
			$('.zutp_list').height(2*$('.zutp_list li').height());
			$('.swiper1 .swiper-container,.swiper1 .w').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height()+'px');
			$('.swiper2 .swiper-container,.swiper2 .w').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.talk_message_title').height()-$('.z-sr').height()+'px');
*/
			$.ajax({
				url:"",
				type:"post",
				success:function(data){
					
				},
				error:function(){
					if(loadFlag){
						$(".loadtip p").show();
						$(".loadtip p").html('正在加载...');
					}else{
						$(".loadtip p").show();
						$(".loadtip p").html('没有更多啦！');
					}
					setTimeout(function() {
						for(var i =0;i<6;i++) {
							$(".swiper1 .list-group .other_zm_ul").append(`
								<li class="other_zm_li">
									<div class="other_zm_li_left">
										<img src="../images/nvf.png" alt="" />
									</div>
									<div class="other_zm_li_right">
										<p class="address">北京市奥林匹克森林公园</p>
										<p class="time">时间：<span>2017.04.19</span></p>
										<p class="praise">获赞：<span>688</span></p>
									</div>
								</li>
							`);
						}
						$(".loadtip p").hide();
						mySwiper1.update(); // 重新计算高度;
					}, 800);
				}
			});
		}
		return false;
	}
});

// 评论下拉
var mySwiper2 = new Swiper('.swiper2 .swiper-container',{
	direction: 'vertical',
	scrollbar: '.swiper2 .swiper-scrollbar',
	slidesPerView: 'auto',
	mousewheelControl: true,
	freeMode: true,
	onTouchMove: function(swiper){		//手动滑动中触发
		var swiper2=document.getElementById('swiper2');
		var _viewHeight = swiper2.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
		var _contentHeight = swiper2.getElementsByClassName('swiper-slide')[0].offsetHeight;
		$('.talk_hidden').css({'display':'none'});
		var translateY=parseInt(mySwiper2.getWrapperTranslate('y'));
		if($('.zutp_list li').length>6){
			if(translateY < 0){  
				$('.zutp_list li:nth-child(6)').nextAll().slideUp();
				$('.zutp_list').height(2*$('.zutp_list li').height());
				$('.swiper1 .swiper-container,.swiper1 .w').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height()-25+'px');
				$('.swiper2 .swiper-container,.swiper2 .w').height($(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('.talk_message_title').outerHeight()-$('.z-sr').outerHeight()-20+'px');
				var intro_detail_len=$(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height();
				var intro_detail_len_all=$(window).height()-intro_detail_len;
				$('.intro_detail').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height()-20+'px');
				$('.intro_detail').css('top',intro_detail_len_all+20+'px');
				$('.talk_message').height($(window).height()-$('header').height()-$('.zutp_list').height());
				var buchongH=parseInt(0.23*100);
				$('.talk_message').css({'top':$('header').height() + $('.zutp_list').height() +buchongH+'px','background-color':'#fff'});
				$('.intro_detail_txt').css({'min-height':$(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('z-tab').outerHeight()-$('.intro_detail_portal').outerHeight()-$('.intro_detail_addr').outerHeight()});
			}
			if(translateY > 0){
				$('.zutp_list li:nth-child(6)').nextAll().slideDown(500);
				// setInterval(function(){
					$('.zutp_list').height(3*$('.zutp_list li').height());
				// },500)
				$('.swiper1 .swiper-container,.swiper1 .w').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height()-25+'px');
				$('.swiper2 .swiper-container,.swiper2 .w').height($(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('.talk_message_title').outerHeight()-$('.z-sr').outerHeight()-20+'px');
				var intro_detail_len=$(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height();
				var intro_detail_len_all=$(window).height()-intro_detail_len;
				$('.intro_detail').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height()-20+'px');
				$('.intro_detail').css('top',intro_detail_len_all+20+'px');
				$('.talk_message').height($(window).height()-$('header').height()-$('.zutp_list').height());
				var buchongH=parseInt(0.23*100);
				$('.talk_message').css({'top':$('header').height() + $('.zutp_list').height() +buchongH+'px','background-color':'#fff'});
				$('.intro_detail_txt').css({'min-height':$(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('z-tab').outerHeight()-$('.intro_detail_portal').outerHeight()-$('.intro_detail_addr').outerHeight()});

			}
		}
	},
	onTouchEnd: function(swiper) {
		var swiper2=document.getElementById('swiper2');
		var _viewHeight = swiper2.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
		var _contentHeight = swiper2.getElementsByClassName('swiper-slide')[0].offsetHeight;
		$('.talk_hidden').css({'display':'none'});
		
		 // 上拉加载
		if(mySwiper2.translate <= _viewHeight - _contentHeight - 50 && mySwiper2.translate < 0) {
			$.ajax({
				url:"",
				type:"post",
				success:function(data){
					
				},
				error:function(){
					if(loadFlag){
						$(".loadtip p").show();
						$(".loadtip p").html('正在加载...');
						$('.z-sr').hide();
					}else{
						$(".loadtip p").show();
						$(".loadtip p").html('没有更多啦！');
						$('.z-sr').hide();
					}
					setTimeout(function() {
						for(var i =0;i<6;i++){
							$(".swiper2 .list-group .talk_message_ul").append(`
								<li class="talk_message_list">
									<div class="talk_message_list_left">
										<img src="../images/z-moon.png" alt="" />
									</div>
									<div class="talk_message_list_right">
										<p class="talk_message_list_right_name">拔剑乌托邦</p>
										<p class="talk_message_list_right_detail">写的很好，遗憾未能参见！</p>
									</div>
								</li>
							`);
						}
						$(".loadtip p").hide();
						$('.z-sr').show();
						mySwiper2.update(); // 重新计算高度;
					}, 800);
				}
			});
		}
		return false;
	}
});

// if($('.zutp_list li').length>6){
// 	var intro_detail=document.getElementById('intro_detail');
// 	var n = 1, startX = 0, startY = 0, endX = 0, endY = 0;
// 	intro_detail.addEventListener('touchstart',function (ev){
// 		startX=ev.touches[0].pageX;
// 		startY=ev.touches[0].pageY;
// 	}, false);
//     intro_detail.addEventListener('touchmove',function (ev){
//     	ev.preventDefault();
//     	endX=ev.touches[0].pageX;
// 		endY=ev.touches[0].pageY;
//     }, false);
// 	intro_detail.addEventListener('touchend',function (ev){
//         if (startY-endY>50) {//向上滑动
//         	ev.stopPropagation();
//             $('.zutp_list li:nth-child(6)').nextAll().slideUp(500);
//             // setInterval(function(){
//             	$('.zutp_list').height(2*$('.zutp_list li').height());
//             // },500)
			
// 			$('.swiper1 .swiper-container,.swiper1 .w').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height()-25+'px');
// 			$('.swiper2 .swiper-container,.swiper2 .w').height($(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('.talk_message_title').outerHeight()-$('.z-sr').outerHeight()-20+'px');
// 			var intro_detail_len=$(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height();
// 			var intro_detail_len_all=$(window).height()-intro_detail_len;
// 			$('.intro_detail').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height()-20+'px');
// 			$('.intro_detail').css('top',intro_detail_len_all+20+'px');
// 			$('.talk_message').height($(window).height()-$('header').height()-$('.zutp_list').height());
// 			var buchongH=parseInt(0.23*100);
// 			$('.talk_message').css({'top':$('header').height() + $('.zutp_list').height() +buchongH+'px','background-color':'#fff'});
// 			$('.intro_detail_txt').css({'min-height':$(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('z-tab').outerHeight()-$('.intro_detail_portal').outerHeight()-$('.intro_detail_addr').outerHeight()});
//         } else if (startY-endY<-50) {//向下滑动
//         	$('.zutp_list li:nth-child(6)').nextAll().slideDown();
// 			$('.zutp_list').height(3*$('.zutp_list li').height());
// 			$('.swiper1 .swiper-container,.swiper1 .w').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height()-25+'px');
// 			$('.swiper2 .swiper-container,.swiper2 .w').height($(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('.talk_message_title').outerHeight()-$('.z-sr').outerHeight()-20+'px');
// 			var intro_detail_len=$(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height();
// 			var intro_detail_len_all=$(window).height()-intro_detail_len;
// 			$('.intro_detail').height($(window).height()-$('header').height()-$('.zutp_list').height()-$('.z-tab').height()-20+'px');
// 			$('.intro_detail').css('top',intro_detail_len_all+20+'px');
// 			$('.talk_message').height($(window).height()-$('header').height()-$('.zutp_list').height());
// 			var buchongH=parseInt(0.23*100);
// 			$('.talk_message').css({'top':$('header').height() + $('.zutp_list').height() +buchongH+'px','background-color':'#fff'});
// 			$('.swiper1').height($(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('.z-tab').height());
// 			$('.swiper-wrapper .w').height($(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('.z-tab').height());
// 			$('.intro_detail_txt').css({'min-height':$(window).height()-$('header').height()-$('.zutp_list').outerHeight()-$('z-tab').outerHeight()-$('.intro_detail_portal').outerHeight()-$('.intro_detail_addr').outerHeight()});
//         }
//     }, false);
// }

