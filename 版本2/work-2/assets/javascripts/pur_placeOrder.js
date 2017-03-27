/**
 * Created by mac on 2017/2/28.
 */
$(document).ready(function(){
    var purOrder = {
        init:function(){
            FastClick.attach(document.body);
            this.reback()
            this.clickAgree();
            this.addPro();
            this.delete();
        },
        reback:function(){
            $('.reback').on("click",function(){
                window.history.go(-1);
            });
        },
        //    点击对勾
        clickAgree:function(){
            var iconFlag = true;
            $('.place-order-book').on('click',function(){
                if(iconFlag){
                    $('.gou-Icon').removeClass('icon-gou');
                    iconFlag=false;
                }else{
                    $('.gou-Icon').addClass('icon-gou');
                    iconFlag=true;
                }
            })
        },
    //    点击添加商品
        addPro:function(){
            $('.add-btn').on('click',function(){
                $('.place-order-list input').addClass('clone-inp');
                $('.delete-box').css({'display':'block'});
                $('.borLine1').css({'display':'block'});
                var newList = $('.place-order-list').first().clone();
                newList.find('input').val("")
                $('.place-order-wrap').append(newList);
                $('.place-order-list').eq(0).find('.borLine1').css({'display':'none'});
            })
        },
    //    删除按钮
        delete:function(){
            $('.place-order-wrap').delegate('.delete-box','click',function(e){
                var oLength = $('.place-order-list').length;
                if(oLength==2){
                    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
                    $('.place-order-list input').removeClass('clone-inp');
                    $('.delete-box').css({'display':'none'})
                    $('.place-order-list').eq(0).find('.borLine1').css({'display':'none'});
                }else{
                    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
                    $('.place-order-list').eq(0).find('.borLine1').css({'display':'none'});
                }
            })
        }
    }
    purOrder.init();
})