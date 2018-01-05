 $(function(){
 	//获取元素
	var tel=$(".tel");
	var gander=$(".gander");
	var dateBirth=$(".date_birth");
	var Ic=$(".Ic");
	var workIndustry=$(".Work_industry");
	var workPost=$(".work_post");
	var helath=$(".helath");
	//正则表达式
	var telReg=/^1[3|4|5|8][0-9]\d{4,8}$/;
	var icReg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	//提示文字
	var empty='输入不能为空！';
	var telError='号码输入格式不正确！';
	var icError='身份证号输入格式不正确！';
	//确定提交
	$(".sure").click(function(e){
		e.preventDefault();
		//获取用户输入值
		var userTel=tel.val();
		var userGander=gander.val();
		var userDateBirth=dateBirth.val();
		var userIc=Ic.val();
		var userWorkIndustry=workIndustry.val();
		var userWorkPost=workPost.val();
		var userHelath=helath.val();
		//验证输入通过向下执行，否则false
		var userTelReg=set_Reg(tel,telReg,tel,empty,telError);
		var userIcReg=set_Reg(Ic,icReg,Ic,empty,icError);
		//验证非空
		var userGanderReg=set_Null(gander,gander,empty);
		var userDateBirthReg=set_Null(dateBirth,dateBirth,empty);
		var userWorkIndustryReg=set_Null(workIndustry,workIndustry,empty);
		var userWorkPostReg=set_Null(workPost,workPost,empty);
		var userHelathReg=set_Null(helath,helath,empty);
		
		if(userTelReg && userGanderReg && userDateBirthReg && userIcReg && userWorkIndustryReg && userWorkPostReg && userHelathReg){
				$.ajax({
					type:"get",
					url:"",
					async:true,
					success:function(){
						window.location.href='person_center.html';
					},
					error:function(){
						
					}
				});
			/*return true;*/
		}else{
			return false;
		}
	});
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
	//判断及验证
	 function set_Reg(selector,reg,testReg,empty,erro){
        if($(testReg).val() == null || $(testReg).val() == ''){
           $(selector).attr('placeholder',empty).addClass('form_error');
            return false;
        }else if (!reg.test($(testReg).val())) {
            $(selector).attr('placeholder',erro).val('').addClass('form_error');
            return false;
        }else{
            $(selector).removeClass('form_error');
            return true;
        }
    }
	 
	 //鼠标再次进入去掉错误提示样式
	tel.focus(function(){
	  	tel.attr('placeholder','').removeClass('form_error');
	});
	
	 gander.focus(function(){
	  	gander.attr('placeholder','').removeClass('form_error');
	});
	
	dateBirth.focus(function(){
	  	dateBirth.attr('placeholder','').removeClass('form_error');
	});
	
	Ic.focus(function(){
	  	Ic.attr('placeholder','').removeClass('form_error');
	});
	
	 workIndustry.focus(function(){
	  	workIndustry.attr('placeholder','').removeClass('form_error');
	});
	
	workPost.focus(function(){
	  	workPost.attr('placeholder','').removeClass('form_error');
	});
	
	helath.focus(function(){
	  	helath.attr('placeholder','').removeClass('form_error');
	});
});
//获取头像函数
function getObjectURL(file) {
    var url = null ; 
    if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
    } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }
    return url;
}