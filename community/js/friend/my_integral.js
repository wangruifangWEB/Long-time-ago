$(function(){
    //初始化
    /*$.ajax({
        url:"",
        type:"post",
        success:function(data){

        },
        error:function(){
            setTimeout(function() {
                for(var i =0;i<8;i++) {
                    $(".list-group .integral_exchange_detail").append(`
                        <li>
                            <p>qwqwq</p>
                            <p>qwqwqwewq</p>
                        </li>
                    `);
                }
                 $(".loadtip p").hide();
                mySwiper.update(); // 重新计算高度;
            }, 800);
        }
    });*/
    //获取页面初始化信息个数
    // var msg_count=$(".course_cont").length;
    // console.log("页面初始化条数为："+msg_count);


	$('.swiper-container, .w').height($(window).height());
    var loadFlag = true;
    var oi = 0;
    var mySwiper = new Swiper('.swiper-container',{
        direction: 'vertical',
        scrollbar: '.swiper-scrollbar',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        onTouchMove: function(swiper){//手动滑动中触发
            var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
            var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;

        },
        onTouchEnd: function(swiper) {
            var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
            var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;

             // 上拉加载
            if(mySwiper.translate <= _viewHeight - _contentHeight - 50 && mySwiper.translate < 0) {
                $.ajax({
                    url:"",
                    type:"post",
                    success:function(data){

                    },
                    error:function(){
                        $('.loadtip p').css('display','block');
                        if(loadFlag){
                            $(".loadtip p").html('正在加载...');
                        }else{
                            $(".loadtip p").html('没有更多啦！');
                        }
                        setTimeout(function() {
                            for(var i =0;i<8;i++) {
                                $(".list-group .integral_exchange_detail").append(`
                                    <li>
                                        <p>qwqwq</p>
                                        <p>qwqwqwewq</p>
                                    </li>
                                `);
                            }
                             $(".loadtip p").hide();
                            mySwiper.update(); // 重新计算高度;
                            // $('.integral_exchange_detail').height($(window).height()-$('.integral_module_first').outerHeight()-$('.integral_exchange').height());
                            //获取页面上拉加载信息个数
                            /*var loading_count=$(".course_cont").length;
                            var loaded_count=loading_count-msg_count;
                            console.log("已上拉加载条数:"+loaded_count);
                            console.log("页面总共已有的条数"+loading_count);*/
                        }, 800);
                    }
                });
            }
            //刷新
            if(mySwiper.translate >= 50) {

            }
            return false;
        }
    });
var mySwiper2 = new Swiper('.swiper-container2',{
    onTransitionEnd: function(swiper){
//	$('.w').css('transform', 'translate3d(0px, 0px, 0px)');
        $('.swiper-container2 .swiper-slide-active').css('height','auto').siblings('.swiper-slide').css('height','0px');
        mySwiper.update();
        $('.tab a').eq(mySwiper2.activeIndex).addClass('active').siblings('a').removeClass('active');
    }
});
});
