/**
 * Created by mac on 2017/3/8.
 */
$(document).ready(function(){
    var oOrder = {
        init:function(){
            this.clearClick();
        },
        clearClick:function(){
            $('.clear-btn').click(function(){
                $('input[type=checkbox]').removeAttr('checked');
            })
        }
    }
    oOrder.init();
})
