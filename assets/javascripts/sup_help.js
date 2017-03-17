/**
 * Created by mac on 2017/2/22.
 */
$(document).ready(function(){

    var oHelp = {
        init:function(){
            FastClick.attach(document.body);
            this.reback();
        },
        reback:function(){
            $('.reback').on("click",function(){
                window.history.go(-1);
            });
        }
    }
    oHelp.init();
})