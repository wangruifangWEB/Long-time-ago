$(function(){
	// 搜索栏动画
	$('.search').click(function(){
		$('.dropload-down').hide();
		//禁用筛选事件
		$('.search').animate({'width':'5.3rem'},500);
		$(this).siblings('span').hide();
		$(this).siblings('.cancel').show();
		$('.self_orgnazition_container').hide();
		$('.cancel').click(function(){
			$('.cancel').hide();
			$('.self_orgnazition_container').show();
			$('.search').animate({'width':'4.8rem'},500);
			$('span').show(300);
			$('.dropload-down').show();
		});
		4
	});
	
	//筛选操作
	$('.audit_filter').toggle(function(){
		//解绑搜索事件触发
		/*$('.search').unbind('click');*/
		$('.dropload-down').hide();
		$('.self_orgnazition_container').hide();
		//筛选框的显示
		$('.audit_drop_down_list').slideDown(function(){
			//点击确定按钮
			$('.audit_drop_down_list button').click(function(){
				$('.audit_drop_down_list').slideUp(function(){
					$('.self_orgnazition_container').show();
				});
			});
		});
		
		//点击选中
		$('.audit_drop_down_list .normal').toggle(function(){
			//将通用标签置于选中状态
			$(this).addClass("choiced");
		},function(){
			$(this).removeClass("choiced");
		});
		
		$('.audit_drop_down_list .choiced').toggle(function(){
			//将通用标签置于选中状态
			$(this).removeClass("choiced");
		},function(){
			$(this).addClass("choiced");
		});
		
	},function(){
		$('.dropload-down').show();
		$('.audit_drop_down_list').slideUp(function(){
			$('.self_orgnazition_container').show();
		});
	});
})
