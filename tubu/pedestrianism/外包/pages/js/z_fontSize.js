function biglv(){
        document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+'px';
	
}

biglv();
window.onresize = function(){
	biglv();
}