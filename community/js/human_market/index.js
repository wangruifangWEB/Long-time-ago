 	$(function(){	
		// 回到顶部
		if($(document).scrollTop() >= $(window).height()){
			$('#toTop').fadeIn(500);
			$('#toTop').click(function(){
				$('html,body').animate({scrollTop:'0px'},500);return false;
			});
		}
//	   	$('.swiper-container, .w').height($(".top_content").height());
		var loadFlag = true;
		var oi = 0;
		var mySwiper = new Swiper('.swiper-container',{
			direction: 'vertical',
			scrollbar: '.swiper-scrollbar',
			slidesPerView: 'auto',
			mousewheelControl: true,
			freeMode: true,
			onTouchMove: function(swiper){//手动滑动中触发
				var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
				var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;
				var translateY=parseInt(mySwiper.getWrapperTranslate('y'));
				if(translateY > 0){
					$('.swiper-wrapper,.w').css('transform','translate3d(0px, 0px, 0px)');
				}
			},
			onTouchEnd: function(swiper) {
				var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
				var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;
				//回到顶部
				var translateY=parseInt(mySwiper.getWrapperTranslate('y'));
				if(translateY > 0){
					$('.swiper-wrapper,.w').css('transform','translate3d(0px, 0px, 0px)');
				}
				if(translateY <-200){
					$('#toTop').fadeOut(300);
				}
				if(translateY < -300){
					$('#toTop').fadeIn(300); 
				}
				$('#toTop').click(function(){
					 $('.swiper-wrapper,.w').css('transform','translate3d(0px, 0px, 0px)');
					 $('#toTop').fadeOut();
			    });
				
				 // 上拉加载
				if(mySwiper.translate <= _viewHeight - _contentHeight - 50 && mySwiper.translate < 0) {
					$.ajax({
						url:"",
						type:"post",
						success:function(data){
							
						},
						error:function(){
//							$(".loadtip p").show();
							$('.loadtip p').css('display','block');
							if(loadFlag){
								$(".loadtip p").html('正在加载...');
							}else{
								$(".loadtip p").html('没有更多啦！');
							}
							setTimeout(function() {
								for(var i =0;i<6;i++) {
									$(".list-group").append(`
										<div class="course_cont">
				    						<div class="course_cont_title">
					    						<div class="course_cont_title_img" onclick="location.href='dingyuehao.html'">
					    							<img src="../../images/human_market/header_index.png" alt=""/>
					    						</div>
					    						<div class="course_cont_title_name_warp">
					    							<p class="course_cont_title_name">用户名</p>
					    							<p class="course_cont_title_time">3小时前</p>
					    						</div>
					    					</div>
					    					<div class="course_cont_img" onclick="location.href='yinpin_detail.html'">
					    						<img src="../../images/human_market/index_banner.png" alt="" />
					    						<div class="course_cont_img_info">
					    							<p class="course_cont_img_name">轻享美食生活</p>
					    							<p class="course_cont_img_huati">#话题</p>
					    						</div>
					    						<p class="course_type tuwen_bg">图文</p>
					    					</div>
					    					<div class="course_cont_remark">
					    						<p class="course_cont_remark_left"><span>20万</span>人观看 / <span>20万</span>人评论</p>
					    						<p class="course_cont_remark_right">图文</p>
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
				//刷新
				if(mySwiper.translate >= 50) {
					$(".search_warp").hide();
					$("#slider").css("padding-top",".2rem");
					$(".init-loading").fadeIn();
//					$('.init-loading').css({'display':'block'});
					$('.init-loading img').css({'top':'-0.5rem'});
					if($('.tab_switch_first_cont').hasClass('show')){
						$.ajax({
							url:"",
							type:"post",
							success:function(data){
								
							},
							error:function(){
								setTimeout(function() {
									for(var i =0;i<3;i++) {
										$(".tab_switch_first_cont").eq(mySwiper2.activeIndex).append(`
											<div class="course_cont">
					    						<div class="course_cont_title">
						    						<div class="course_cont_title_img" onclick="location.href='dingyuehao.html'">
						    							<img src="../../images/human_market/header_index.png" alt=""/>
						    						</div>
						    						<div class="course_cont_title_name_warp">
						    							<p class="course_cont_title_name">用户名</p>
						    							<p class="course_cont_title_time">3小时前</p>
						    						</div>
						    					</div>
						    					<div class="course_cont_img" onclick="location.href='yinpin_detail.html'">
						    						<img src="../../images/human_market/index_banner.png" alt="" />
						    						<div class="course_cont_img_info">
						    							<p class="course_cont_img_name">轻享美食生活</p>
						    							<p class="course_cont_img_huati">#话题</p>
						    						</div>
						    						<p class="course_type tuwen_bg">图文</p>
						    					</div>
						    					<div class="course_cont_remark">
						    						<p class="course_cont_remark_left"><span>20万</span>人观看 / <span>20万</span>人评论</p>
						    						<p class="course_cont_remark_right">图文</p>
						    					</div>
					    					</div>
										`);
									}
									$('.init-loading').fadeOut();
									$('.init-loading img').css({'top':'-3rem'});
									$("#slider").css("padding-top","0");
									$(".search_warp").show();
//									$('.init-loading').css({'display':'none'});
									mySwiper.update(); // 重新计算高度;
									if($('.tab_switch_first_cont').is(":empty")){
										$('#no_course').show();
									}else{
										$('#no_course').hide();
									}
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
	//	$('.w').css('transform', 'translate3d(0px, 0px, 0px)')
			$('.swiper-container2 .swiper-slide-active').css('height','auto').siblings('.swiper-slide').css('height','0px');
			mySwiper.update();
			$('.tab a').eq(mySwiper2.activeIndex).addClass('active').siblings('a').removeClass('active');
		}
	}); 	
});