/**
 * Created by mac on 2017/2/22.
 */
$(document).ready(function(){

    var bankList = {
        init:function(){
            var bankName = "";
            this.reBack();
            // this.getData();
            this.chooseBank();
        },
        reBack:function(){
            $(".reback").on("click",function(){
                //将选择的银行名称保存到本地

                window.localStorage.setItem("bank",bankName);
                window.history.go(-1);
            });
        },
        getData:function(){
            var str = ""
            $.ajax({
                type: "GET",
                url: "test.json",
                dataType: "json",
                success: function(data){
                    for(var i = 0 ; i < data.length ; i++){
                        str+=""
                        str+=""
                    }
                    $('.bank-list-ul').append(str);
                    this.chooseBank().bind(this);
                },
                error:function(err){
                    alert("网络异常")
                }
            });
        },
        chooseBank:function(){
            $('.bank-list-ul').delegate(".bank-list-label",'click',function(){
                var $inp = $('.bank-list-inp');
                for(var i = 0 ;i < $inp.length ;i++){
                    $inp.next().css({'color':'#999'});
                }
                $(this).siblings('i').css({'color':'#cd2f2f'})
                bankName = $(this).html();
            });
        }
    }
    bankList.init();
})