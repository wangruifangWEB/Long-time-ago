
$('.dx').change(function(){
	$(this).find('i').toggleClass("lef")
})
var text = $('.num').text()*2
$('.img-d span').css('left',text+'%');