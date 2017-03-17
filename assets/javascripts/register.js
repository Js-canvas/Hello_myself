/**
 * Created by mac on 2017/2/16.
 */
$(document).ready(function(){

    var oRegister = {
        init:function(){
            FastClick.attach(document.body);
            this.reback();
            // this.getNum();
            // this.postData();
        },
        reback:function(){
            $('.reback').on("click",function(){
                window.history.go(-1);
            });
        },
        getNum:function(){
            var getNumFlag = true;
            $('.code-right').on("click",function(){
                var $userName = $('').val()
                if(getNumFlag){
                    if(/^0?(1)[0-9]{10}$/.test($userName)){
                        // $.ajax({
                        //     type: "GET",
                        //     data:{userName:$userName},
                        //     url: "test.json",
                        //     dataType: "json",
                        //     success: function(data){
                        //         code = data;
                        //     },
                        //     error:function(err){
                        //         alert("网络异常")
                        //     }
                        // });

                        var timer = setInterval(function(){
                            getNumFlag=false;
                            num = num - 1 ;
                            $getParNum.html(num+"s后再次获取");
                            if(num==0){
                                getNumFlag=true;
                                num=60;
                                $getParNum.html("获取验证码");
                                clearInterval(timer);
                                return
                            }
                        },1000)
                    }else{
                        alert("请输入正确手机号！");
                        return
                    }
                }
            })
        },
        postData:function(){
            $('.ok-btn').on("click",function(){
                var flag = false;
                $messageNum = $(".messageNum").val();
                $userName = $(".userName").val();

                if($userName==""||$newPw==""||$messageNum==""){
                    flag = false;
                    alert("请将信息填写完整！！");
                    return
                }

                if(/^0?(1)[0-9]{10}$/.test($userName)){
                    flag = true;
                }else{
                    flag = false;
                    alert("请输入正确手机号！");
                    return
                }

                if($messageNum==code){
                    flag=true;
                }else{
                    flag = false;
                    alert("验证码输入有误");
                    return
                }

                if(/^[0-9a-zA-Z_]{6,}$/.test($newPw)){
                    flag = true;
                }else{
                    flag = false;
                    alert("密码格式不正确！");
                    return
                }

                if(flag){
                    // $.ajax({
                    //     type: "GET",
                    //     data:{userName:$userName,password:$newPw},
                    //     url: "test.json",
                    //     dataType: "json",
                    //     success: function(data){
                    //         //判断是否更改成功
                    //         window.location.href = "login.html";
                    //     },
                    //     error:function(err){
                    //         alert("网络异常")
                    //     }
                    // });
                }else{
                    alert("信息填写不正确");
                }
            })
        }
    }
   oRegister.init();
})