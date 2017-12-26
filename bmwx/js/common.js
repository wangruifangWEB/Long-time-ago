$(function() {
    FastClick.attach(document.body);
    var w=document.documentElement.clientWidth;
	var a=$("html").css("font-size");
	var ws=(w*4/75).toFixed(5)+"px";
	$("html").css({"font-size":ws});
});