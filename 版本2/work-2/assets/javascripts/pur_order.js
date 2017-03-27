/**
 * Created by mac on 2017/2/21.
 */
$(document).ready(function(){
    var oPurOrder = {
        init:function(){
            FastClick.attach(document.body);
            // this.getState();
            this.clickHref();
            this.disagreeClick();
        },
        getState:function(){
            $.ajax({
                type: "GET",
                url: "test.json",
                dataType: "json",
                data:{
                    'user':"aaa"
                },
                success: function(data){
                    for(var i = 0 ; i < data.length ; i++){
                        //根据状态分配父容器动态生成子元素，并将订单id和状态码以attr形式绑定在元素标签内
                        switch (data[i].state){
                            case 1 :
                                break;
                            case 2 :
                                break;
                            case 3 :
                                break;
                            case 4 :
                                break;
                            case 5 :
                                break;
                            default:
                                break;

                        }
                    }
                },
                error:function(err){
                    alert("网络异常")
                }
            });
        },
        clickHref:function(){
            $('.order-detail').on('click',function(e){
                var e = e||window.event;
                switch ($('#my-order-tab li').filter('.active').index()){
                    //判断状态 0 进行中 1 已完成 2 已关闭
                    case 0:
                        switch($('#my-order-sec-tab li').filter('.active').index()){
                            // 0 待确认 1 待还款 2 已逾期
                            case 0:
                                switch(e.target.className){
                                    case "dis-order-btn":
                                        this.disagreeClick()
                                        break;
                                    default:
                                        window.location.href="pur_detail.html"
                                        break;
                                }
                                break;
                            case 1:
                                switch(e.target.className){
                                    case "sub-btn":
                                        window.location.href="repayment.html"
                                        break;
                                    default:
                                        if($(this).attr('state')==1){
                                            //区分是否提交还款证明 1 提交 0 未提交
                                            window.location.href="pur_detail4_hasProve.html"
                                        }else{
                                            window.location.href="pur_detail4_noProve.html"
                                        }
                                        break;
                                }
                                break;
                            case 2:
                                switch(e.target.className){
                                    case "sub-btn":
                                        window.location.href="repayment.html"
                                        break;
                                    default:
                                        if($(this).attr('state')==1){
                                            //区分是否提交还款证明 1 提交 0 未提交
                                            window.location.href="pur_detail5_hasOver.html"
                                        }else{
                                            window.location.href="pur_detail5_noOver.html"
                                        }
                                        break;
                                }
                                break;
                            default:
                                break;
                        }
                        break;
                    case 1:
                        window.location.href="pur_detail_done.html";
                        break;
                    case 2:
                        window.location.href="pur_detail_close.html";
                        break;
                    default:
                        break;
                }

            }.bind(this))
        },
        disagreeClick:function(){
            $('.dis-order-btn').on('click',function(){
                $(".opacityDiv").css({'display':'block'});
                $(".askAlert").css({'display':'block'});
            })

            $(".yesBtn").on('click',function(){
                $(".opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
                //    向后台提交数据改状态
                window.location.href="pur_order.html"
            })

            $(".noBtn").on('click',function(){
                $(".opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
            })
        }
    };
    oPurOrder.init();
})