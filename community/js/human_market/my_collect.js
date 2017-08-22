$(function(){
		//收藏与已收藏切换
	    var toggle = true;
	    $(document).on("click",".collect_btn",function(){
	    	if(toggle){
	            $(this).html("已收藏");// 选中
				$(this).addClass('is_collect_yes');
				$(this).removeClass('is_collect_no');
	            toggle = false;
	        }else{
				$(this).html("收藏");// 未选中
				$(this).removeClass('is_collect_yes');
				$(this).addClass('is_collect_no');
	            toggle = true;
	        }
	    });
		
		//swiper之上拉加载
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
								for(var i =0;i<3;i++) {
									$(".tab_switch_cont_heji_list").append(`
										<li>
			    							<div class="hj_shipin_img">
			    								<img src="../../images/human_market/history_img1.png" alt="" />
			    								<p class="course_type shipin_bg">视频</p>
			    							</div> 
			    							<div class="hj_shipin_txt">
			    								<p class="hj_shipin_title">轻享生活美食</p>
			    								<p class="hj_huati">#话题</p>
			    								<p class="hj_date">20万人阅读 / 20万人评论</p>
			    							</div>
			    							<div class="collect_btn is_collect_no">收藏</div>
			    						</li>
									`);
								}
								 $(".loadtip p").hide();
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
})