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
		$("#left_table2").append('<tr><th class="name">'+'欧阳娜娜'+'</th></tr>');
		$('#right_table2').append('<tr><td class="idCard">'+'130132199008232669'+'</td><td class="tel">'+'13682646483'+'</td><td class="gend">'+'男'+'</td><td class="sit">'+'是'+'</td><td class="money">'+'￥1000'+'</td></tr>');                          
	}
	$('.add_people').click(function(){
		var num=prompt('请输入添加几人','');
		if(isNaN(num)){
			alert('请输入数字');
			return;
		}else{
			for(var i=0;i<num;i++){
				$("#left_table2").append('<tr><th class="name">'+''+'</th></tr>');
				$('#right_table2').append('<tr><td class="idCard">'+''+'</td><td class="tel">'+''+'</td><td class="gend">'+''+'</td><td class="sit">'+''+'</td><td class="money">'+''+'</td></tr>');                          
			}
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
			new objFun('#left_table2 .name','name','red name','请正确填写姓名',/^(((\s?[\u4e00-\u9fa5]+\s?)+)|([a-zA-Z]+\s?)+)$/);
			new objFun('#right_table2 .idCard','idCard','red idCard','请填写格式正确的身份证号',/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/);
			new objFun('#right_table2 .tel','tel','red tel','请填写格式正确的手机号',/^1[3|4|5|8][0-9]\d{4,8}$/);
			new objFun('#right_table2 .gend','gend','red gend','请正确填写性别',/^(男|女)$/);
			new objFun('#right_table2 .sit','sit','red sit','请填写是否乘坐摆渡车',/^(是|否)$/);
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
	var objFun=function(a,c,d,text_notice,reg_format,a_list){
		var i = 0;
		$(a).on('click', function (ev) {
			var x=$(a).index(this);
			var ev=ev||window.event;
			var target=ev.target||ev.srcElement;
	        i++;
	        setTimeout(function () {
	            i = 0;
	        }, 500);
	        if (i > 1) {
	        	var temp=$('input.change').length;
	        	if(temp>0){
	        		var tt=$('input.change').val();
	        		$('input.change').parent().html(tt);
	        	}
	        	var td = $(this);
			    // 根据表格文本创建文本框 并加入表表中--文本框的样式自己调整
			    var text = td.text();
			    var txt = $("<input type='text' class='change' autofocus='autofocus'> ").val(text);
			    $('input.change').focus();
			    txt.blur(function(){
					// 失去焦点，保存值。于服务器交互自己再写,最好ajax
					var newText = $(this).val();
					target.className=c;
			        $(this).remove();
			        td.text(newText);
					if(target.className==c){
						var reg=reg_format;
					    if(!reg.test($(a).eq(x).html())){
					    	alert(text_notice);
							target.className=d;
						}else{
							target.className=c;
						}
					}
			   });
			    td.text("");
			    td.append(txt);
	        }
	    })
	}
	
	
	new objFun('#left_table2 .name','name','red name','请正确填写姓名',/^(((\s?[\u4e00-\u9fa5]+\s?)+)|([a-zA-Z]+\s?)+)$/);
	new objFun('#right_table2 .idCard','idCard','red idCard','请填写格式正确的身份证号',/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/);
	new objFun('#right_table2 .tel','tel','red tel','请填写格式正确的手机号',/^1[3|4|5|8][0-9]\d{4,8}$/);
	new objFun('#right_table2 .gend','gend','red gend','请正确填写性别',/^(男|女)$/);
	new objFun('#right_table2 .sit','sit','red sit','请填写是否乘坐摆渡车',/^(是|否)$/);
})
	
	
/*
 * 要求：真实姓名可以是汉字，也可以是字母，但是不能两者都有，也不能包含任何符号和数字
 * 注意：1.如果是英文名,可以允许英文名字中出现空格
 * 2.英文名的空格可以是多个，但是不能连续出现多个
 * 3.汉字不能出现空格
 */
