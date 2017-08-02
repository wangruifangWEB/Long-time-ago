$('.z-alert').height($(window).height()-$('header').height())	
//表单验证
$('.bm_bg').height($(window).height()-$('footer').height());
function vail1(s1){
	return s1.replace(/^1[34578]\d{9}$/g, "");
}
function vail2(s2){
	return s2.replace(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, "");
}					
							       

$(function(){
	$('.radio_txt .c').toggle(function(){
		$('.radio_txt .c').css('background-image','url(../../images/oval1.png)');// 未选中
		$('.radio_txt').removeClass('agree');
		
	},function(){					
		$('.radio_txt .c').css('background-image','url(../../images/oval2.png)');// 选中
		$('.radio_txt').addClass('agree');
	})
	
	
	$('#submit').click(function(e){	
		var teamname=$('#teamname');
		if(teamname.val()==""){
			$('.alert_txt p').html('请填写团队名称!');
			$('.alert_show2').show();						
			$('.second').click(function(){							
				$('.alert_show2').hide();
			});	
			return false;
		}

		var userName=$('#username');
		if(userName.val()==""){
			$('.alert_txt p').html('请填写领队名称!');
			$('.alert_show2').show();						
			$('.second').click(function(){							
				$('.alert_show2').hide();
			});						
			return;
		}

		var usertel=$('#usertel');
		var reg=/^1[3|4|5|7|8]\d{9}$/;
		if(!reg.test(usertel.val())){
	 		$('.alert_show1').show();						
			$('.second').click(function(){							
				$('.alert_show1').hide();
			});	
			return;
		}else{
			document.getElementById('userT').style.color='#595959';	
		}

		var usercard=$('#usercard');
		var reg=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		if(!reg.test(usercard.val())){
			$('.alert_txt_vail span').html('身份证');
			$('.alert_show1').show();								
			$('.second').click(function(){
				$('.alert_show1').hide();
			});	
			return;
		}else{
		document.getElementById('userC').style.color='#595959';	
			$('#userC').addClass('border_green');
		}

		if(!($('.radio_txt').hasClass('agree'))){
			$('.alert_txt p').html("请阅读并同意《负责说明》！");
			$('.alert_show2').show();									
				$('.second').click(function(){							
				$('.alert_show2').hide();
			});
			return;
			e.preventDefault();
		}else{
			document.getElementById('subform').submit();return false
		}
		var teamName = $('#teamname').val();
		var userTel = $('#usertel').val();
		var userCard =$('#usercard').val();
		
		
		if($('#teamname').val()||$('#username').val()==""||$('#usertel').val()==""||$('#usercard').val()==""||(!($('.radio_txt').hasClass('agree')))){
			$('#submit').attr('disabled','disabled');
		}
	});	
})

		
	
	
//判断团队名字
var checkuser=function(){
	if($('#username').val()==""){
		$('#username').siblings().addClass('border_red');
	}else{
		$('#username').siblings().addClass('border_green').removeClass('border_red');
	}
};
//  手机号 
var checktel=function(){
	var reg=/^1[34578]\d{9}$/g;
	var usertel=document.getElementById('usertel');
	if(!reg.test(usertel.value)){
		$('#usertel').siblings().addClass('border_red');
		$('.alert_txt_vail span').html('手机号码');
		$('.alert_show1').show();								
		$('.second').click(function(){
			$('.alert_show1').hide();
		});	
	}else{
		$('#usertel').siblings().addClass('border_green').removeClass('border_red');
	}
};
var checknum=function(){
	var reg=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
	var usercard=document.getElementById('usercard');
	if(!reg.test(usercard.value)){
		$('#usercard').siblings().addClass('border_red');
		$('.alert_txt_vail span').html('身份证');
			$('.alert_show1').show();								
			$('.second').click(function(){
				$('.alert_show1').hide();
			});
	}else{
		$('#usercard').siblings().addClass('border_green').removeClass('border_red');
		}
	};



var teamnamerepeat=$('.teamname');
/*teamnamerepeat.blur(function(){
	var team_name=$('input[name="team_name"]').val();
	$.ajax({
		url:"__CONTROLLER__/teamnamerepeat",//这里指向的就不再是页面了，而是一个方法。
		data:{team_name:team_name},
		type:"POST",
		dataType:"JSON",
		success: function(data){
			//alert(data.status);//这里要用索引，使用eq读取不出来数据。
			//console.log(data.status);
			if (data.status == 0) {  
				var aa = document.getElementById('teamname');  
				$('#teamname').addClass('border_green');
				
			}else{
				var aa = document.getElementById('teamname');  
				$('#teamname').addClass('border_red');
			}
			
		}
	})*/
var checkName=function(){
	var team_name=$('input[name="team_name"]').val();
	$.ajax({
		url:"__CONTROLLER__/teamnamerepeat",//这里指向的就不再是页面了，而是一个方法。
		data:{team_name:team_name},
		type:"POST",
		dataType:"JSON",
		success: function(data){
			//alert(data.status);//这里要用索引，使用eq读取不出来数据。
			//console.log(data.status);
			if (data.status == 0) {  
				$('#teamname').siblings().addClass('border_green').removeClass('border_red');
				
			}else if(data.status == 1){
				$('#teamname').siblings().addClass('border_red');
				
			}
		}
	})
};