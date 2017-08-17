$(function(){
	for (var i=0;i<$('.list_item li').length;i++) {
		var isEven=i % 2;
		if(isEven==0){
			$('.list_item li').eq(i).attr('class','odd');
		}else if(isEven==1){
			$('.list_item li').eq(i).attr('class','even');
		}
	};
	i=0;
	$(window).on('ready',function anim(){
		$(".list_item li:eq("+i+")").animate({
            'opacity':'1',
            'top':'0'
        },100,function(){
            i++;
            $(this).delay().next().animate(50,anim());
        });
	})
 	$(".xd-tab-ul li").click(function() {
		var x=$(".xd-tab-ul li").index(this);
		$('.list_item li').css({'top':'-0.32rem','opacity': '0'});
		$(".xd-tab-ul li").eq(x).addClass('active').siblings().removeClass('active');
		$(".xd-tab-div .list_item").eq(x).show().siblings().hide();
		
		for (var i=0;i<$('.list_item li').length;i++) {
			var isEven=i % 2;
			if(isEven==0){
				$('.list_item li').eq(i).attr('class','odd');
			}else if(isEven==1){
				$('.list_item li').eq(i).attr('class','even');
			}
		}
	});
	
	i=0;
	$(".show111").on('click',function anim(){
		$(".xd-tab-div1 li:eq("+i+")").animate({
            'opacity':'1',
            'top':'0'
        },100,function(){
            i++;
            $(this).delay().next().animate(50,anim());
        });
    })
	$(".show222").on('click',function anim(){
		$(".xd-tab-div2 li:eq("+i+")").animate({
            'opacity':'1',
            'top':'0'
        },100,function(){
            i++;
            $(this).delay().next().animate(50,anim());
        });
    })
	$('.unread').parent().click(function(){
		location.href='grzx_message_detail.html';
	})
	
	
	
	
})

