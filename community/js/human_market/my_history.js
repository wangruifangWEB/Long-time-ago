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
			onTouchMove: function(swiper){//手动滑动中触发
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
									$(".list-group .tab_switch_cont_heji_list").append(`
										<li>			
			    							<div class="hj_shipin_img">
			    								<img src="../../images/human_market/history_img1.png" alt="" />
			    								<p class="course_type tuwen_bg">图文</p>
			    							</div> 
			    							
			    							<div class="hj_shipin_txt">
			    								<p class="hj_shipin_title">轻享生活美食</p>
			    								<p class="hj_huati">#话题</p>
			    								<p class="hj_date">7月30日</p>
			    							</div>
			    							<img src="../../images/human_market/history_more.png" alt="" data="../../images/human_market/history_close.png" class="hj_history_del"/>
			    						</li>
									`);
								}
								 $(".loadtip p").hide();
								mySwiper.update(); // 重新计算高度;	
								//删除历史
								$('.hj_history_del').toggle(function() { 
									$(this).attr('src','../../images/human_market/history_close.png');
									$(this).siblings(".more_sc").animate({"left":'0'},800);
									
								},function(){
									$(this).attr('src','../../images/human_market/history_more.png');
									
								});
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
								for(var i =0;i<6;i++) {
									$(".list-group .tab_switch_cont_heji_list").append(`
										<li>			
			    							<div class="hj_shipin_img">
			    								<img src="../../images/human_market/history_img1.png" alt="" />
			    								<p class="course_type tuwen_bg">图文</p>
			    							</div> 
			    							<div class="hj_shipin_txt">
			    								<p class="hj_shipin_title">轻享生活美食</p>
			    								<p class="hj_huati">#话题</p>
			    								<p class="hj_date">7月30日</p>
			    							</div>
			    							<img src="../../images/human_market/history_more.png" alt="" data="../../images/human_market/history_sc.png" class="hj_history_del"/>
			    							<div class="more_sc">
			    								<div  class="more_src_del" style="display: inline-block;">
			    									<img src="../../images/human_market/history_del.png" alt=""/>
			    									<span>删除</span>
			    								</div>
			    								<div class="more_src_sc">
			    									<img src="../../images/human_market/history_sc.png" alt=""/>
			    									<span>收藏</span>
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
	
	//删除历史
	$('.hj_history_del').toggle(function() { 
		$(this).attr('src','../../images/human_market/history_close.png');
		$(this).siblings(".more_sc").animate({"left":'0'},800);
		
	},function(){
		$(this).attr('src','../../images/human_market/history_more.png');
		
	});
})
