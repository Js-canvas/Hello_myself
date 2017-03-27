/**
 * Created by mac on 2017/2/24.
 */
$(document).ready(function(){
    var oDetail = {
        init:function(){
            FastClick.attach(document.body);
            this.reback();
            this.alertClick();
            this.yesClickSup();
            this.noClickSup();
            this.noClickPur();
            this.iconClick();
            // this.postClick();//提交还款证明
            // this.cashClick();//提款
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        },
        //    点击对勾
        iconClick:function(){
            var iconFlag = true;
            $('.detail-book').on('click',function(){
                if(iconFlag){
                    $('.detail-gou').removeClass('icon-gou')
                    iconFlag=false;
                }else{
                    $('.detail-gou').addClass('icon-gou')
                    iconFlag=true;
                }
            })
        },
        alertClick:function(){
            $('.icon').on('click',function(){
                $(".opacityDiv").css({'display':'block'});
                $(".askAlert").css({'display':'block'});
            })

            $(".yesBtn").on('click',function(){
                $(".opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
            })
        },
        yesClickSup:function(){
            $('.yes-btn-sup').on('click',function(){
                $(".opacityDiv").css({'display':'block'});
                $(".yes-alert").css({'display':'block'});

                $(".yesBtn").on('click',function(){
                    $(".opacityDiv").css({'display':'none'});
                    $(".yes-alert").css({'display':'none'});
                    //    向后台提交数据改状态
                    window.location.href="sup_order.html"
                })

                $(".noBtn").on('click',function(){
                    $(".opacityDiv").css({'display':'none'});
                    $(".yes-alert").css({'display':'none'});
                })
            })
        },
        noClickSup:function(){
            $('.no-btn-sup').on('click',function(){
                $(".opacityDiv").css({'display':'block'});
                $(".no-alert").css({'display':'block'});

                $(".yesBtn").on('click',function(){
                    $(".opacityDiv").css({'display':'none'});
                    $(".no-alert").css({'display':'none'});
                    //    向后台提交数据改状态
                    window.location.href="sup_order.html"
                })

                $(".noBtn").on('click',function(){
                    $(".opacityDiv").css({'display':'none'});
                    $(".no-alert").css({'display':'none'});
                })
            })
        },
        noClickPur:function(){
            $('.no-btn-pur').on('click',function(){
                $(".opacityDiv").css({'display':'block'});
                $(".no-alert").css({'display':'block'});

                $(".yesBtn").on('click',function(){
                    $(".opacityDiv").css({'display':'none'});
                    $(".no-alert").css({'display':'none'});
                    //    向后台提交数据改状态
                    window.location.href="pur_order.html"
                })

                $(".noBtn").on('click',function(){
                    $(".opacityDiv").css({'display':'none'});
                    $(".no-alert").css({'display':'none'});
                })
            })
        }
        // ,
        // postClick:function(){
        //     $('.post-btn').on('click',function(){
        //         window.location.href="repayment.html"
        //     })
        // },
        // cashClick:function(){
        //     $('.cash-btn').on('click',function(){
        //         window.location.href="cashOrder.html"
        //     })
        // }
    }

    oDetail.init();


})