var winHeight=$(window).height();
	$('.talk_message').height($(document).height()-winHeight-40);
	$('.read_cont').height($(window).height()-$('header').height());
	$('.read_cont').css('top',$(window).height());

	//固定信息编辑内容
	$(function() {
		var elm = $('#dingwei'); //需要定位的类名
		var startPos = $(elm).offset().top-60;
		$.event.add(window, "scroll", function() {
			var p = $(window).scrollTop();
			$(elm).css('position', ((p) > startPos) ? 'fixed' : 'absolute');
			$(elm).css('top', ((p) > startPos) ? $("header").height() : '');
		});
	});
	
	$('.on2').click(function(){
		$('.read_cont').animate({'top':'0.98rem'});
		$('.read_cont').css('overflow-y','hidden');
		document.getElementById("textfocus").focus();
		$('.read_cont_detail').val('');
	});
	$('.talk_message_cont_send').click(function(){
		$('.read_cont').animate({'top':winHeight});
		$('.read_cont_detail').val('');
	})
	$('.talk_message_cont_return').click(function(){
		$('.read_cont').animate({'top':winHeight});
		$('.read_cont_detail').val('');
	})
	$('.intro_detail_portal_click').click(function(){
		$('.intro_detail').animate({'left':'7.5rem'});
	})
	$('.talk_message_title .talk_message_title_close').click(function(){
		$('.talk_hidden').css('display','block');
		$('.talk_message').animate({'left':'7.5rem'});
		$('.face-content').animate({'left':'7.5rem'});
		$('.on2 img').attr('src','images/qr-d-1.png');
		$('.on1 img').attr('src','images/pr-e-1.png');
		$('.z-sr').animate({'left':'200%'});
		$('.talk_hidden').animate({'left':'0'});
	})

	//分享
	$('.on3 img').click(function() {
		$('.bg123').show();
	});
	$('.bg123').click(function() {
		$(this).hide();
	});