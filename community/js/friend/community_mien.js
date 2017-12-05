// 加载刷新
var loadFlag1 = true;
$('.tab_switch_cont_detail').height($(window).height()-$('.tab_switch_ul').height());
$('#news .swiper-container,#news .w').height($(window).height()-$('.tab_switch_ul').height());
var oi=0;
var mySwiper1 = new Swiper('#news .swiper-container',{
	direction: 'vertical',
	scrollbar: '#news .swiper-scrollbar',
	slidesPerView: 'auto',
	mousewheelControl: true,
	freeMode: true,
	onTouchMove: function(swiper){		//手动滑动中触发
		var swiper1=document.getElementById('news');
		var _viewHeight = swiper1.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
		var _contentHeight = swiper1.getElementsByClassName('swiper-slide')[0].offsetHeight;
	},
	onTouchEnd: function(swiper) {
		var swiper1=document.getElementById('news');
		var _viewHeight = swiper1.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
		var _contentHeight = swiper1.getElementsByClassName('swiper-slide')[0].offsetHeight;
		var translateY=parseInt(mySwiper1.getWrapperTranslate('y'));
		if(translateY < 0){
			$('.top_img').slideUp(400);
		}else{

		}
		 // 上拉加载
		if(mySwiper1.translate <= _viewHeight - _contentHeight - 50 && mySwiper1.translate < 0) {
			$.ajax({
				url:"",
				type:"post",
				success:function(data){

				},
				error:function(){
					alert(oi)
					if(loadFlag1){
						$(".loadtip p").show();
						setTimeout(function() {
							for(var i =0;i<6;i++) {
								$("#news .tab_switch_first_cont").append(`
									<li class="community_news">
										<div class="community_news_left">
											<p class="community_news_title">社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻</p>
											<p class="community_news_time"><span>2016-6-25</span><span>3小时前</span></p>
										</div>
										<div class="community_news_right">
											<img src="images/friend/community_newsImg.png" alt="">
										</div>
									</li>
								`);
							}
							$(".loadtip p").hide();
							mySwiper1.update(); // 重新计算高度;
						}, 800);
						oi++;
					}else{
						$(".loadtip p").show();
						$(".loadtip p").html('没有更多啦！');
					}
				}
			});
		}
		if(mySwiper1.translate >= 50) {
			$('.top_img').slideDown(400);
		}
		return false;
	}
});



$(".tab_switch_ul li").click(function(){
	var i = $(this).index();
	if(i==0){
		$('.swiper-wrapper.w').css('transform','translate3d(0, 0, 0)');
		var loadFlag1 = true;
		$('.tab_switch_cont_detail').height($(window).height()-$('.tab_switch_ul').height());
		$('#news .swiper-container,#news .w').height($(window).height()-$('.tab_switch_ul').height());
		var mySwiper1 = new Swiper('#news .swiper-container',{
			direction: 'vertical',
			scrollbar: '#news .swiper-scrollbar',
			slidesPerView: 'auto',
			mousewheelControl: true,
			observer:true,//修改swiper自己或子元素时，自动初始化swiper
   			observeParents:true,//修改swiper的父元素时，自动初始化swiper
			freeMode: true,
			onSlideChangeEnd: function(swiper){
		        swiper.update(); //swiper更新
		    },
			onTouchMove: function(swiper){		//手动滑动中触发
				var swiper1=document.getElementById('news');
				var _viewHeight = swiper1.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
				var _contentHeight = swiper1.getElementsByClassName('swiper-slide')[0].offsetHeight;
			},
			onTouchEnd: function(swiper) {
				var swiper1=document.getElementById('news');
				var _viewHeight = swiper1.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
				var _contentHeight = swiper1.getElementsByClassName('swiper-slide')[0].offsetHeight;
				var translateY=parseInt(mySwiper1.getWrapperTranslate('y'));
				if(translateY < 0){
					$('.top_img').slideUp(400);
				}else{

				}
				 // 上拉加载
				if(mySwiper1.translate <= _viewHeight - _contentHeight - 50 && mySwiper1.translate < 0) {
					$.ajax({
						url:"",
						type:"post",
						success:function(data){

						},
						error:function(){
							if(loadFlag1){
								$(".loadtip p").show();
								setTimeout(function() {
									for(var i =0;i<6;i++) {
										$("#news .tab_switch_first_cont").append(`
											<li class="community_news">
												<div class="community_news_left">
													<p class="community_news_title">社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻社区新闻</p>
													<p class="community_news_time"><span>2016-6-25</span><span>3小时前</span></p>
												</div>
												<div class="community_news_right">
													<img src="images/friend/community_newsImg.png" alt="">
												</div>
											</li>
										`);
									}
									$(".loadtip p").hide();
									mySwiper1.update(); // 重新计算高度;
								}, 800);
							}else{
								$(".loadtip p").show();
								$(".loadtip p").html('没有更多啦！');
							}
						}
					});
				}
				if(mySwiper1.translate >= 50) {
					$('.top_img').slideDown(400);
				}
				return false;
			}
		});
	}
	if(i==1){
		var loadFlag2 = true;
		$('.swiper-container,.w').height($(window).height()-$('.tab_switch_ul').height());
		var mySwiper2 = new Swiper('#government .swiper-container',{
			direction: 'vertical',
			scrollbar: '#government .swiper-scrollbar',
			slidesPerView: 'auto',
			mousewheelControl: true,
			freeMode: true,
			observer:true,//修改swiper自己或子元素时，自动初始化swiper
			observeParents:true,//修改swiper的父元素时，自动初始化swiper
			onSlideChangeEnd: function(swiper){
		        swiper.update(); //swiper更新
		    },
			onTouchMove: function(swiper){		//手动滑动中触发
				var swiper2=document.getElementById('government');
				var _viewHeight = swiper2.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
				var _contentHeight = swiper2.getElementsByClassName('swiper-slide')[0].offsetHeight;
			},
			onTouchEnd: function(swiper) {
				var swiper2=document.getElementById('government');
				var _viewHeight = swiper2.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
				var _contentHeight = swiper2.getElementsByClassName('swiper-slide')[0].offsetHeight;
				var translateY=parseInt(mySwiper2.getWrapperTranslate('y'));
				if(translateY < 0){
					$('.top_img').slideUp(400);
				}else{

				}
				 // 上拉加载
				if(mySwiper2.translate <= _viewHeight - _contentHeight - 50 && mySwiper2.translate < 0) {
					$.ajax({
						url:"",
						type:"post",
						success:function(data){

						},
						error:function(){
							if(loadFlag2){
								$(".loadtip p").show();
								setTimeout(function() {
									for(var i =0;i<6;i++) {
										$("#government .tab_switch_second_cont").append(`
											<li class="government">
												<a href="javascript:;">
													<span>竹杆社区志愿者志愿者志愿者志愿者</span>
													<img src="images/friend/news_hot.png" alt="">
													<span>2017-2-28</span>
												</a>
											</li>
										`);
									}
									$(".loadtip p").hide();
									mySwiper2.update(); // 重新计算高度;
								}, 800);
							}else{
								$(".loadtip p").show();
								$(".loadtip p").html('没有更多啦！');
							}
						}
					});
				}
				if(mySwiper2.translate >= 50) {
					$('.top_img').slideDown(400);
				}
					return false;
			}
		});
	}
})









	var server_team=document.getElementById('server_team');
	var n = 1, startX = 0, startY = 0, endX = 0, endY = 0;
	server_team.addEventListener('touchstart',function (ev){
		startX=ev.touches[0].pageX;
		startY=ev.touches[0].pageY;
	}, false);
	server_team.addEventListener('touchmove',function (ev){
		ev.preventDefault();
		endX=ev.touches[0].pageX;
		endY=ev.touches[0].pageY;
	}, false);
	server_team.addEventListener('touchend',function (ev){
        if (startY-endY>100) {//向上滑动
			$('.top_img').slideUp(400);
        }else if (startY-endY<-100) {//向下滑动
			$('.top_img').slideDown(400);
        }
    }, false);
