$('.talk_message').height($(window).height()-$('header').height()-$('.z-boxbg').height());
	$('.swiper2').height($('.talk_message').height()-$('.talk_message_title').height())
	var winHeight=$(window).height();
	$('.play_toggle').click(function(){
		var vid=document.getElementById('vid');
		vid.play();
		$('.play_toggle').css('display','none');
	})
	$('.zsec-bg').height($(window).height()-$('header').height());
	$('.scroll').height($(window).height());
	$('.read_cont').height($(window).height()-$('header').height());
	$('.read_cont').css('top',$(window).height());
	$('.intro_detail').height($(window).height()-$('header').height()-$('.z-boxbg').height()-$('.z-tab').height());
	$('.swiper1 .swiper-container,.swiper1 .w').height($(window).height()-$('header').height()-$('.z-boxbg').height()-$('.z-tab').height()+'px');
	$('.swiper2 .swiper-container,.swiper2 .w').height($(window).height()-$('header').height()-$('.z-boxbg').heightz()-$('.talk_message_title').height()-$('.z-sr').height()+'px');
	$('.on2').click(function() {
		$(this).find('a').addClass("active");
		$('.talk_message').animate({'left':'0'});
		$('.z-sr').show();
		$('.z-sr').animate({'left':'50%'});
		
		$('.face-content').animate({'left':'0'});
		$('.talk_hidden').animate({'display':'none'});
	})
	$('.on1').toggle(function() { 
		$(this).find('img').attr('src',$(this).find('img').attr('data'));
	},function(){
		$('.on1 img').attr('src','../images/pr-e-1.png');
	})
	$('.on3').click(function() { 
		$(".bg123").show();
	})
	$('.z-sr').click(function(){
		
		$('.read_cont').animate({'top':'0.98rem'});
		document.getElementById("textfocus").focus();
		$('.read_cont_detail').val('');
		$('.z-boxbg,.z-boxbg2 video').hide();
	})
	$('.bg123').click(function(){
		$(this).hide();
		$('.on3 img').attr('src','../images/qr-c-1.png');
	})
	$('.btn').click(function(){
		var oldVal=$('#text').html();
		var newVal=$('.read_cont_detail').html()+oldVal;
		$('.read_cont_detail').html(newVal);
		$('#text').html('');
	})
	$('.intro_portal .intro_portal_click').click(function(){
		$('.intro_detail').animate({'left':'0'});
	})
	$('.talk_message_cont_send').click(function(){
		$('.read_cont').animate({'top':winHeight});
		$('.read_cont_detail').val('');
		$('.z-boxbg,.z-boxbg2 video').slideDown();
	})
	$('.talk_message_cont_return').click(function(){
		$('.read_cont').animate({'top':winHeight});
		$('.read_cont_detail').val('');
		$('.z-boxbg,.z-boxbg2 video').slideDown();
	})
	$('.intro_detail_portal_click').click(function(){
		$('.intro_detail').animate({'left':'7.5rem'});
	})
	$('.talk_message_title .talk_message_title_close').click(function(){
		$('.talk_hidden').css('display','block');
		$('.talk_message').animate({'left':'7.5rem'});
		$('.face-content').animate({'left':'7.5rem'});
		$('.on2 img').attr('src','../images/qr-d-1.png');
		$('.on1 img').attr('src','../images/pr-e-1.png');
		$('.z-sr').animate({'left':'200%'});
		$('.talk_hidden').animate({'left':'0'});
	})
	
	$('.z-tab-box').on('scroll',function(){
	   var top = parseInt($('.z-dz-box').height()) + 30;
	   if($('.z-tab-box').scrollTop() >= top){
	   	$('.on2 a').addClass('active');
	   	$('.on2 a img').attr('src',$('.on2 a  img').attr('data'));
	   }else{
	   	$('.on2 a').removeClass('active');
	   	$('.on2 a img').attr('src',$('.on2 a  img').attr('rel'));
	   }
	});
	
	var loadFlag = true;
	var mySwiper1 = new Swiper('.swiper1 .swiper-container',{
		direction: 'vertical',
		scrollbar: '.swiper1 .swiper-scrollbar',
		slidesPerView: 'auto',
		mousewheelControl: true,
		freeMode: true,
		onTouchMove: function(swiper){		//手动滑动中触发
			var swiper1=document.getElementById('swiper1');
			var _viewHeight = swiper1.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
			var _contentHeight = swiper1.getElementsByClassName('swiper-slide')[0].offsetHeight;
		},
		onTouchEnd: function(swiper) {
			var swiper1=document.getElementById('swiper1');
			var _viewHeight = swiper1.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
			var _contentHeight = swiper1.getElementsByClassName('swiper-slide')[0].offsetHeight;
			
			 // 上拉加载
			if(mySwiper1.translate <= _viewHeight - _contentHeight - 50 && mySwiper1.translate < 0) {
				$.ajax({
					url:"",
					type:"post",
					success:function(data){
						
					},
					error:function(){
						if(loadFlag){
							$(".loadtip p").show();
							$(".loadtip p").html('正在加载...');
						}else{
							$(".loadtip p").show();
							$(".loadtip p").html('没有更多啦！');
						}
						setTimeout(function() {
							for(var i =0;i<6;i++) {
								$(".swiper1 .list-group .other_zm_ul").append(`
									<li class="other_zm_li">
										<div class="other_zm_li_left">
											<img src="../images/nvf.png" alt="" />
										</div>
										<div class="other_zm_li_right">
											<p class="address">北京市奥林匹克森林公园</p>
											<p class="time">时间：<span>2017.04.19</span></p>
											<p class="praise">获赞：<span>688</span></p>
										</div>
									</li>
								`);
							}
							$(".loadtip p").hide();
							mySwiper1.update(); // 重新计算高度;
						}, 800);
					}
				});
			}
			return false;
		}
	});
	var mySwiper2 = new Swiper('.swiper2 .swiper-container',{
		direction: 'vertical',
		scrollbar: '.swiper2 .swiper-scrollbar',
		slidesPerView: 'auto',
		mousewheelControl: true,
		freeMode: true,
		onTouchMove: function(swiper){		//手动滑动中触发
			var swiper2=document.getElementById('swiper2');
			var _viewHeight = swiper2.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
			var _contentHeight = swiper2.getElementsByClassName('swiper-slide')[0].offsetHeight;
			$('.talk_hidden').css({'display':'none'});
		},
		onTouchEnd: function(swiper) {
			var swiper2=document.getElementById('swiper2');
			var _viewHeight = swiper2.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
			var _contentHeight = swiper2.getElementsByClassName('swiper-slide')[0].offsetHeight;
			$('.talk_hidden').css({'display':'none'});
			 // 上拉加载
			if(mySwiper2.translate <= _viewHeight - _contentHeight - 50 && mySwiper2.translate < 0) {
				$.ajax({
					url:"",
					type:"post",
					success:function(data){
						
					},
					error:function(){
						if(loadFlag){
							$(".loadtip p").show();
							$(".loadtip p").html('正在加载...');
							$('.z-sr').hide();
						}else{
							$(".loadtip p").show();
							$(".loadtip p").html('没有更多啦！');
							$('.z-sr').hide();
						}
						setTimeout(function() {
							for(var i =0;i<6;i++) {
								$(".swiper2 .list-group .talk_message_ul").append(`
									<li class="talk_message_list">
										<div class="talk_message_list_left">
											<img src="../images/z-moon.png" alt="" />
										</div>
										<div class="talk_message_list_right">
											<p class="talk_message_list_right_name">拔剑乌托邦</p>
											<p class="talk_message_list_right_detail">写的很好，遗憾未能参见！</p>
										</div>
									</li>
								`);
							}
							$(".loadtip p").hide();
							$('.z-sr').show();
							mySwiper2.update(); // 重新计算高度;
						}, 800);
					}
				});
			}
			return false;
		}
	});