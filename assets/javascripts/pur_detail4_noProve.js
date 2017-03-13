/**
 * Created by mac on 2017/2/27.
 */
$(document).ready(function(){

    var oDetail4No = {
        init:function(){
            this.reback();
            this.alertClick();
            this.toHref();
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        },
        alertClick:function(){
            $('.icon').on('click',function(){
                $(".opacityDiv").css({'display':'block'});
                $(".askAlert").css({'display':'block'});
            })

            $(".yesBtn").on('click',function(){
                $(".opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
            })
        },
        toHref:function(){
            $('.yes-btn').on('click',function(){
                window.location.href="pur_repayment.html"
            })
        }
    }

    oDetail4No.init();


})