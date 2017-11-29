$(function(){
	//点击驳回
	$('.reject_btn').click(function(){
		$(".sta_container_reject").show();
	});
	
	//点击同意
	$('.agree_btn').click(function(){
		$(".agree_text").show();
	});
	
	//点击确定
	$('.sure').click(function(){
		var rejectContent=$('.reject_content').text();
		if(rejectContent == ''){
			alert('驳回理由不能为空！');
		}
	})
})
