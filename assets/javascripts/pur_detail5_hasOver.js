/**
 * Created by mac on 2017/2/27.
 */
$(document).ready(function(){

    var oDetail5Has = {
        init:function(){
            this.reback();
            this.iconClick();
            this.argeeClick();
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        },
        iconClick:function(){
            $('.icon').on('click',function(){
                $("#opacityDiv").css({'display':'block'});
                $(".askAlert").css({'display':'block'});
            })

            $(".yesBtn").on('click',function(){
                $("#opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
            })
        },
        argeeClick:function(){
            $('.agree').on('click',function(){
                window.location.href="pur_repayment.html"
            })
        }

    }

    oDetail5Has.init();


})