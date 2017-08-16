
$(function(){
	$('.tab_switch_cont').height($(window).height()-$('.user_msg').height()-$('.nav_bottom').height());
	alert($('.tab_switch_cont').height());
	alert($('.tab_switch_cont').height());
	//收藏切换
	$('.hj_shipin_collect').toggle(function() { 
		$(this).attr('src','../../images/human_market/collect.png');
	},function(){
		$(this).attr('src','../../images/human_market/collect_not.png');
	})
})
