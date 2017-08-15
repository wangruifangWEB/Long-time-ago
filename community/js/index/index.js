 	$(function(){
		var gs = $('.clearfix2').find("img").length * 8.9;
		$('.clearfix2').css("width",gs+'rem');
		
		var toTop=document.getElementById("toTop");
	   	window.onscroll=function(){
	     	if(document.body.scrollTop>=50){
	     		toTop.style.display="block";
	     	}else{
	        	toTop.style.display="";
	     	}
	    }
	});
 
	