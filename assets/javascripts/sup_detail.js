/**
 * Created by mac on 2017/2/24.
 */
$(document).ready(function(){

    var oDetail = {
        init:function(){
            this.reback();
            this.iconClick();
            this.agreeClick();
            this.disagreeClick();
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        },
    //    点击对勾
        iconClick:function(){
            var iconFlag = true;
            $('.order-book').on('click',function(){
                if(iconFlag){
                    $('.order-gou').removeClass('icon-gou')
                    iconFlag=false;
                }else{
                    $('.order-gou').addClass('icon-gou')
                    iconFlag=true;
                }
            })
        },
        agreeClick:function(){
            $('#yes-btn').on('click',function(){
                $(".opacityDiv").css({'display':'block'});
                $(".yes-alert").css({'display':'block'});
            })

            $(".yesBtn").on('click',function(){
                $(".opacityDiv").css({'display':'none'});
                $(".yes-alert").css({'display':'none'});
            //    向后台提交数据改状态
                window.location.href="sup_order.html"
            })

            $(".noBtn").on('click',function(){
                $(".opacityDiv").css({'display':'none'});
                $(".yes-alert").css({'display':'none'});
            })
        },
        disagreeClick:function(){
            $('#no-btn').on('click',function(){
                $(".opacityDiv").css({'display':'block'});
                $(".no-alert").css({'display':'block'});
            })

            $(".yesBtn").on('click',function(){
                $(".opacityDiv").css({'display':'none'});
                $(".no-alert").css({'display':'none'});
                //    向后台提交数据改状态
                window.location.href="sup_order.html"
            })

            $(".noBtn").on('click',function(){
                $(".opacityDiv").css({'display':'none'});
                $(".no-alert").css({'display':'none'});
            })
        }
    }

    oDetail.init();


})