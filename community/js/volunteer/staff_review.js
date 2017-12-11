$(function(){
	//点击驳回
	$('.reject_btn').click(function(){
		$(this).parent().parent().parent().siblings(".sta_container_reject").show();
	});
	
	//点击同意
	$('.agree_btn').click(function(){
		$(this).parent().parent().parent().siblings(".agree_text").show();
	});
	
	//调用键盘高度解决
	$('.reject_content').focus(function(){
		//调用键盘处理
		$('.sta_container').animate({
			top:'-5rem'
		},300)
	}).blur(function(){
		//调用键盘处理
		$('.sta_container').animate({
			top:'0'
		},300)
	})
	
	//点击确定
	$('.sure').click(function(){
        //获取文本框内容
		var rejectContent=$('.reject_content').text();
		if(rejectContent == ''){
			alert('驳回理由不能为空！');
		}
	});
	
})
