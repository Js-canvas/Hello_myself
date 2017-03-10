/**
 * Created by mac on 2017/2/21.
 */
$(document).ready(function(){
    var oSupOrder = {
        init:function(){
            // this.getState();
            this.clickHref();
            this.agreeClick();
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
            $('.orderDetail').on('click',function(e){
                var e = e||window.event;
                switch ($('#myTab li').filter('.active').index()){
                    //判断状态 0 进行中 1 已完成 2 已关闭
                    case 0:
                        switch($('#mySecTab li').filter('.active').index()){
                            case 0:
                                console.log('状态1');
                                switch(e.target.className){
                                    case "agree":
                                        console.log("弹出alert");
                                        break;
                                    case "disagree":
                                        console.log("不同意");
                                        break;
                                    default:
                                        console.log("跳转到详情");
                                        window.location.href="sup_detail.html"
                                        break;
                                }
                                break;
                            case 1:
                                console.log('状态2');
                                switch(e.target.className){
                                    case "getMoney":
                                        console.log("提款页面");
                                        window.location.href="sup_cashOrder.html"
                                        break;
                                    default:
                                        console.log("跳转到详情");
                                        window.location.href="sup_detail2.html"
                                        break;
                                }
                                break;
                            case 2:
                                console.log('状态3');
                                console.log("跳转到详情");
                                window.location.href="sup_detail3.html"
                                break;
                            case 3:
                                console.log('状态4');
                                switch(e.target.className){
                                    case "subBtn":
                                        console.log("提交还款证明");
                                        window.location.href="sup_repayment.html"
                                        break;
                                    default:
                                        console.log("跳转到详情");
                                        if($(this).attr('state')==1){
                                            //区分是否提交还款证明 1 提交 0 未提交
                                            window.location.href="sup_detail4_hasProve.html"
                                        }else{
                                            window.location.href="sup_detail4_noProve.html"
                                        }
                                        break;
                                }
                                break;
                            case 4:
                                console.log('状态5');
                                console.log("跳转到详情");
                                if($(this).attr('state')==1){
                                    //区分是否提交还款证明 1 提交 0 未提交
                                    window.location.href="sup_detail5_hasOver.html"
                                }else{
                                    window.location.href="sup_detail5_noOver.html"
                                }
                            default:
                                break;
                        }
                        break;
                    case 1:
                        window.location.href="sup_detail_done.html";
                        break;
                    case 2:
                        window.location.href="sup_detail_close.html";
                        break;
                    default:
                        break;
                }

            })
        },
        agreeClick:function(){
            $('.agree').on('click',function(){
                $("#opacityDiv").css({'display':'block'});
                $(".askAlert").css({'display':'block'});
            })

            $(".yesBtn").on('click',function(){
                $("#opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
                //    向后台提交数据改状态
                window.location.href="sup_order.html"
            })

            $(".noBtn").on('click',function(){
                $("#opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
            })
        },
        disagreeClick:function(){
            $('.disagree').on('click',function(){
                $("#opacityDiv").css({'display':'block'});
                $(".askAlert1").css({'display':'block'});
            })

            $(".yesBtn").on('click',function(){
                $("#opacityDiv").css({'display':'none'});
                $(".askAlert1").css({'display':'none'});
                //    向后台提交数据改状态
                window.location.href="sup_order.html"
            })

            $(".noBtn").on('click',function(){
                $("#opacityDiv").css({'display':'none'});
                $(".askAlert1").css({'display':'none'});
            })
        }
    }
    oSupOrder.init();
})
