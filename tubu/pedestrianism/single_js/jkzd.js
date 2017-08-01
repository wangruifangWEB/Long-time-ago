$(document).ready(function () {
	var dotWidth=0.40*$('div.flicking_con a').length;
	var dotWidth2=parseInt(dotWidth)+'rem';
	$('div.flicking_con .flicking_inner').width(dotWidth2);
	dotWidth=-dotWidth/2;
	$('div.flicking_con .flicking_inner').css({'margin-left':dotWidth+'rem'});
	$(".main_visual").hover(function(){
		$("#btn_prev,#btn_next").fadeIn()
		},function(){
		$("#btn_prev,#btn_next").fadeOut()
		})
	$dragBln = false;
	$(".main_image").touchSlider({
		flexible : true,
		speed : 200,
		btn_prev : $("#btn_prev"),
		btn_next : $("#btn_next"),
		paging : $(".flicking_con a"),
		counter : function (e) {
			$(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	$(".main_image").bind("mousedown", function() {
		$dragBln = false;
	})
	$(".main_image").bind("dragstart", function() {
		$dragBln = true;
	})
	$(".main_image a").click(function() {
		if($dragBln) {
			return false;
		}
	})
	timer = setInterval(function() { $("#btn_next").click();}, 5000);
	$(".main_visual").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() { $("#btn_next").click();}, 5000);
	})
	$(".main_image").bind("touchstart", function() {
		clearInterval(timer);
	}).bind("touchend", function() {
		timer = setInterval(function() { $("#btn_next").click();}, 5000);
	})
});


$('.swiper-container, .w').height($(window).height()-$('header').height()-10+'px');
var loadFlag = true;
var oi = 0;
var mySwiper = new Swiper('.swiper-container',{
	direction: 'vertical',
	scrollbar: '.swiper-scrollbar',
	slidesPerView: 'auto',
	mousewheelControl: true,
	freeMode: true,
	onTouchMove: function(swiper){		//手动滑动中触发
		var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
		var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;
		var translateY=parseInt(mySwiper.getWrapperTranslate('y'));
		if(translateY < 0){
			$('.z-bg,.z-bg img').slideUp(400);
		}else{
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
					$(".loadtip p").show();
					if(loadFlag){
						$(".loadtip p").html('正在加载...');
					}else{
						$(".loadtip p").html('没有更多啦！');
					}
					setTimeout(function() {
						for(var i =0;i<20;i++) {
							$(".list-group ul").eq(mySwiper2.activeIndex).append(`
								<li>
									<div class="z-boxl">
										<div class="z-boxl1">
											<h4>
												<p>第一次徒步？</p>
												<p>你应该注意这些。</p>
											</h4>
											<h5>2017.05.06</h5>
										</div>
										<div class="z-boxl2">
											<h2>1686</h2>
											<p>售价（¥）</p>
										</div>
										<div class="z-boxl2">
											<h2>354</h2>
											<p>评论</p>
										</div>
									</div>
									<div class="z-boxr">
										<img class="z-boxr-bg" src="../images/z-hu_03.jpg" alt="">
										<div class="z-boxr-bottom">
											<img src="../images/z-moon.png" alt="">
											<span>再见六月</span>
										</div>
									</div>
								</li>
							`);
						}
							$(".loadtip p").hide();
						mySwiper.update(); // 重新计算高度;
					}, 800);
				}
			});
		}
		//  刷新
		if(mySwiper.translate >= 50) {
			$('.z-bg,.z-bg img').slideDown(400);
			$.ajax({
				url:"",
				type:"post",
				success:function(data){
					
				},
				error:function(){
					$('.init-loading').css('display','block');
					setTimeout(function() {
						for(var i =0;i<20;i++) {
							$(".list-group ul").eq(mySwiper2.activeIndex).append(`
								<li>
									<div class="z-boxl">
										<div class="z-boxl1">
											<h4>
												<p>第一次徒步？</p>
												<p>你应该注意这些。</p>
											</h4>
											<h5>2017.05.06</h5>
										</div>
										<div class="z-boxl2">
											<h2>1686</h2>
											<p>售价（¥）</p>
										</div>
										<div class="z-boxl2">
											<h2>354</h2>
											<p>评论</p>
										</div>
									</div>
									<div class="z-boxr">
										<img class="z-boxr-bg" src="../images/z-hu_03.jpg" alt="">
										<div class="z-boxr-bottom">
											<img src="../images/z-moon.png" alt="">
											<span>再见六月</span>
										</div>
									</div>
								</li>
							`);
						}
						$('.init-loading').css('display','none');
						mySwiper.update(); // 重新计算高度;
					}, 800);
				}
			});
		}
			
//				}else if(mySwiper.translate >= 0 && mySwiper.translate < 50){
//					$(".init-loading").html('').hide();
//				}
		return false;
	}
});
var mySwiper2 = new Swiper('.swiper-container2',{
	onTransitionEnd: function(swiper){
//				$('.w').css('transform', 'translate3d(0px, 0px, 0px)')
		$('.swiper-container2 .swiper-slide-active').css('height','auto').siblings('.swiper-slide').css('height','0px');
		mySwiper.update();
		$('.tab a').eq(mySwiper2.activeIndex).addClass('active').siblings('a').removeClass('active');
	}
	
});
