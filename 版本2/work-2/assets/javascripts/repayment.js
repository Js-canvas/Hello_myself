/**
 * Created by mac on 2017/2/24.
 */
$(document).ready(function(){

    var oRepayment = {
        init:function(){
            FastClick.attach(document.body);
            this.reback();
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        }
    }

    oRepayment.init();


})