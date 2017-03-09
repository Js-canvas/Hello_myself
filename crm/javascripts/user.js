/**
 * Created by mac on 2017/3/8.
 */
$(document).ready(function(){
    var oUser = {
        init:function(){
            this.clearClick();
        },
        clearClick:function(){
            $('.clear-btn').click(function(){
                $('input[type=checkbox]').removeAttr('checked');
            })
        }
    }
    oUser.init();
})
