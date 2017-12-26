$(function(){
	youhua();
	function youhua(){
		$(document).ready(function(e) {
		    // 设定每一行的宽度=屏幕宽度+按钮宽度
		    // 设定常规信息区域宽度=屏幕宽度
			$('.msg_list_item_center').width($(document).width());
			$('。msg_list_item').width($('.msg_list_item_center').width()+$('。msg_list_remove').width()+$('。msg_list_item img').width());
		    // 获取所有行，对每一行设置监听
		    var lines = $(".msg_list_item");
		    var len = lines.length;
		    var lastX, lastXForMobile;
		    // 用于记录被按下的对象
		    var pressedObj;  // 当前左滑的对象
		    var lastLeftObj; // 上一个左滑的对象
		    // 用于记录按下的点
		    var start;
		    // 网页在移动端运行时的监听
		    for (var i = 0; i < len; ++i) {
		    	   lines[i].addEventListener('touchstart', function(e){
		            lastXForMobile = e.changedTouches[0].pageX;
		            pressedObj = this; // 记录被按下的对象
		            // 记录开始按下时的点
		            var touches = event.touches[0];
		            start = {
		                x: touches.pageX, // 横坐标
		                y: touches.pageY  // 纵坐标
		            };
		        });
		        lines[i].addEventListener('touchstart', function(e){
		            lastXForMobile = e.changedTouches[0].pageX;
		            pressedObj = this; // 记录被按下的对象
		
		            // 记录开始按下时的点
		            var touches = event.touches[0];
		            start = {
		                x: touches.pageX, // 横坐标
		                y: touches.pageY  // 纵坐标
		            };
		        });
		        lines[i].addEventListener('touchmove',function(e){
		            var touches = event.touches[0];
		            delta = {
		                x: touches.pageX - start.x,
		                y: touches.pageY - start.y
		            };
		            if (Math.abs(delta.x) > Math.abs(delta.y)) {
		                event.preventDefault();
		            }
		        });
		        lines[i].addEventListener('touchend', function(e){
		            if (lastLeftObj && pressedObj != lastLeftObj) { // 点击除当前左滑对象之外的任意其他位置
		                $(lastLeftObj).animate({marginLeft:"0"}, 200); // 右滑
		                lastLeftObj = null; // 清空上一个左滑的对象
		            }
		            var diffX = e.changedTouches[0].pageX - lastXForMobile;
		            if (diffX < -50) {
		                $(pressedObj).animate({marginLeft:"-1.26rem"}, 200); // 左滑
		                $(pressedObj).children('.msg_list_remove').animate({right:"0rem"}, 200);
		                lastLeftObj && lastLeftObj != pressedObj &&
		                    $(lastLeftObj).animate({marginLeft:"0"}, 200); // 已经左滑状态的按钮右滑
		                lastLeftObj = pressedObj; // 记录上一个左滑的对象
		            } else if (diffX > 50) {
		              if (pressedObj == lastLeftObj) {
		                $(pressedObj).animate({marginLeft:"0"}, 200); // 右滑
		                $(pressedObj).children('.msg_list_remove').animate({right:"-2.01rem"}, 200);
		                lastLeftObj = null; // 清空上一个左滑的对象
		              }
		            }
		        });
		    }
		});
	}
	//点击右滑删除操作
	$('body').on('click','.msg_list_remove',function(e){
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
	//点击选择执行动画
	$(".msg_header_right").on('click',function anim(){
		$(".msg_list_item_left").animate({'left':'0'},300);
		$(".msg_list_item_center").animate({'left':'.53rem'},300);
		//底部调换
		$(".msg_bottom").fadeIn(10).animate({
            bottom:"1.8rem"  
       		},500);
  	})
	$(".msg_header_right").toggle(function anim(){
		$(this).children('img').hide();
		$(this).children('p').show();
		$(".msg_list_item_left").animate({'left':'0'},300);
		$(".msg_list_item_center").animate({'left':'.53rem'},300);
		//底部调换
		$(".msg_bottom").fadeIn(10).animate({
            bottom:"1.8rem"  
       	},500);
       	
       	//全选
		$('.msg_header_left').toggle(function(){
			$('.msg_list_item_left img').attr('src','../images/resident/message-check box-selected.png');
			$('.msg_list_item_left img').addClass('choiced');
			//删除
			$('.remove_btn').click(function(){
				$(".choiced").parent().parent().delay(100).animate({"left":'8.5rem'});
					$('.choiced').parent().parent().slideUp("1000",function(){
						$('.choiced').parent().parent().remove();
					});
					//底部调换
					$(".msg_bottom").slideDown(100).animate({
			            bottom:"-1.58rem"  
			       	},500);
			})
			
		},function(){
			$('.msg_list_item_left img').attr('src','../images/resident/message-check box-normal.png');
			$(this).children('img').removeClass('choiced');
		});
		//单个操作
		$('.msg_list_item_left').toggle(function(e){
			$(this).children('img').attr('src','../images/resident/message-check box-selected.png');
			$(this).children('img').addClass('choiced');
			//单个删除
			$('.remove_btn').click(function(){
				$(".choiced").parent().parent().delay(100).animate({"left":'8.5rem'});
					$('.choiced').parent().parent().slideUp("1000",function(){
						$('.choiced').parent().parent().remove();
					});
			})
		},function(){
			$(this).children('img').attr('src','../images/resident/message-check box-normal.png');
			$(this).children('img').removeClass('choiced');
		});
  	},function(){
  		$(this).children('p').hide();
  		$(this).children('img').show();
  		$(".msg_list_item_left").animate({'left':'-.98rem'},300,function(){
  			$(".msg_list_item_center").stop().animate({'left':'0'},300);
  		});
		//底部调换
		$(".msg_bottom").stop().slideDown(100).animate({
            bottom:"-1.58rem"  
       	},500);
  	})
	
	$('.readed_btn').click(function(){
		$(".choiced").parent().siblings('.msg_list_item_center').children(".unread").remove();
	})
	
})
