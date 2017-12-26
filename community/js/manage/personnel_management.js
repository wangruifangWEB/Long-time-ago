$(function(){
	//左滑函数调用
	youhua();
	function youhua(){
		$(document).ready(function(e) {
		    // 设定每一行的宽度=屏幕宽度+按钮宽度
		    // 设定常规信息区域宽度=屏幕宽度
			$('.per_list_item_right').width($(document).width()-80+'px');
			$('。per_list_item').width($('.per_list_item_right').width()+$('。per_list_remove').width());
		    // 获取所有行，对每一行设置监听
		    var lines = $(".per_list_item");
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
		                $(pressedObj).children('.per_list_remove').animate({right:"0rem"}, 200);
		                lastLeftObj && lastLeftObj != pressedObj &&
		                    $(lastLeftObj).animate({marginLeft:"0"}, 200); // 已经左滑状态的按钮右滑
		                lastLeftObj = pressedObj; // 记录上一个左滑的对象
		            } else if (diffX > 50) {
		              if (pressedObj == lastLeftObj) {
		                $(pressedObj).animate({marginLeft:"0"}, 200); // 右滑
		                $(pressedObj).children('.per_list_remove').animate({right:"-2.01rem"}, 200);
		                lastLeftObj = null; // 清空上一个左滑的对象
		              }
		            }
		        });
		    }
		});
	}
	//点击右滑删除操作
	$('body').on('click','.per_list_remove',function(e){
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
	$(".readed_btn").toggle(function anim(){
		$(".per_list_item_left").animate({'left':'-.88rem'},300);
		$(".per_list_item").animate({'left':'.93rem'},300);
		$('.readed_btn p').html('完成');
		//选中与否切换操作
		$('.per_list_item_left img').toggle(function(){
			$(this).attr('src','../images/resident/message-check box-selected.png').addClass('choiced');
		},function(){
			$(this).attr('src','../images/resident/message-check box-normal.png').removeClass('choiced');
		})
		
		//删除按钮
		$('.remove_btn').click(function(){
			$(".choiced").parent().parent().delay(100).animate({"left":'8.5rem'});
				$('.choiced').parent().parent().slideUp("1000",function(){
					$('.choiced').parent().parent().remove();
				});
		})
		
  	},function(){
  		$(".per_list_item_left").animate({'left':'-1.18rem'},300);
		$(".per_list_item").animate({'left':'0'},300);
		$('.readed_btn p').html('批量处理');
  	});
})
