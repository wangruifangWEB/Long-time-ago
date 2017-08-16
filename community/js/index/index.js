 	$(function(){	
		//回到顶部
		var toTop=document.getElementById("toTop");
	   	window.onscroll=function(){
	     	if(document.body.scrollTop>=50){
	     		toTop.style.display="block";
	     	}else{
	        	toTop.style.display="";
	     	}
	    }
	});
