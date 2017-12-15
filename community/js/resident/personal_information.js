$(function(){
	$('.textarea').click(function(){
		//点击输入框，内容置空，字体颜色改变
		$(this).html('');
		$(this).css('color',"#3A3A3A");
	});
	
	//如果地址栏输入内容，则详细地址栏显示
	$('.address').blur(function(){
		if($('.address').val() !== ''){
		 	$('.form_detail_address').show();
		}
	});
	
	//表单验证
	// 定义提示信息
	var unameErro='用户名输入格式有误，请重新输入！';
	var unameReg = /^[\u4E00-\u9FA5A-Za-z]+$/;
	var uname=('.uname');
	var phoneErro='请输入11位手机号码';
	var phone=('.phone');
	var emailErro='输入邮箱格式不正确！';
	var email=('.email');
	var userIdErro='身份证号格式不正确！';
	var userId=('.userId');
	var empty='输入不能为空！'
	var emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
	var phoneReg=/^1[3|4|5|8][0-9]\d{4,8}$/;
	var userIdReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
	var gender=('.gender');
	var address=('.address');
	var detail_address=('.detail_address');
	
	//判断及验证
	 function set_Reg(selector,reg,testReg,empty,erro){
        if($(testReg).val() == null){
           $(selector).attr('placeholder',empty).addClass('form_error');
            return false;
        }else if (!reg.test($(testReg).val())) {
            $(selector).attr('placeholder',erro).addClass('form_error');
            return false;
        }else{
            $(selector).removeClass('form_error');
            return true;
        }
    }
	 //输入不能为空
	function set_Null(selector,test,empty){
        if($(test).val() == '' || $(test).val() == null){
            $(selector).attr('placeholder',empty).addClass('form_error');
            return false;
        }else{
            $(selector).removeClass('form_error');
            return true;
        }
    }
 
	 $('.next_step').click(function(e){
	 	e.preventDefault();
	 	//不能为空判断
	 	var uname_msg=set_Null(uname,uname,empty);
	 	var address_msg=set_Null(address,address,empty);
	 	
	 	var phone_msg=set_Reg(phone,phoneReg,phone,empty,phoneErro);
	 	var email_msg=set_Reg(email,emailReg,email,empty,emailErro);
	 	var id_msg=set_Reg(userId,userIdReg,userId,empty,userIdErro);
	 	
		 	if(phone_msg && email_msg && id_msg && uname_msg && address_msg){
		 		window.location.href='personal_information_perfect.html';
		 		return true;
		 	}
	})
	 
	 //鼠标再次进入去掉错误提示样式
	  $(uname).focus(function(){
	  	$(uname).val('').removeClass('form_error');
	});
	
	 $(phone).focus(function(){
	  	$(phone).val('').removeClass('form_error');
	});
	
	$(email).focus(function(){
	  	$(email).val('').removeClass('form_error');
	});
	
	$(userId).focus(function(){
	  	$(userId).val('').removeClass('form_error');
	});
	
	$(address).focus(function(){
	  	$(address).val('').removeClass('form_error');
	});
});

