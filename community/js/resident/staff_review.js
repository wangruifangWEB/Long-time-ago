$(function(){
	//点击驳回
	$('.reject_btn').click(function(){
		$(".sta_container_reject").show();
	});
	
	//点击同意
	$('.agree_btn').click(function(){
		$(".agree_text").show();
	});
	
	$('.reject_content').focus(function(){
		//调用键盘处理
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
