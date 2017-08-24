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
		initialSlide :0,
	    observer:true,//修改swiper自己或子元素时，自动初始化swiper
	    observeParents:true,//修改swiper的父元素时，自动初始化swiper
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
						$('.nav_bottom').css('display','none');
						$(".loadtip p").show();
						if(loadFlag){
							$(".loadtip p").html('正在加载...');
						}else{
							$(".loadtip p").html('没有更多啦！');
						}
						setTimeout(function() {
							for(var i =0;i<6;i++) {
								$(".list-group").append(`
									<div class="tab_switch_first_cont">
									<div class="tab_switch_msg">
										<img src="../../images/human_market/pl_small.png" alt="" />
										<p>评论消息</p>
									</div>
									<div class="tab_switch_cont_detail_title">
										<p class="tab_switch_cont_detail_title_time">17分钟前</p>
										<div class="tab_switch_cont_detail_title_img">
											<img src="../../images/human_market/header_index.png" alt=""/>
										</div>
										<div class="tab_switch_cont_detail_title_name_warp">
											<p class="tab_switch_cont_detail_title_name">用户名A</p>
											<p class="tab_switch_huifu clearfix">回复@test：你今天晚上吃什么</p>
										</div>
									</div>
								</div>
								`);
							}
							 $(".loadtip p").hide();
							 $('.nav_bottom').css('display','block');
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
						$('.nav_bottom').css('display','none');
						$(".init-loading").show();
						if(loadFlag){
//							
						}else{
//								
						}
						setTimeout(function() {
							for(var i =0;i<6;i++) {
								for(var i =0;i<6;i++) {
									$(".list-group").append(`
										<div class="tab_switch_first_cont">
										<div class="tab_switch_msg">
											<img src="../../images/human_market/pl_small.png" alt="" />
											<p>评论消息</p>
										</div>
										<div class="tab_switch_cont_detail_title">
											<p class="tab_switch_cont_detail_title_time">17分钟前</p>
											<div class="tab_switch_cont_detail_title_img">
												<img src="../../images/human_market/header_index.png" alt=""/>
											</div>
											<div class="tab_switch_cont_detail_title_name_warp">
												<p class="tab_switch_cont_detail_title_name">用户名A</p>
												<p class="tab_switch_huifu clearfix">回复@test：你今天晚上吃什么</p>
											</div>
										</div>
									</div>
									`);
								}
							}
							 $(".init-loading").hide();
							 $('.nav_bottom').css('display','block');
							mySwiper.update(); // 重新计算高度;
						}, 800);
					}
				});
			}
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
});