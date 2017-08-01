$(function() {
	$('.z-alert').height($(window).height()-$('header').height());
	for (var i=0;i<$('.list_item li').length;i++) {
		var isEven=i % 2;
		if(isEven==0){
			$('.list_item li').eq(i).addClass('odd');
		}else if(isEven==1){
			$('.list_item li').eq(i).addClass('even');
		}
	}
})
