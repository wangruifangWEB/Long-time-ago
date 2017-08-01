document.getElementById('btn').onclick=function() {
	var s=document.form1.uploadFileCtrl.value; 
    if(s==""){
        alert("您还没有选择文件");
        document.form1.uploadFileCtrl.focus();
        return ;
    }
}