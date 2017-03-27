/**
 * Created by mac on 2017/2/22.
 */
$(document).ready(function(){

    var oAds = {
        init:function(){
            // FastClick.attach(document.body);
            this.reback();
            this.liMove();
            this.deleteClick();
        },
        reback:function(){
            $('.reback').on("click",function(){
                window.history.go(-1);
            });
        },
        liMove:function(){

            var startX = 0;
            var moveEndX = 0;
            var endX = 0;

            $(".ads-ul li .ads-left-box").on("touchstart", function(e) {

                startX = e.changedTouches[0].pageX;
            });

            $(".ads-ul li .ads-left-box").on("touchmove", function(e) {

                moveEndX = e.changedTouches[0].pageX;
                X = moveEndX - startX;

                if(X<-50){
                    $(".ads-ul li").removeClass('mar-to-left');
                    $(this).parent('li').addClass('mar-to-left');
                }else if(X>50){
                    $(this).parent('li').removeClass('mar-to-left');
                }
            });

            $(".ads-ul li .ads-left-box").on("touchend", function(e) {

                endX = e.changedTouches[0].pageX;
                var pos = endX-startX;

                if(Math.abs(pos)<50 && !$(this).parent('li').is('.mar-to-left')){
                    window.location.href="pur_adsDetail.html"
                }else if(Math.abs(pos)<50 ){
                    $(this).parent('li').removeClass('mar-to-left');
                }
            });
        },
        deleteClick:function(){
            $('.content').delegate('.ads-right-box','click',function(){
                $(this).parent('li').remove()
            })
        }
    }
    oAds.init();
})

