/**
 * Created by mac on 2017/3/8.
 */
$(document).ready(function(){
    var oOrderDetail = {
        init:function(){
            this.clearClick();
        },
        clearClick:function(){
            var inpVal = $('.table-input').val()
            var oldVal = $('.table-input').val()
            $('.table-input').dblclick(function(){
                $('.table-input').removeAttr('readonly');
                inpVal = $('.table-input').val();
            })
            $('.table-btn').click(function(){
                inpVal = $('.table-input').val();
                if(/^\d+(\.\d+)?$/.test(inpVal)){
                    $('.table-input').attr('readonly','');
                }else{
                    alert('请输入正确金额');
                    $('.table-input').val(oldVal)
                }
            })
        }
    }
    oOrderDetail.init();
})
