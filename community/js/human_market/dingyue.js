// 加载刷新
$(function(){
//	zuohua();
//	$('.tab_switch_cont_swiper').height($(window).height()-$('.search_warp').outerHeight()-$('.nav_bottom').height()-$('.tab_switch_ul_warp').height())
	$('.swiper-container, .w').height($(window).height()-$('.search_warp').outerHeight()-$('.nav_bottom').height()-$('.tab_switch_ul_warp').height());
	$('.tab_switch_ul li').click(function(){
		var i=$('.tab_switch_ul li').index(this);
		$('.tab_switch_cont_detail').eq(i).addClass('show').siblings().removeClass('show');
		if(i==0){
			$('.swiper-wrapper.w').css('transform','translate3d(0, 0, 0)');
			$.ajax({
				url:"",
				type:"post",
				success:function(data){
					
				},
				error:function(){
					$('.init-loading').css('display','block');
					setTimeout(function() {
						for(var i =0;i<3;i++) {
							$(".tab_switch_first_cont").eq(mySwiper2.activeIndex).append(`
								<div class="tab_switch_first_cont_detail">
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
			    						<p class="tab_switch_cont_detail_remark_right">图文</p>
			    					</div>
		    					</div>
							`); 
						}
						$('.init-loading').css('display','none');
						mySwiper.update(); // 重新计算高度;
					}, 800);
				}
			});
		}else if(i==1){
			$('.swiper-wrapper.w').css('transform','translate3d(0, 0, 0)');
			$.ajax({
				url:"",
				type:"post",
				success:function(data){
					
				},
				error:function(){
					$('.init-loading').css('display','block');
					setTimeout(function() {
						for(var i =0;i<6;i++) {
							$(".tab_switch_second_cont").eq(mySwiper2.activeIndex).append(`
		    					<div class="tab_switch_second_cont_detail">
		    						<div class="dingyue">
		    							<div class="tab_switch_left">
			    							<img src="../../images/human_market/header.png" alt="" />
			    						</div>
			    						<div class="tab_switch_right">
			    							<ul>
			    								<li>订阅号</li>
			    								<li>博物杂志官方账号</li>
			    								<li><span>20万</span>人订阅</li>
			    							</ul>
			    							<button class="hasDingyue">已订阅</button>
			    						</div>
		    						</div>
		    						<div class="cancel_dingyue">取消订阅</div>
		    					</div>
							`); 
						}
						$('.init-loading').css('display','none');
						mySwiper.update(); // 重新计算高度;
						zuohua();
					}, 800);
				}
			});
		}else if(i==2){
			$('.swiper-wrapper.w').css('transform','translate3d(0, 0, 0)');
			$.ajax({
				type:"post",
				url:"",
				success:function(data){
					
				},
				error:function(){
					$('.init-loading').css('display','block');
					setTimeout(function() {
						for(var i =0;i<4;i++) {
							$(".tab_switch_third_cont").eq(mySwiper2.activeIndex).append(`
								<div class="tab_switch_third_cont_detail">
									<div class="dingyue">
										<div class="tab_switch_left">
											<img src="../../images/human_market/header.png" alt="" />
										</div>
										<div class="tab_switch_right">
											<ul>
												<li>订阅号</li>
												<li>博物杂志官方账号</li>
												<li><span>20万</span>人订阅</li>
											</ul>
											<button class="isDingyue">订阅</button>
										</div>
									</div>
									<div class="list_cont_warp">
					    				<ul class="list_cont">
						    				<li>
						    					<a href="javascript:void(0);">
						    						<img src="../../images/human_market/history_img1.png"/>
						    						<p>轻享美食生活</p>
						    					</a>
						    				</li>
						    				<li>
						    					<a href="javascript:void(0);">
						    						<img src="../../images/human_market/history_img1.png"/>
						    						<p>轻享美食生活</p>
						    					</a>
						    				</li>
						    				<li>
						    					<a href="javascript:void(0);">
						    						<img src="../../images/human_market/history_img1.png"/>
						    						<p>轻享美食生活</p>
						    					</a>
						    				</li>
						    				<li>
						    					<a href="javascript:void(0);">
						    						<img src="../../images/human_market/history_img1.png"/>
						    						<p>轻享美食生活</p>
						    					</a>
						    				</li>
						    				<li>
						    					<a href="javascript:void(0);">
						    						<img src="../../images/human_market/history_img1.png"/>
						    						<p>轻享美食生活</p>
						    					</a>
						    				</li>
						    			</ul>
					    			</div>
								</div>
							`);
						}
						$('.init-loading').css('display','none');
						mySwiper.update(); // 重新计算高度;
						$('.list_cont_warp').each(function(i){
							$('.list_cont_warp').eq(i).addClass('list_cont_warp'+(i+1));
							$('.list_cont').eq(i).addClass('list_cont'+(i+1));
							new fingerTouch($('.list_cont'+(i+1)+' li'),$('.list_cont'+(i+1)),$('.list_padding_width'),$('.list_cont_warp'+(i+1)));
							$('.list_cont_warp'+(i+1)).mCustomScrollbar({
								horizontalScroll:true,
		                        advanced:{ 
								    updateOnContentResize:true
								}
							})
						});
					}, 800);
				}
			});
		}
		
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
					if($('.tab_switch_first_cont').hasClass('show')){
//						alert(1);
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
									for(var i =0;i<3;i++) {
										$(".tab_switch_first_cont").eq(mySwiper2.activeIndex).append(`
											<div class="tab_switch_first_cont_detail">
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
													<p class="tab_switch_cont_detail_remark_right">图文</p>
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
					if($('.tab_switch_second_cont').hasClass('show')){
//						alert(2);
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
									for(var i =0;i<6;i++) {
										$(".tab_switch_second_cont").eq(mySwiper2.activeIndex).append(`
											<div class="tab_switch_second_cont_detail">
												<div class="dingyue">
													<div class="tab_switch_left">
														<img src="../../images/human_market/header.png" alt="" />
													</div>
													<div class="tab_switch_right">
														<ul>
															<li>订阅号</li>
															<li>博物杂志官方账号</li>
															<li><span>20万</span>人订阅</li>
														</ul>
														<button class="hasDingyue">已订阅</button>
													</div>
												</div>
												<div class="cancel_dingyue">取消订阅</div>
											</div>
										`);
									}
									$(".loadtip p").hide();
									mySwiper.update(); // 重新计算高度;
									zuohua();
								}, 800);
							}
						});
					}
					if($('.tab_switch_third_cont').hasClass('show')){
//						alert(3);
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
									for(var i =0;i<4;i++) {
										$(".tab_switch_third_cont").eq(mySwiper2.activeIndex).append(`
											<div class="tab_switch_third_cont_detail">
												<div class="dingyue">
													<div class="tab_switch_left">
														<img src="../../images/human_market/header.png" alt="" />
													</div>
													<div class="tab_switch_right">
														<ul>
															<li>订阅号</li>
															<li>博物杂志官方账号</li>
															<li><span>20万</span>人订阅</li>
														</ul>
														<button class="isDingyue">订阅</button>
													</div>
												</div>
												<div class="list_cont_warp">
													<ul class="list_cont">
														<li>
															<a href="javascript:void(0);">
																<img src="../../images/human_market/history_img1.png"/>
																<p>轻享美食生活</p>
															</a>
														</li>
														<li>
															<a href="javascript:void(0);">
																<img src="../../images/human_market/history_img1.png"/>
																<p>轻享美食生活</p>
															</a>
														</li>
														<li>
															<a href="javascript:void(0);">
																<img src="../../images/human_market/history_img1.png"/>
																<p>轻享美食生活</p>
															</a>
														</li>
														<li>
															<a href="javascript:void(0);">
																<img src="../../images/human_market/history_img1.png"/>
																<p>轻享美食生活</p>
															</a>
														</li>
														<li>
															<a href="javascript:void(0);">
																<img src="../../images/human_market/history_img1.png"/>
																<p>轻享美食生活</p>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										`);
									}
									$(".loadtip p").hide();
									mySwiper.update(); // 重新计算高度;
									$('.list_cont_warp').each(function(i){
										$('.list_cont_warp').eq(i).addClass('list_cont_warp'+(i+1));
										$('.list_cont').eq(i).addClass('list_cont'+(i+1));
										new fingerTouch($('.list_cont'+(i+1)+' li'),$('.list_cont'+(i+1)),$('.list_padding_width'),$('.list_cont_warp'+(i+1)));
										$('.list_cont_warp'+(i+1)).mCustomScrollbar({
											horizontalScroll:true,
					                        advanced:{ 
											    updateOnContentResize:true
											}
										})
									});
								}, 800);
							}
						});
					}
				}
				//  刷新
				if(mySwiper.translate >= 50) {
					if($('.tab_switch_first_cont').hasClass('show')){
						$.ajax({
							url:"",
							type:"post",
							success:function(data){
								
							},
							error:function(){
								$('.init-loading').css('display','block');
								setTimeout(function() {
									for(var i =0;i<3;i++) {
										$(".tab_switch_first_cont").eq(mySwiper2.activeIndex).append(`
											<div class="tab_switch_first_cont_detail">
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
													<p class="tab_switch_cont_detail_remark_right">图文</p>
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
					if($('.tab_switch_second_cont').hasClass('show')){
						$.ajax({
							type:"post",
							url:"",
							success:function(data){
								
							},
							error:function(){
								$('.init-loading').css('display','block');
								setTimeout(function() {
									for(var i =0;i<6;i++) {
										$(".tab_switch_second_cont").eq(mySwiper2.activeIndex).append(`
											<div class="tab_switch_second_cont_detail">
												<div class="dingyue">
													<div class="tab_switch_left">
														<img src="../../images/human_market/header.png" alt="" />
													</div>
													<div class="tab_switch_right">
														<ul>
															<li>订阅号</li>
															<li>博物杂志官方账号</li>
															<li><span>20万</span>人订阅</li>
														</ul>
														<button class="hasDingyue">已订阅</button>
													</div>
												</div>
												<div class="cancel_dingyue">取消订阅</div>
											</div>
										`);
									}
									$('.init-loading').css('display','none');
									mySwiper.update(); // 重新计算高度;
									zuohua();
								}, 800);
							}
						});
					}
					if($('.tab_switch_third_cont').hasClass('show')){
						$.ajax({
							type:"post",
							url:"",
							success:function(data){
								
							},
							error:function(){
								$('.init-loading').css('display','block');
								setTimeout(function() {
									for(var i =0;i<3;i++) {
										$(".tab_switch_third_cont").eq(mySwiper2.activeIndex).append(`
											<div class="tab_switch_third_cont_detail">
												<div class="dingyue">
													<div class="tab_switch_left">
														<img src="../../images/human_market/header.png" alt="" />
													</div>
													<div class="tab_switch_right">
														<ul>
															<li>订阅号</li>
															<li>博物杂志官方账号</li>
															<li><span>20万</span>人订阅</li>
														</ul>
														<button class="isDingyue">订阅</button>
													</div>
												</div>
												<div class="list_cont_warp">
													<ul class="list_cont">
														<li>
															<a href="javascript:void(0);">
																<img src="../../images/human_market/history_img1.png"/>
																<p>轻享美食生活</p>
															</a>
														</li>
														<li>
															<a href="javascript:void(0);">
																<img src="../../images/human_market/history_img1.png"/>
																<p>轻享美食生活</p>
															</a>
														</li>
														<li>
															<a href="javascript:void(0);">
																<img src="../../images/human_market/history_img1.png"/>
																<p>轻享美食生活</p>
															</a>
														</li>
														<li>
															<a href="javascript:void(0);">
																<img src="../../images/human_market/history_img1.png"/>
																<p>轻享美食生活</p>
															</a>
														</li>
														<li>
															<a href="javascript:void(0);">
																<img src="../../images/human_market/history_img1.png"/>
																<p>轻享美食生活</p>
															</a>
														</li>
													</ul>
												</div>
											</div>
										`);
									}
									$('.init-loading').css('display','none');
									mySwiper.update(); // 重新计算高度;
									$('.list_cont_warp').each(function(i){
										$('.list_cont_warp').eq(i).addClass('list_cont_warp'+(i+1));
										$('.list_cont').eq(i).addClass('list_cont'+(i+1));
										new fingerTouch($('.list_cont'+(i+1)+' li'),$('.list_cont'+(i+1)),$('.list_padding_width'),$('.list_cont_warp'+(i+1)));
										$('.list_cont_warp'+(i+1)).mCustomScrollbar({
											horizontalScroll:true,
					                        advanced:{ 
											    updateOnContentResize:true
											}
										})
									});
								}, 800);
							}
						});
					}	
				}	
				return false;
			}
		});
		
	})
	
	
	var mySwiper2 = new Swiper('.swiper-container2',{
		onTransitionEnd: function(swiper){
			$('.w').css('transform', 'translate3d(0px, 0px, 0px)')
			$('.swiper-container2 .swiper-slide-active').css('height','auto').siblings('.swiper-slide').css('height','0px');
			mySwiper.update();
			$('.tab a').eq(mySwiper2.activeIndex).addClass('active').siblings('a').removeClass('active');
		}
		
	});
})


$('body').on('click','.cancel_dingyue',function(e){
	var that=e.target;
	$.ajax({
		url:'',
		type:'',
		success:function(data){
			
		},
		error:function(){
			$(that).parent().fadeOut();		
		}
	});
});
