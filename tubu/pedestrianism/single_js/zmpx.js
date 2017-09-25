$('.swiper-container, .w').height($(window).height()-$('header').height()-$('.z-as-fixed').height());
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
						for(var i =0;i<10;i++) {
							$(".list-group ul").eq(mySwiper2.activeIndex).append(`
								<li>
									<div class="z-boxl">
										<div class="z-boxl1">
											<h4>
												<p>北京市</p>
												<p>奥林匹克森林公园</p>
											</h4>
											<h5>2017.04.19</h5>
										</div>
										<div class="z-boxl2 dianzan">
											<h2>1686</h2>
											<p>点赞</p>
										</div>
										<div class="z-boxl2">
											<h2>354</h2>
											<p>评论</p>
										</div>
									</div>
									<div class="z-boxr">
										<img class="z-boxr-bg" src="../images/z-hu_03.jpg	" alt="">
										<div class="z-boxr-bottom">
											<img src="../images/z-moon.png" alt="">
											<span>拔剑乌托邦</span>
											<p class="z-boxr-border">9</p>
										</div>
									</div>
								</li>
							`);
						}
						$(".loadtip p").hide();
						 $('#listul li:nth-last-child(1)').css({'margin-bottom':'0.4rem'});
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
						for(var i =0;i<10;i++) {
							$(".list-group ul").eq(mySwiper2.activeIndex).append(`
								<li>
									<div class="z-boxl">
										<div class="z-boxl1">
											<h4>
												<p>北京市</p>
												<p>奥林匹克森林公园</p>
											</h4>
											<h5>2017.04.19</h5>
										</div>
										<div class="z-boxl2 dianzan">
											<h2>1686</h2>
											<p>点赞</p>
										</div>
										<div class="z-boxl2">
											<h2>354</h2>
											<p>评论</p>
										</div>
									</div>
									<div class="z-boxr">
										<img class="z-boxr-bg" src="../images/z-hu_03.jpg	" alt="">
										<div class="z-boxr-bottom">
											<img src="../images/z-moon.png" alt="">
											<span>拔剑乌托邦</span>
											<p class="z-boxr-border">9</p>
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