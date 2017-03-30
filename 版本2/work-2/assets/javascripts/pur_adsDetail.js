/**
 * Created by mac on 2017/2/22.
 */
$(document).ready(function(){

    var oAdsDetail = {
        init:function(){
            new PCAS("province","city","");
            this.reback();
            this.iconClick();
            this.postClick();
        },
        reback:function(){
            $('.reback').on("click",function(){
                window.history.go(-1);
            });
        },
        iconClick:function(){
            var flag = true
            $('.ads-detail-book').on('click',function(){
                if(flag){
                    $('.ads-detail-gou').addClass('icon-gou');
                    flag = false;
                }else{
                    $('.ads-detail-gou').removeClass('icon-gou');
                    flag = true;
                }
            })
        },
        postClick:function(){
            var oFlag = false
            $('.ads-detail-post-btn').on('click',function(){
                $('.ads-detail-val').each(function(i){
                    return function(info){
                        if(info.val()==""){
                            alert('请将信息填写完整在提交')
                            return false
                        }else if(i==$('.ads-detail-val').length-1){
                            oFlag=true;
                        }
                    }($(this))
                })
                if(oFlag){
                    //ajax 获取数据
                    // $.ajax({
                    //     type: "GET",
                    //     url: "test.json",
                    //     dataType: "json",
                    //     success: function(data){
                    //
                    //     },
                    //     error:function(err){
                    //         alert("网络异常")
                    //     }
                    // });
                }
            })
        }
    }
    oAdsDetail.init();
})

