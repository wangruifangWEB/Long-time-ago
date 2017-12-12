$(function(){
	//tab内容切换
	$('.audit_header li').click(function(){
		var i=$('.audit_header li').index(this);
		$(this).addClass('active').siblings().removeClass('active');
		$('.audit_list .tab_container_list').eq(i).addClass('show').siblings().removeClass('show');
	});
	
	//筛选操作
	$('.audit_filter').toggle(function(){
		/*//解绑搜索事件触发
		$('.audit_search').unbind('click');*/
		//筛选框的显示
		$('.audit_drop_down_list').slideDown(function(){
			$('.audit_list').hide();
			//点击确定按钮
			$('.audit_drop_down_list button').click(function(){
				$('.audit_drop_down_list').slideUp(function(){
					$('.audit_list').show();
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
		$('.audit_drop_down_list').slideUp(function(){
			$('.audit_list').show();
		});
	});
	//点击搜索
	$('.audit_search').click(function(){
		$('.audit_list').hide();
		$('.shaixuan').hide();
		$('.audit_down_input').show(function(){
			//默认聚焦状态
			$('.audit_down_input input').focus();
		});
		
		//点击取消
		$('.audit_down_input button').click(function(){
			$('.audit_list').show();
			$('.shaixuan').show();
			$('.audit_down_input').hide();
		});
	});
});