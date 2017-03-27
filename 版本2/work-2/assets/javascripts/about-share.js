/**
 * Created by mac on 2017/2/21.
 */
$(document).ready(function(){

    var oShare = {
        init:function(){
            this.reback();
            FastClick.attach(document.body);
        },
        reback:function(){
            $('.reback').on("click",function(){
                window.history.go(-1);
            });
        }
    }
    oShare.init();
})