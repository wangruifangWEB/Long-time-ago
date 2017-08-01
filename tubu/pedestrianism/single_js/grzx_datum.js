$('.htj').toggle(function(){
	$('body').find('input').attr('readonly',false);
	$('.htj1').html('保存');
	$('.htj1').css({'background-color':'#f69200','color':'#f6f6f6'});
	$('input[type="radio"]').attr('disabled',false);
},function(){
	$('body').find('input').attr('readonly',true);
	$('input[type="radio"]').attr('disabled',true);
	$('.htj1').css({'background-color':'#f6f6f6','color':'#f69200'});
	$('.htj').html('编辑');
})
$('.dx').change(function(){
	$(this).find('i').toggleClass("lef");
})
var join_num=$('.join_num').html();
var enter_num=$('.enter_num').html();
	var scale = parseInt(join_num) / parseInt(enter_num)*100+'%' ;
	$('.vitality_list_point').animate({'left':scale});