$(function(){
	//表单验证
	// 定义提示信息
	var teamName=('.teamName');
	var teamType=$('.teamType');
	var teamArea=$('.teamArea');
	var teamUit=$('.teamUit');
	var empty='输入不能为空！'
	
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
	 	var teamName_msg=set_Null(teamName,teamName,empty);
	 	var teamType_msg=set_Null(teamType,teamType,empty);
	 	var teamArea_msg=set_Null(teamArea,teamArea,empty);
	 	var teamUit_msg=set_Null(teamUit,teamUit,empty);
	 	
	 	if(teamName_msg && teamType_msg && teamArea_msg && teamUit_msg){
	 		//验证通过跳转页面
	 		window.location.href='application_success.html';
	 		return true;
	 	}else{
	 		return false;
	 	}
	})
	 
	 //鼠标再次进入去掉错误提示样式
	  $(teamName).focus(function(){
	  	$(teamName).val('').removeClass('form_error');
	});
	
	 $(teamType).focus(function(){
	  	$(teamType).val('').removeClass('form_error');
	});
	
	 $(teamArea).focus(function(){
	  	$(teamArea).val('').removeClass('form_error');
	});
	
	 $(teamUit).focus(function(){
	  	$(teamUit).val('').removeClass('form_error');
	});
	
});

