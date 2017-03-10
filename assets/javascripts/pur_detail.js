/**
 * Created by mac on 2017/2/24.
 */
$(document).ready(function(){

    var oDetail = {
        init:function(){
            this.reback();
            this.clickAgree();
            this.iconClick();
            this.iconFlag = true;
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        },
    //    点击对勾
        clickAgree:function(){

            $('.txt3').on('click',function(){
                if(this.iconFlag){
                    $('.dgIcon img').css({'display':'inline-block'})
                    this.iconFlag=false;
                }else{
                    $('.dgIcon img').css({'display':'none'})
                    this.iconFlag=true;
                }
            })
        },
        iconClick:function(){
            $('.agree').on('click',function(){
                $("#opacityDiv").css({'display':'block'});
                $(".askAlert").css({'display':'block'});
            })
            //取消返回订单详情页
            $(".noBtn").on('click',function(){
                $("#opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
            })
            //确定关闭订单
            $(".yesBtn").on('click',function(){
                $("#opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
            //    向后台改变订单状态 跳转页面
                window.location.href="pur_order.html"
            })
        }
    }

    oDetail.init();


})