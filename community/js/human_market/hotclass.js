 	$(function(){	
//	   	$('.swiper-container, .w').height($(window).height()-$('.search_warp').height()-$('#slider').height()-$('.second_list').height()-$(".class_good").height());
	   	$('.swiper-container, .w').height($(window).height()-$('.top_content').height());
	
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
											<div class="tab_switch_cont_detail_title">
												<div class="tab_switch_cont_detail_title_img">
													<img src="../../images/human_market/header_index.png" alt=""/>
												</div>
												<div class="tab_switch_cont_detail_title_name_warp">
													<p class="tab_switch_cont_detail_title_name">用户名</p>
													<p class="tab_switch_cont_detail_title_time">3小时前</p>
												</div>
											</div>
											<div class="tab_switch_cont_detail_img">
												<img src="../../images/human_market/index_banner.png" alt="" />
												<div class="tab_switch_cont_detail_img_info">
													<p class="tab_switch_cont_detail_img_name">轻享美食生活</p>
													<p class="tab_switch_cont_detail_img_huati">#话题</p>
												</div>
												<p class="course_type tuwen_bg">图文</p>
											</div>
											<div class="tab_switch_cont_detail_remark">
												<p class="tab_switch_cont_detail_remark_left"><span>20万</span>人观看 / <span>20万</span>人评论</p>
												<p class="tab_switch_cont_detail_remark_right">视频</p>
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
							$('.init-loading').css('display','block');
							setTimeout(function() {
								for(var i =0;i<20;i++) {
									$(".list-group").append(`
										<div class="tab_switch_first_cont">
											<div class="tab_switch_cont_detail_title">
												<div class="tab_switch_cont_detail_title_img">
													<img src="../../images/human_market/header_index.png" alt=""/>
												</div>
												<div class="tab_switch_cont_detail_title_name_warp">
													<p class="tab_switch_cont_detail_title_name">用户名</p>
													<p class="tab_switch_cont_detail_title_time">3小时前</p>
												</div>
											</div>
											<div class="tab_switch_cont_detail_img">
												<img src="../../images/human_market/index_banner.png" alt="" />
												<div class="tab_switch_cont_detail_img_info">
													<p class="tab_switch_cont_detail_img_name">轻享美食生活</p>
													<p class="tab_switch_cont_detail_img_huati">#话题</p>
												</div>
												<p class="course_type tuwen_bg">图文</p>
											</div>
											<div class="tab_switch_cont_detail_remark">
												<p class="tab_switch_cont_detail_remark_left"><span>20万</span>人观看 / <span>20万</span>人评论</p>
												<p class="tab_switch_cont_detail_remark_right">视频</p>
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
			$('.w').css('transform', 'translate3d(0px, 0px, 0px)')
				$('.swiper-container2 .swiper-slide-active').css('height','auto').siblings('.swiper-slide').css('height','0px');
				mySwiper.update();
				$('.tab a').eq(mySwiper2.activeIndex).addClass('active').siblings('a').removeClass('active');
			}
	}); 
});
