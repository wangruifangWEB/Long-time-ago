
function biglv() {
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
}
biglv();
window.onresize = function() {
	biglv();
	location.reload();
}
//toggle 兼容处理
$.fn.toggle = function( fn ) {
    // Save reference to arguments for access in closure
    var args = arguments,
            guid = fn.guid || jQuery.guid++,
            i = 0,
            toggler = function( event ) {
                // Figure out which function to execute
                var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
                jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
 
                // Make sure that clicks stop
                event.preventDefault();
 
                // and execute the function
                return args[ lastToggle ].apply( this, arguments ) || false;
            };
 
        // link all the functions, so any of them can unbind this click handler
    toggler.guid = guid;
    while ( i < args.length ) {
        args[ i++ ].guid = guid;
    }
 
    return this.click( toggler );
}


// tab切换
$(function(){
	$('.tab_switch_ul li').click(function(){
		var i=$('.tab_switch_ul li').index(this);
		$('.tab_switch_ul li').eq(i).addClass('active').siblings().removeClass('active');
		$('.tab_switch_cont_first').eq(i).show().siblings().hide();
	})
})

