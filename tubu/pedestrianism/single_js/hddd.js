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
						for(var i =0;i<6;i++) {
							$(".list-group").eq(mySwiper2.activeIndex).append(`
								<div class="z-h">
									<div class="z-hl">
										<img src="../images/lsj.png" alt="">
									</div>
									<div class="z-hr">
										<h2>走进通州，为北京三大球加油</h2>
										<p>时间：<span>2017.05.06</span></p>
										<p>专家：<span>再见流月</span></p>
									</div>
								</div>
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
			$.ajax({
				url:"",
				type:"post",
				success:function(data){
					
				},
				error:function(){
					$('.init-loading').css('display','block');
					setTimeout(function() {
						for(var i =0;i<20;i++) {
							$(".list-group").eq(mySwiper2.activeIndex).append(`
								<div class="z-h">
									<div class="z-hl">
										<img src="../images/lsj.png" alt="">
									</div>
									<div class="z-hr">
										<h2>走进通州，为北京三大球加油</h2>
										<p>时间：<span>2017.05.06</span></p>
										<p>专家：<span>再见流月</span></p>
									</div>
								</div>
							`);
						}
						$('.init-loading').css('display','none');
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
//				$('.w').css('transform', 'translate3d(0px, 0px, 0px)')
		$('.swiper-container2 .swiper-slide-active').css('height','auto').siblings('.swiper-slide').css('height','0px');
		mySwiper.update();
		$('.tab a').eq(mySwiper2.activeIndex).addClass('active').siblings('a').removeClass('active');
	}
	
});