/**
 * Created by mac on 2017/2/24.
 */
$(document).ready(function(){

    var oDetail = {
        init:function(){
            this.reback();
            this.alertClick();
            this.iconFlag = true;
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        },
        alertClick:function(){
            $('#no-btn').on('click',function(){
                $(".opacityDiv").css({'display':'block'});
                $(".askAlert").css({'display':'block'});
            })
            //取消返回订单详情页
            $(".noBtn").on('click',function(){
                $(".opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
            })
            //确定关闭订单
            $(".yesBtn").on('click',function(){
                $(".opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
            //    向后台改变订单状态 跳转页面
                window.location.href="pur_order.html"
            })
        }
    }

    oDetail.init();


})