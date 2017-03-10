/**
 * Created by mac on 2017/2/24.
 */
$(document).ready(function(){

    var oDetail = {
        init:function(){
            this.reback();
            this.clickAgree();
            this.agreeClick();
            this.disagreeClick();
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        },
    //    点击对勾
        clickAgree:function(){
            var iconFlag = true;
            $('.txt3').on('click',function(){
                if(iconFlag){
                    $('.dgIcon').removeClass('icon-gou')
                    iconFlag=false;
                }else{
                    $('.dgIcon').addClass('icon-gou')
                    iconFlag=true;
                }
            })
        },
        agreeClick:function(){
            $('.agree').on('click',function(){
                $("#opacityDiv").css({'display':'block'});
                $(".askAlert").css({'display':'block'});
            })

            $(".yesBtn").on('click',function(){
                $("#opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
            //    向后台提交数据改状态
                window.location.href="sup_order.html"
            })

            $(".noBtn").on('click',function(){
                $("#opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
            })
        },
        disagreeClick:function(){
            $('.disagree').on('click',function(){
                $("#opacityDiv").css({'display':'block'});
                $(".askAlert1").css({'display':'block'});
            })

            $(".yesBtn").on('click',function(){
                $("#opacityDiv").css({'display':'none'});
                $(".askAlert1").css({'display':'none'});
                //    向后台提交数据改状态
                window.location.href="sup_order.html"
            })

            $(".noBtn").on('click',function(){
                $("#opacityDiv").css({'display':'none'});
                $(".askAlert1").css({'display':'none'});
            })
        }
    }

    oDetail.init();


})