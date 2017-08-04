$(function(){
	$('#right_div2').height($(window).height() - $('header').height() - $('.team_name').height() - $('#right_div1').height() - $('footer').height() - $('button').height());
	$('#left_div2').height($('#right_div2').height());
	$('.scroll').height($(window).height() - $('footer').height());
	$('.container-fluid').height($(window).height() - $('footer').height());
	var right_div2 = document.getElementById("right_div2");
	right_div2.onscroll = function(){
	    var right_div2_top = this.scrollTop;
	    var right_div2_left = this.scrollLeft;
	    document.getElementById("left_div2").scrollTop = right_div2_top;
	    document.getElementById("right_div1").scrollLeft = right_div2_left;
	}
	//设置右边div宽度
	document.getElementById("right_div").style.width=""+document.documentElement.clientWidth-130+"px";	
	setInterval(function() {
		document.getElementById("right_div").style.width=""+document.documentElement.clientWidth-130+"px";	
	}, 0);
	for(var i=0;i<10;i++){
		$("#left_table2").append('<tr><th>'+'<button class="modify">修改</button>'+'</th></tr>');
		$('#right_table2').append('<tr><td class="name">'+'欧阳娜娜'+'</td><td class="idCard">'+'130132199008232669'+'</td><td class="tel">'+'13682646483'+'</td><td class="gend">'+'男'+'</td><td class="sit">'+'是'+'</td><td class="money">'+'￥1000'+'</td></tr>');                          
	}
	
	
	$('.add_people').click(function(){
		if((!$('#right_table2 tr').children().hasClass('red')) && (!$('button').hasClass('confirm')) ){   // 全部输入正确  不含有修改
			$("#left_table2").append('<tr><th>'+'<button class="modify">修改</button>'+'</th></tr>');
			$('#right_table2').append('<tr class="add_row"><td class="name">'+''+'</td><td class="idCard">'+''+'</td><td class="tel">'+''+'</td><td class="gend">'+''+'</td><td class="sit">'+''+'</td><td class="money">'+''+'</td></tr>');                          
			
			for(var i=1;i<=$('#right_table2 tr').length;i++){
				var isEven=i % 2;
				if(isEven==0){
					$('#right_table2 tr').eq(i).addClass('odd');
					$('#left_table2 tr').eq(i).addClass('odd');
				}else if(isEven==1){
					$('#right_table2 tr').eq(i).addClass('even');
					$('#left_table2 tr').eq(i).addClass('even');
				}
			}
			
			$('#right_div2').scrollTop($('.add_row:last').offset().top);
			
			$('button').toggle(function(){
				$(this).html('确认');
				var x=$('#left_table2 button').index(this);
				$(this).addClass('confirm').removeClass('modify');
				console.log($('.confirm').length);
				$('#right_table2 tr').eq(x).addClass('shadow').siblings().removeClass('shadow');
				if($('.confirm').length>0 && $(this).hasClass('confirm') ){
					new newObj('#right_table2 .shadow .name',/^(((\s?[\u4e00-\u9fa5]+\s?)+)|([a-zA-Z]+\s?)+)$/,'请正确填写姓名');
					new newObj('#right_table2 .shadow .idCard',/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,'身份证号格式错误');
					new newObj('#right_table2 .shadow .tel',/^1[3|4|5|8][0-9]\d{4,8}$/,'请填写格式正确的手机号');
					new newObj('#right_table2 .shadow .gend',/^(男|女)$/,'请正确填写性别');
					new newObj('#right_table2 .shadow .sit',/^(是|否)$/,'请填写是否乘坐摆渡车');
					$('.modify').attr('disabled','disabled');
				}
			},function(){
				if($('#right_table2 tr').children().hasClass('red')  ){
					$(this).html('确认');
					var x=$('#left_table2 button').index(this);
					$(this).addClass('confirm').removeClass('modify');
					$('#right_table2 tr').eq(x).addClass('shadow').siblings().removeClass('shadow');
				}else{
					$(this).html('修改');
					var x=$('.modify').index(this);
					$('#right_table2 tr').removeClass('shadow');
					$(this).removeClass('confirm').addClass('modify');
					console.log('toggle2='+$('.confirm').length);
					$('.modify').attr('disabled',false);
				}
				
			})
		}
		
	})
	for(var i=1;i<=$('#right_table2 tr').length;i++){
		var isEven=i % 2;
		if(isEven==0){
			$('#right_table2 tr').eq(i).attr('class','odd');
			$('#left_table2 tr').eq(i).attr('class','odd');
		}else if(isEven==1){
			$('#right_table2 tr').eq(i).attr('class','even');
			$('#left_table2 tr').eq(i).attr('class','even');
		}
		
	}
	
	
	
	var newObj=function(clickEle,regMatch,layer_notice){
		$(clickEle).on('click', function (ev) {
	        if(!$(this).is('.change')){
	        	var x=$(clickEle).index(this);
				$(this).html('<input type="text" class="change" value="'+ $(this).text() +'" />');
				$(this).find('input').focus().blur(function(){
					$(this).parent().html($(this).val());
					var reg=regMatch;
					if(!reg.test($(this).val())){
						alert(layer_notice);
						$(clickEle).eq(x).addClass('red');
						return false;
					}else{
						$(clickEle).eq(x).removeClass('red');
					}
		      	});
		    }
	   	})
	}
	

	
	
	
	
	$('button').click(function(){
		console.log($('button').attr('class'));
		if($('button').attr('class')=='modify'){
			alert(1);
			$(this).html('确认');
			var x=$('#left_table2 button').index(this);
			$(this).addClass('confirm').removeClass('modify');
			$('#right_table2 tr').eq(x).addClass('shadow').siblings().removeClass('shadow');
			if($('.confirm').length>0){
				new newObj('#right_table2 .shadow .name',/^(((\s?[\u4e00-\u9fa5]+\s?)+)|([a-zA-Z]+\s?)+)$/,'请正确填写姓名');
				new newObj('#right_table2 .shadow .idCard',/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,'身份证号格式错误');
				new newObj('#right_table2 .shadow .tel',/^1[3|4|5|8][0-9]\d{4,8}$/,'请填写格式正确的手机号');
				new newObj('#right_table2 .shadow .gend',/^(男|女)$/,'请正确填写性别');
				new newObj('#right_table2 .shadow .sit',/^(是|否)$/,'请填写是否乘坐摆渡车');
				$('.modify').attr('disabled','disabled');
			}
		}
		if($('button').attr('class') =='confirm'){
			alert(2);
			if($('#right_table2 tr').children().hasClass('red')){
				$(this).html('确认');
				var x=$('#left_table2 button').index(this);
				$(this).addClass('confirm').removeClass('modify');
				$('#right_table2 tr').eq(x).addClass('shadow').siblings().removeClass('shadow');
			}else{
				$(this).html('修改');
				var x=$('.modify').index(this);
				$('#right_table2 tr').removeClass('shadow');
				$(this).removeClass('confirm').addClass('modify');
				$('.modify').attr('disabled',false);
			}
		}
	})
	
	
	/*$('.modify').click(function(){
		alert(11111);
		$(this).html('确认');
		var x=$('#left_table2 button').index(this);
		$(this).addClass('confirm').removeClass('modify');
//		$('#right_table2 tr').eq(x).addClass('shadow').siblings().removeClass('shadow');
//		if($('.confirm').length>0){
//			new newObj('#right_table2 .shadow .name',/^(((\s?[\u4e00-\u9fa5]+\s?)+)|([a-zA-Z]+\s?)+)$/,'请正确填写姓名');
//			new newObj('#right_table2 .shadow .idCard',/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,'身份证号格式错误');
//			new newObj('#right_table2 .shadow .tel',/^1[3|4|5|8][0-9]\d{4,8}$/,'请填写格式正确的手机号');
//			new newObj('#right_table2 .shadow .gend',/^(男|女)$/,'请正确填写性别');
//			new newObj('#right_table2 .shadow .sit',/^(是|否)$/,'请填写是否乘坐摆渡车');
//			$('.modify').attr('disabled','disabled');
//		}
		alert($(this).attr('class'));
		$('.confirm').click(function(ev){
			ev.stopPropagation();
			alert(2);
	//		if($('#right_table2 tr').children().hasClass('red')){
	//			$(this).html('确认');
	//			var x=$('#left_table2 button').index(this);
	//			$(this).addClass('confirm').removeClass('modify');
	//			$('#right_table2 tr').eq(x).addClass('shadow').siblings().removeClass('shadow');
	//		}else{
	//			$(this).html('修改');
	//			var x=$('.modify').index(this);
	//			$('#right_table2 tr').removeClass('shadow');
	//			$(this).removeClass('confirm').addClass('modify');
	//			$('.modify').attr('disabled',false);
	//		}
			$(this).removeClass('confirm').addClass('modify');
		});
	});*/

	
	
	
	
	
	
	
	
	$/*('#continue').click(function(ev){
		if($('#right_table2 tr').children().hasClass('red')){ // 含有错误信息
			alert('请修改表格中的错误信息');
			return;
		}
		for(var i=0;i<$('#right_table2 tr').length;i++){
			if($('#right_table2 tr .idCard').eq(i).html()=="" && $('#right_table2 tr .name').eq(i).html()=="" && $('#right_table2 tr .tel').eq(i).html()=="" && $('#right_table2 tr .gend').eq(i).html()=="" && $('#right_table2 tr .sit').eq(i).html()==""){
				$('#right_table2 tr').eq(i).remove();
				$('#left_table2 tr').eq(i).remove();
			}else if($('#right_table2 tr .idCard').eq(i).html()==""){
				alert('第'+i+'行'+$('#right_table2 tr .name').eq(i).html()+'的身份证信息为空,请返回填写');
				return;
			}else if($('#right_table2 tr .name').eq(i).html()==""){
				alert('第'+i+'行姓名为空,请返回填写');
				return;
			}else if($('#right_table2 tr .tel').eq(i).html()==""){
				alert('第'+i+'行'+$('#right_table2 tr .name').eq(i).html()+'电话信息为空,请返回填写');
				return;
			}else if($('#right_table2 tr .gend').eq(i).html()==""){
				alert('第'+i+'行'+$('#right_table2 tr .name').eq(i).html()+'性别信息为空,请返回填写');
				return;
			}else if($('#right_table2 tr .sit').eq(i).html()==""){
				alert('第'+i+'行'+$('#right_table2 tr .name').eq(i).html()+'是否乘坐摆渡车信息为空,请返回填写');
				return;
			}
		}
		alert(1);
	})*/
	
	
})


