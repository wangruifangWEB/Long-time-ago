function biglv() {
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
}
biglv();
window.onresize = function() {

	biglv();
	
}

$(function() {
	$(".d-title a").attr('href', 'javascript:;')
	var istrue = false;
	$(".d-title a").click(function() {
		var _this = $(this).find('img').attr('src')  
		if(istrue == true) {
			istrue = false;
			var _this = $(this).find('img').attr('src','/Public/Home/images/cd.png')
			$(".z-alert").animate({
				'left': "-4.04rem"
			}, 300)
		} else {
			istrue = true;
			var _this = $(this).find('img').attr('src','/Public/Home/images/gnbm.jpg')  
			$(".z-alert").animate({
				'left': 0
			}, 300)
			$(".box-transparent").show() 
 		}
	})
	$(".box-transparent").click(function(){
		istrue = false;
		$(this).hide() 
		 $('.d-title').find('img').attr('src','__PUBLIC__/Home/images/cd.png')
			$(".z-alert").animate({
				'left': "-4.04rem"
			}, 300)
	})
	/*
	$('.on2').click(function() {
		$(this).find('a').addClass("active")
		$(this).find('img').attr('src', $(this).find('img').attr('data'))
	})
	$('.on1').click(function() {
		$(this).find('img').attr('src', $(this).find('img').attr('data'))
	})
	$('.on3').click(function() {
		var str = $('.on3').find('img').attr('src')
		$('.on3').find('img').attr('src', $('.on3').find('img').attr('data'))
		$(".bg123").show()
		var Int = setTimeout(function() {
			$('.on3').find('img').attr('src', str)
		}, 1000)
	})
	$('.bg123').click(function() {
		$(this).hide()
	})*/
	$(".z-ipt").keydown(function(){
		if($(this).text().length){
			$(".z-add button").css('background','#47b233')
		}else{
			$(".z-add button").css('background','#9E9E9E')
		}
	})
	/*
	$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction : false,
        autoplay : 1500,     
        loop : true 
    });
   })*/
 
})



  $.fn.toggle = function( fn ) {
		    // Save reference to arguments for access in closure
		    var args = arguments,
		            guid = fn.guid || jQuery.guid++,
		            i = 0,
		            toggler = function( event ) {
		                // Figure out which function to execute
		                var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
		                jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
		 
		                // Make sure that clicks stop
		                event.preventDefault();
		 
		                // and execute the function
		                return args[ lastToggle ].apply( this, arguments ) || false;
		            };
		 
		        // link all the functions, so any of them can unbind this click handler
		    toggler.guid = guid;
		    while ( i < args.length ) {
		        args[ i++ ].guid = guid;
		    }				 
		    return this.click( toggler );
		}