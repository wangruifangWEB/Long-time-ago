$('.swiper-container, .w').height($(window).height()-$('header').height()-$('.xd-tab-ul-box').height()-20+'px');
$(".xd-tab-ul li").click(function() {
	$(".xd-tab-div").hide(); 
	$(".xd-tab-ul li").removeClass("active");
	$(this).addClass("active");
	$(".su-tab .xd-tab-div").eq($(this).index()).show();
	$('body,html').animate({scrollTop:0},0); 
	var i=$(this).index();
	if(i==0){
		$('.xd-tab-div1').addClass('show111').siblings().removeClass('show111');
		$('.xd-tab-div1').empty();
		$.ajax({
			url:"",
			type:"post",
			success:function(data){
				
			},
			error:function(){
				$('.init-loading img').show();
				setTimeout(function() {
					
					for(var i =0;i<6;i++) {
						$(".list-group .xd-tab-div1").eq(mySwiper2.activeIndex).append(`
							<div class="box-img">
								<div class="box-img-img">
									<img src="../images/yi2.jpg" alt="" class="img" />
									<div class="introduce">
										<img src="../images/mc.png" alt="" class="mc" />
										<span>徒步<br />活动</span>
									</div>
								</div>
								<img src="../images/wei.png" alt="" class="weixin" />
							</div>
						`);
					}
					$('.init-loading img').hide();
					mySwiper.update(); // 重新计算高度;
					huadong();
				}, 800);
			}
			
		});
	}
	if(i==1){
		$('.xd-tab-div2').addClass('show111').siblings().removeClass('show111');
		$('.xd-tab-div2').empty();
		$.ajax({
			type:"post",
			url:"",
			success:function(data){
				
			},
			error:function(){
				$('.init-loading img').show();
				setTimeout(function() {
					for(var i =0;i<6;i++) {
						$(".list-group .xd-tab-div2").eq(mySwiper2.activeIndex).append(`
							<div class="box-img">
								<div class="box-img-img">
									<img src="../images/wei1.jpg" alt="" class="img" />
									<div class="introduce">
										<img src="../images/mc.png" alt="" class="mc" />
										<span>徒步<br />活动</span>
									</div>
								</div>
								<img src="../images/yi.png" alt="" class="weixin" />
							</div>
						`);
					}
					$('.init-loading img').hide();
					mySwiper.update(); // 重新计算高度;
					huadong();
				}, 800);
				
			}
		});
	}
})
// 加载刷新
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
			if($('.xd-tab-div1').hasClass('show111')){
				$(".loadtip p").show();
				if(loadFlag){
					$(".loadtip p").html('正在加载...');
				}else{
					$(".loadtip p").html('没有更多啦！');
				}
				$.ajax({
					url:"",
					type:"post",
					success:function(data){
						
					},
					error:function(){
						setTimeout(function() {
							for(var i =0;i<6;i++) {
								$(".list-group .xd-tab-div1").eq(mySwiper2.activeIndex).append(`
									<div class="box-img">
										<div class="box-img-img">
											<img src="../images/yi2.jpg" alt="" class="img" />
											<div class="introduce">
												<img src="../images/mc.png" alt="" class="mc" />
												<span>徒步<br />活动</span>
											</div>
										</div>
										<img src="../images/wei.png" alt="" class="weixin" />
									</div>
								`);
							}
							 $(".loadtip p").hide();
							mySwiper.update(); // 重新计算高度;
							huadong();
						}, 800);
					}
				});
			}
			if($('.xd-tab-div2').hasClass('show111')){
				$(".loadtip p").show();
				if(loadFlag){
					$(".loadtip p").html('正在加载...');
				}else{
					$(".loadtip p").html('没有更多啦！');
				}
				$.ajax({
					type:"post",
					url:"",
					success:function(data){
						
					},
					error:function(){
						setTimeout(function() {
							for(var i =0;i<6;i++) {
								$(".list-group .xd-tab-div2").eq(mySwiper2.activeIndex).append(`
									<div class="box-img"> 
										<div class="box-img-img">
											<img src="../images/wei1.jpg" alt="" class="img" />
											<div class="introduce">
												<img src="../images/mc.png" alt="" class="mc" />
												<span>徒步<br />活动</span>
											</div>
										</div>
										<img src="../images/yi.png" alt="" class="weixin" />
									</div>
								`);
							}
							 $(".loadtip p").hide();
							mySwiper.update(); // 重新计算高度;
							huadong();
						}, 800);
					}
				});
			}	
		}
		// 下拉刷新
		if(mySwiper.translate >= 50) {
			if($('.xd-tab-div1').hasClass('show111')){
				$.ajax({
					url:"",
					type:"post",
					success:function(data){
						
					},
					error:function(){
						$('.init-loading img').show();
						setTimeout(function() {
							for(var i =0;i<6;i++) {
								$(".list-group .xd-tab-div1").eq(mySwiper2.activeIndex).append(`
									<div class="box-img">
										<div class="box-img-img">
											<img src="../images/yi2.jpg" alt="" class="img" />
											<div class="introduce">
												<img src="../images/mc.png" alt="" class="mc" />
												<span>徒步<br />活动</span>
											</div>
										</div>
										<img src="../images/wei.png" alt="" class="weixin" />
									</div>
								`);
							}
							$('.init-loading img').hide();
							mySwiper.update(); // 重新计算高度;
							huadong();
						}, 800);
					}
					
				});
				
			}
			if($('.xd-tab-div2').hasClass('show111')){
				$.ajax({
					type:"post",
					url:"",
					success:function(data){
						
					},
					error:function(){
						$('.init-loading img').show();
						setTimeout(function() {
							for(var i =0;i<6;i++) {
								$(".list-group .xd-tab-div2").eq(mySwiper2.activeIndex).append(`
									<div class="box-img"> 
										<div class="box-img-img">
											<img src="../images/wei1.jpg" alt="" class="img" />
											<div class="introduce">
												<img src="../images/mc.png" alt="" class="mc" />
												<span>徒步<br />活动</span>
											</div>
										</div>
										<img src="../images/yi.png" alt="" class="weixin" />
									</div>
								`);
							}
							$('.init-loading img').hide();
							mySwiper.update(); // 重新计算高度;
							huadong();
							
						}, 800);
						
					}
				});
				
			}
		}	
		return false;
	}
});
var mySwiper2 = new Swiper('.swiper-container2',{
	onTransitionEnd: function(swiper){
		$('.swiper-container2 .swiper-slide-active').css('height','auto').siblings('.swiper-slide').css('height','0px');
		mySwiper.update();
		$('.tab a').eq(mySwiper2.activeIndex).addClass('active').siblings('a').removeClass('active');
	}
	
});
	huadong();
$("body").on('click','.weixin',function(e) { 
	var that=e.target;
	var _this = $(this)
	$(this).parent('.box-img').find(".box-img-img").css('visibility','hidden');
	$(this).css('visibility','hidden');
	$(this).parent('.box-img').animate({height: "0"}, 200,function(){
		$(that).parent('.box-img').remove();
	});
}) 		


function huadong(e){
	// 设定每一行的宽度=屏幕宽度+按钮宽度
	// 设定常规信息区域宽度=屏幕宽度 
	$(".dy").width($(document).width());
	$(".dingyue").width($(".dy").width() + $(".c-qxdy").width());

	// 获取所有行，对每一行设置监听
	var lines = $(".xd-tab-div .box-img-img");
	var len = lines.length;
	var lastX, lastXForMobile;

	// 用于记录被按下的对象
	var pressedObj; // 当前左滑的对象
	var lastLeftObj; // 上一个左滑的对象

//			// 用于记录按下的点
	var start;
//
//			// 网页在移动端运行时的监听
	for(var i = 0; i < len; ++i) {
		lines[i].addEventListener('touchstart', function(e) {
			lastXForMobile = e.changedTouches[0].pageX;
			pressedObj = this; // 记录被按下的对象 

			// 记录开始按下时的点
			var touches = event.touches[0];
			start = {
				x: touches.pageX, // 横坐标
				y: touches.pageY // 纵坐标
			};
		});

		lines[i].addEventListener('touchmove', function(e) {
			var touches = event.touches[0];
			delta = {
				x: touches.pageX - start.x,
				y: touches.pageY - start.y
			};
			if(Math.abs(delta.x) > Math.abs(delta.y)) {
				event.preventDefault();
			}
		});

		lines[i].addEventListener('touchend', function(e) {
			if(lastLeftObj && pressedObj != lastLeftObj) { // 点击除当前左滑对象之外的任意其他位置
				$(lastLeftObj).animate({
					left: "0"
				}, 100); // 右滑  
				lastLeftObj = null; // 清空上一个左滑的对象 
			}
			var diffX = e.changedTouches[0].pageX - lastXForMobile;
			if(diffX > 100) {
				$(pressedObj).animate({
					left: "0.63rem"
				}, 100); // 左滑 
				lastLeftObj && lastLeftObj != pressedObj &&
					$(lastLeftObj).animate({
						left: "0"
					}, 100); // 已经左滑状态的按钮右滑
				lastLeftObj = pressedObj; // 记录上一个左滑的对象 
			} else if(diffX < 100) {
				if(pressedObj == lastLeftObj) {
					$(pressedObj).animate({
						left: "0"
					}, 100); // 右滑
					lastLeftObj = null; // 清空上一个左滑的对象  
				}
			} 
		});
	}
}