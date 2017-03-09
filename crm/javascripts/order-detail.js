/**
 * Created by mac on 2017/3/8.
 */
$(document).ready(function(){
    var oOrderDetail = {
        init:function(){
            this.clearClick();
        },
        clearClick:function(){
            $('.table-input').dblclick(function(){
                $('.table-btn').css({'display':"inline-block"});
                $('.table-input').removeAttr('readonly');
            })
            $('.table-btn').click(function(){
                $('.table-input').attr('readonly','');
                $('.table-btn').css({'display':"none"});
            })
        }
    }
    oOrderDetail.init();
})
