$(function(){
	$(".tab_switch_ul li").click(function(){
		var i = $(this).index();
		$(this).addClass("show").siblings().removeClass('show');
		if(i==0){
			$('.swiper-wrapper.w').css('transform','translate3d(0, 0, 0)');
			$('.tab_switch_cont_detail1').addClass('show').siblings().removeClass('show');
			$.ajax({
				url:"",
				type:"post",
				success:function(data){
					
				},
				error:function(){
					$('.init-loading').css('display','block');
					setTimeout(function() {
						for(var i =0;i<3;i++) {
							$(".list-group .tab_switch_cont_detail1").append(`
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
		if(i==1){
			$('.tab_switch_cont_heji_list').addClass('show').siblings().removeClass('show');
			$.ajax({
				type:"post",
				url:"",
				success:function(data){
					
				},
				error:function(){
					$('.init-loading').css('display','block');
					setTimeout(function() {	
						for(var i =0;i<3;i++) {
							$(".list-group .tab_switch_cont_heji_list").append(`
	    						<li>
	    							<!--合辑图片-->
	    							<div class="hj_shipin_img">
	    								<img src="../../images/human_market/history_img1.png" alt="" />
	    								<!--遮罩层-->
	    								<div class="mask_layer">
	    									<img src="../../images/human_market/shipin.png" alt="" />
	    								</div>
	    							</div>
	    							<!--合辑文字-->
	    							<div class="hj_shipin_txt">
	    								<p class="hj_shipin_title">轻享生活美食</p>
	    								<p>共6部</p>
	    							</div>
	    							<!--合辑添加-->
	    							<img src="../../images/human_market/collect.png" alt="" class="hj_shipin_collect"/>
	    						</li>
							`);
						}
						$('.init-loading').css('display','none');
						mySwiper.update(); // 重新计算高度;
						
						//收藏切换
						$('.hj_shipin_collect').toggle(function() { 
							$(this).attr('src','../../images/human_market/collect.png');
						},function(){
							$(this).attr('src','../../images/human_market/collect_not.png');
						});
					}, 800);
				}
			});
		}
	})
	$('.swiper-container, .w').height($(window).height()-$('.user_msg').height());
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
		},
		onTouchEnd: function(swiper) {
			var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
			var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;
			
			 // 上拉加载
			if(mySwiper.translate <= _viewHeight - _contentHeight - 50 && mySwiper.translate < 0) {
				if($('.tab_switch_cont_detail1').hasClass('show')){
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
								$(".list-group .tab_switch_cont_detail1").eq(mySwiper2.activeIndex).append(`
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
							mySwiper.update(); // 重新计算高度;
						}, 800);
					}
				});
			}
			if($('.tab_switch_cont_heji_list').hasClass('show')){
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
							for(var i =0;i<3;i++) {
								$(".list-group .tab_switch_cont_heji_list").eq(mySwiper2.activeIndex).append(`
									<li>
		    							<!--合辑图片-->
		    							<div class="hj_shipin_img">
		    								<img src="../../images/human_market/history_img1.png" alt="" />
		    								<!--遮罩层-->
		    								<div class="mask_layer">
		    									<img src="../../images/human_market/shipin.png" alt="" />
		    								</div>
		    							</div>
		    							<!--合辑文字-->
		    							<div class="hj_shipin_txt">
		    								<p class="hj_shipin_title">轻享生活美食</p>
		    								<p>共6部</p>
		    							</div>
		    							<!--合辑添加-->
		    							<img src="../../images/human_market/collect.png" alt="" class="hj_shipin_collect"/>
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
										<div class="z-hl">
											<img src="images/nvf.png" alt="" />
										</div>
										<div class="z-hr">
											<h2>走进通州,为北京三大球加油22</h2>
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
		}	
		return false;
	}
});
var mySwiper2 = new Swiper('.swiper-container2',{
	onTransitionEnd: function(swiper){
		$('.w').css('transform', 'translate3d(0px, 0px, 0px)');
		$('.swiper-container2 .swiper-slide-active').css('height','auto').siblings('.swiper-slide').css('height','0px');
		mySwiper.update();
		$('.tab a').eq(mySwiper2.activeIndex).addClass('active').siblings('a').removeClass('active');
	}
});

//收藏切换
//	$('.hj_shipin_collect').toggle(function() { 
//		$(this).attr('src','../../images/human_market/collect.png');
//	},function(){
//		$(this).attr('src','../../images/human_market/collect_not.png');
//	});
})
