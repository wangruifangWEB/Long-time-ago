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
					new newObj('#right_table2 .shadow .name');
					new newObj('#right_table2 .shadow .idCard');
					new newObj('#right_table2 .shadow .tel');
					new newObj('#right_table2 .shadow .gend');
					new newObj('#right_table2 .shadow .sit');
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
	
	
	
	var newObj=function(clickEle){
		$(clickEle).on('click', function (ev) {
	        if(!$(this).is('.change')){
	        	var x=$(clickEle).index(this);
				$(this).html('<input type="text" class="change" value="'+ $(this).text() +'" />');
				$(this).find('input').focus().blur(function(){
					$(this).parent().html($(this).val());
					/*var reg=regMatch;
					if(!reg.test($(this).val())){
						alert(layer_notice);
						$(clickEle).eq(x).addClass('red');
						return false;
					}else{
						$(clickEle).eq(x).removeClass('red');
					}*/
		      	});
		    }
	   	})
	}
	

	/*$('button').toggle(function(ev){
		alert('点击单次');
		$(this).html('确认');
		var x=$('#left_table2 button').index(this);
		$(this).addClass('confirm').removeClass('modify');
		console.log($('.confirm').length);
		$('#right_table2 tr').eq(x).addClass('shadow').siblings().removeClass('shadow');
		if($('.confirm').length>0){
			new newObj('#right_table2 .shadow .name');
			new newObj('#right_table2 .shadow .idCard');
			new newObj('#right_table2 .shadow .tel');
			new newObj('#right_table2 .shadow .gend');
			new newObj('#right_table2 .shadow .sit');
			$('.modify').attr('disabled','disabled');
		}
		
	},function(ev){
		alert('点击偶数次');
		var reg_idCard=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		var reg_name=/^(((\s?[\u4e00-\u9fa5]+\s?)+)|([a-zA-Z]+\s?)+)$/;
		var reg_tel=/^1[3|4|5|8][0-9]\d{4,8}$/;
		var reg_gend=/^(男|女)$/;
		var reg_sit=/^(是|否)$/;
		var x=$('#left_table2 button').index(this);
		if(!reg_name.test($('#right_table2 tr').eq(x).find('td.name').html())){
			alert('姓名信息填写错误');
			$('#right_table2 tr').eq(x).find('td.name').addClass('red');
			return;
		}else if(!reg_idCard.test($('#right_table2 tr').eq(x).find('td.idCard').html())){
			alert('身份证信息填写错误');
			$('#right_table2 tr').eq(x).find('td.idCard').addClass('red');
			return;
		}else if(!reg_tel.test($('#right_table2 tr').eq(x).find('td.tel').html())){
			alert('手机号信息填写错误');
			$('#right_table2 tr').eq(x).find('td.tel').addClass('red');
			return;
		}else if(!reg_gend.test($('#right_table2 tr').eq(x).find('td.gend').html())){
			alert('性别信息填写错误');
			$('#right_table2 tr').eq(x).find('td.gend').addClass('red');
			return;
		}else if(!reg_sit.test($('#right_table2 tr').eq(x).find('td.sit').html())){
			alert('请选择是否乘坐摆渡车');
			$('#right_table2 tr').eq(x).find('td.sit').addClass('red');
			return;
		}
		else{
			ev.stopPropagation();
			// 正确
			alert(true);
			$(this).html('修改');
			var x=$('.modify').index(this);
			$('#right_table2 tr').removeClass('shadow');
			$(this).removeClass('confirm').addClass('modify');
			console.log('toggle2='+$('.confirm').length);
			$('.modify').attr('disabled',false);
		}
	})*/
	

	
	
	$('.modify').click(function(){
			alert('modify');
//			$(this).html('确认');
			var x=$('#left_table2 button').index(this);
//			$(this).addClass('confirm').removeClass('modify');

//			$(this).replaceWith('<button class="confirm">确认</button>')
			$(this).remove();
			$('#left_table2 th').eq(x).append('<button class="confirm">确认</button>');
			alert($('button').eq(x).html());
			/*$('#right_table2 tr').eq(x).addClass('shadow').siblings().removeClass('shadow');
			if($('.confirm').length>0){
				new newObj('#right_table2 .shadow .name',/^(((\s?[\u4e00-\u9fa5]+\s?)+)|([a-zA-Z]+\s?)+)$/,'请正确填写姓名');
				new newObj('#right_table2 .shadow .idCard',/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,'身份证号格式错误');
				new newObj('#right_table2 .shadow .tel',/^1[3|4|5|8][0-9]\d{4,8}$/,'请填写格式正确的手机号');
				new newObj('#right_table2 .shadow .gend',/^(男|女)$/,'请正确填写性别');
				new newObj('#right_table2 .shadow .sit',/^(是|否)$/,'请填写是否乘坐摆渡车');
				$('.modify').attr('disabled','disabled');
			}*/
	})
	/*$('.confirm').click(function(){
		alert('confirm');
		if($('#right_table2 tr').children().hasClass('red')){
//			$(this).html('确认');
			var x=$('#left_table2 button').index(this);
//			$(this).addClass('confirm').removeClass('modify');
			$('#right_table2 tr').eq(x).addClass('shadow').siblings().removeClass('shadow');
		}else{
//			$(this).html('修改');
			var x=$('.modify').index(this);
//			$('#right_table2 tr').removeClass('shadow');
//			$(this).removeClass('confirm').addClass('modify');
			$(this).replaceWith('<button class="modify">修改</button>');
			$('.modify').attr('disabled',false);
		}
	})*/
	
	$('.confirm').on('click',function(){
		alert('confirm');
	})
	
})


