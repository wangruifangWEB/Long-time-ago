$('.scroll').height($(window).height());
$('.bmcg').height($(window).height()-$('header').height()-$('footer').height());
$('.bmcg').css('margin-top',(-($('.bmcg').height()/2)));