$(".z-activity div").click(function(){
	var i = $(this).index();
	$(this).addClass("active").siblings().removeClass('active');
	$(".z-activityul ul").eq(i).show().siblings().hide();
	if(i==0){
		$('.swiper-wrapper.w').css('transform','translate3d(0, 0, 0)');
		$('.z-healthy1').addClass('show111').siblings().removeClass('show111');
		$.ajax({
			url:"",
			type:"post",
			success:function(data){
				
			},
			error:function(){
				$('.init-loading').css('display','block');
				setTimeout(function() {
					for(var i =0;i<20;i++) {
						$(".list-group .z-healthy1").eq(mySwiper2.activeIndex).append(`
							<li>
								<div class="z-hl">
									<img src="images/nvf.png" alt="" />
								</div>
								<div class="z-hr">
									<h2>走进通州,为北京三大球加油11</h2>
									<p>时间：<span>2016.10.08</span></p>
									<p>地点：<span>通州大运河</span></p>
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
	if(i==1){
		$('.swiper-wrapper.w').css('transform','translate3d(0, 0, 0)');
		$('.z-healthy2').addClass('show111').siblings().removeClass('show111');
		$.ajax({
			type:"post",
			url:"",
			success:function(data){
				
			},
			error:function(){
				$('.init-loading').css('display','block');
				setTimeout(function() {
					for(var i =0;i<20;i++) {
						$(".list-group .z-healthy2").eq(mySwiper2.activeIndex).append(`
							<li>
								<div class="z-hr">
									<h2>走进通州,为北京三大球加油22</h2>
									<p>时间：<span>2016.10.08</span></p>
									<p>地点：<span>通州大运河</span></p>
								</div>
								<div class="z-hl">
									<a href="javascript:void(0);"><button>地点打卡</button></a>
									<a href="javascript:void(0);"><button>名单查询</button></a>
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
})
var loadFlag = true;
var oi = 0;
var mySwiper = new Swiper('.swiper-container',{
	direction: 'vertical',
	scrollbar: '.swiper-scrollbar',
	slidesPerView: 'auto',
	mousewheelControl: true,
	freeMode: true,
	speed: 0,
	onTouchMove: function(swiper){		//手动滑动中触发
		var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
		var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;
		var translateY=parseInt(mySwiper.getWrapperTranslate('y'));
		if(translateY < 0){
			$('#slider img').slideUp(400);
		}else{
			
		}
	},
	onTouchEnd: function(swiper) {
		var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
		var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;
		
		 // 上拉加载
		if(mySwiper.translate <= _viewHeight - _contentHeight - 50 && mySwiper.translate < 0) {
			if($('.z-healthy1').hasClass('show111')){
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
								$(".list-group .z-healthy1").eq(mySwiper2.activeIndex).append(`
									<li>
										<div class="z-hl">
											<img src="images/nvf.png" alt="" />
										</div>
										<div class="z-hr">
											<h2>走进通州,为北京三大球加油11</h2>
											<p>时间：<span>2016.10.08</span></p>
											<p>地点：<span>通州大运河</span></p>
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
			if($('.z-healthy2').hasClass('show111')){
				$.ajax({
					type:"post",
					url:"",
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
								$(".list-group .z-healthy2").eq(mySwiper2.activeIndex).append(`
									<li>
										<div class="z-hr">
											<h2>走进通州,为北京三大球加油22</h2>
											<p>时间：<span>2016.10.08</span></p>
											<p>地点：<span>通州大运河</span></p>
										</div>
										<div class="z-hl">
											<a href="javascript:void(0);"><button>地点打卡</button></a>
											<a href="javascript:void(0);"><button>名单查询</button></a>
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
		}
		//  刷新
		if(mySwiper.translate >= 50) {
			$('#slider img').slideDown(400);
//			$('.swiper-wrapper.w').height($(window).height()-$('.z-activity').height());
			if($('.z-healthy1').hasClass('show111')){
				$.ajax({
					url:"",
					type:"post",
					success:function(data){
						
					},
					error:function(){
						$('.init-loading').css('display','block');
						setTimeout(function() {
							for(var i =0;i<20;i++) {
								$(".list-group .z-healthy1").eq(mySwiper2.activeIndex).append(`
									<li>
										<div class="z-hl">
											<img src="images/nvf.png" alt="" />
										</div>
										<div class="z-hr">
											<h2>走进通州,为北京三大球加油11</h2>
											<p>时间：<span>2016.10.08</span></p>
											<p>地点：<span>通州大运河</span></p>
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
			if($('.z-healthy2').hasClass('show111')){
				$.ajax({
					type:"post",
					url:"",
					success:function(data){
						
					},
					error:function(){
						$('.init-loading').css('display','block');
						setTimeout(function() {
							for(var i =0;i<20;i++) {
								$(".list-group .z-healthy2").eq(mySwiper2.activeIndex).append(`
									<li>
										<div class="z-hr">
											<h2>走进通州,为北京三大球加油22</h2>
											<p>时间：<span>2016.10.08</span></p>
											<p>地点：<span>通州大运河</span></p>
										</div>
										<div class="z-hl">
											<a href="javascript:void(0);"><button>地点打卡</button></a>
											<a href="javascript:void(0);"><button>名单查询</button></a>
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
		}	
		return false;
	}
});
var mySwiper2 = new Swiper('.swiper-container2',{
	onTransitionEnd: function(swiper){
		$('.w').css('transform', 'translate3d(0px, 0px, 0px)')
		$('.swiper-container2 .swiper-slide-active').css('height','auto').siblings('.swiper-slide').css('height','0px');
		mySwiper.update();
		$('.tab a').eq(mySwiper2.activeIndex).addClass('active').siblings('a').removeClass('active');
	}
	
});