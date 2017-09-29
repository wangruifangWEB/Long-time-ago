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
							for(var i =0;i<3;i++) {
								$(".second").append(`
									<div class="second_list">
										<div class="second_list_left">
											<img src="../../images/human_market/hot_img.png" alt="" />
										</div>
										<div class="second_list_right">
											<p class="topic_name">#竹杆社区#</p>
											<p class="topic_content">北京市东城市竹杆社区服务中心，北京市东城市竹杆社区服务中心...</p>
											<div class="topic_count">
												<span class="topic_c">111条内容</span>
												<span>222次阅读</span>
											</div>
										</div>
									</div>
								`);
							}
							 $(".loadtip p").hide();
							 $('.nav_bottom').css('display','block');
							 //判断当达到第13个及倍数出现banner
							 var i=$(".second .second_list").length;
							if(i % 13 == 0){
								$(".second").append(`
									<div class="first_banner">
							    		<img src="../../images/human_market/hot_talk.png" alt="" />
									</div>
								`);
							}
							
							mySwiper.update(); // 重新计算高度;
						}, 200);
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