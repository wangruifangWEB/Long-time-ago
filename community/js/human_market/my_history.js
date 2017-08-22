$(function(){
	//定义操作函数
	function animate_all(){
			//更多操作
	    var toggle = true;
	    $(document).on("click",".hj_history_del",function(){
	    	if(toggle){
	            $(this).attr("src","../../images/human_market/history_close.png");
	             $(this).siblings().children(".hj_history_del").attr("src","../../images/human_market/history_close.png");
	            $(this).siblings(".more_sc").fadeIn(100).animate({"right":'0'},500);
	            toggle = false;
	        }else{
				$(this).attr("src","../../images/human_market/history_more.png");
	            $(".hj_history_del").attr("src","../../images/human_market/history_more.png");
	            $(this).parent(".more_sc").animate({"right":'-8.5rem'},500);
	            toggle = true;
	        }
	    });
	    
		//右边更多删除操作
		$(document).on("click",".more_src_del",function(){
			$(this).parent().parent().stop(true,false).animate({"right":'-8.5rem'},500);
			$(this).parent().parent().remove();
			$(this).parent().parent().slideUp("1000",function(){
//				$(this).parent().parent().remove();
			});
		});
		
		//收藏切换
		$('.more_src_sc').toggle(function(){
			$(this).children("img").attr("src","../../images/human_market/ls_collect_yes.png");// 收藏
			$(this).addClass('collect_img');
		},function(){					
			$(this).children("img").attr("src","../../images/human_market/ls_collect_no.png");// 未收藏
			$(this).removeClass('collect_img');
		})	
		//递归动画显示列表内容
			i=0;
			$(".write_btn").on('click',function anim(){
				$(".tab_switch_cont_heji_list li").animate({'left':'0'},300,'easeInOutCirc');
				//底部调换
				$(".footer_top").fadeIn(10).animate({
		            bottom:"0"  
		        	},500);
	
				$(".footer_bottom").fadeIn(10).animate({
		            bottom:"-1rem"  
		         },500);
		  	})
			//点击切换图片
			$('.history_remove_circle img').toggle(function(){
				$(this).attr('src','../../images/human_market/choice_yes.png');// 选中
				$(this).addClass('remove_img');
			},function(){					
				$(this).attr('src','../../images/human_market/choice_no.png');// 未选中
				$(this).removeClass('remove_img');
			})	
			
			//点击全选
			$(document).on("click",".all_choiced",function(){
				$('.history_remove_circle img').attr('src','../../images/human_market/choice_yes.png');
				var all_length=$(".tab_switch_cont_heji_list .remove_img").length;
				$(".remove_btn").click(function(){
					$('.remove_img').css('opacity',0);
						$(".tab_switch_cont_heji_list li").animate({"left":'8.5rem'},600,function(){
					 	$('.tab_switch_cont_heji_list').remove();
					});
					
				//底部回归
				$(".footer_top").fadeIn(10).animate({
		            bottom:"-1rem"  
		        	},500);
	
				$(".footer_bottom").fadeIn(10).animate({
		            bottom:"0"  
		         },500);
				})
			});
			
			//点击取消
			$('.cancel_manages').click(function(){
				$(".tab_switch_cont_heji_list li").stop(true,false).fadeIn(1000).animate({
				    left:"-.54rem"  
				},400,'easeInOutCirc'); 
				
				//底部回归
				$(".footer_top").fadeIn(10).animate({
		            bottom:"-1rem"  
		        	},500);
	
				$(".footer_bottom").fadeIn(10).animate({
		            bottom:"0"  
		         },500);
			});
			
			//实现点击删除内容及动画
			 $(".history_remove_circle img").on('click',function anim(){
					var i=$(".history_remove_circle img").index(this);
					var all_length=$(".tab_switch_cont_heji_list .remove_img").length;
				$(".remove_btn").click(function(){
					$('.remove_img').css('opacity',0);
					var img_src= $('.history_remove_circle img').hasClass('remove_img');
					if(img_src){
						$(".remove_img").parent().parent().delay(100).animate({"left":'8.5rem'});
						$('.remove_img').parent().parent().slideUp("1000",function(){
							$('.remove_img').parent().parent().remove();
						});
					}else if(all_length){
							$(".tab_switch_cont_heji_list li").animate({"left":'8.5rem'},300,function(){
							 	$('.tab_switch_cont_heji_list').remove();
							});
						}
					});
					
				});
			}
		//操作函数调用
		animate_all();
		
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
			    							<div class="history_remove_circle"><img src="../../images/human_market/choice_no.png" alt="" data="../../images/human_market/choice_no.png"/></div>
			    							<div class="hj_shipin_img">
			    								<img src="../../images/human_market/history_img1.png" alt="" />
			    								<p class="course_type shipin_bg">视频</p>
			    							</div> 
			    							<div class="hj_shipin_txt">
			    								<p class="hj_shipin_title">轻享生活美食</p>
			    								<p class="hj_huati">#话题</p>
			    								<p class="hj_date">7月30日</p>
			    							</div>
			    							<img src="../../images/human_market/history_more.png" alt="" data="../../images/human_market/ls_collect_no.png" class="hj_history_del"/>
			    							<div class="more_sc">
			    								<div  class="more_src_del" style="display: inline-block;">
			    									<img src="../../images/human_market/history_del.png" alt=""/>
			    									<span>删除</span>
			    								</div>
			    								<div class="more_src_sc">
			    									<img src="../../images/human_market/ls_collect_no.png" alt=""/>
			    									<span>收藏</span>
			    								</div>
			    								<img src="../../images/human_market/history_close.png" alt="" data="../../images/human_market/ls_collect_no.png" class="hj_history_del"/>
			    							</div>
			    						</li>
									`);
								}
								 $(".loadtip p").hide();
								mySwiper.update(); // 重新计算高度;	
								//操作函数调用
								animate_all();
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