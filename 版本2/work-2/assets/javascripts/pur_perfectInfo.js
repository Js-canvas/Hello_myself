/**
 * Created by mac on 2017/2/16.
 */
$(document).ready(function(){

    var oDetailInfo = {
        init:function(){
            FastClick.attach(document.body);
            new PCAS("province","city","area");
            this.reback();
            this.postClick();
        },
        reback:function(){
            $('.reback').on("click",function(){
                window.history.go(-1);
            });
        },
        postClick:function(){
            var flag = true;
            $('.ok-btn').on("click",function(){
                var $userName = $("#phoneNum").val();
                var $password = $("#password").val();
                var $companyName = $("#companyName").val();
                var $name = $("#name").val();
                var $province = $("#province").val();
                var $city = $("#city").val();
                var $area = $("#area").val();

                if($password==""||$companyName==""||$name==""||$province==""||$city==""||$area==""){
                    flag = false;
                    alert("请将信息填写完整在提交");
                    return
                }

                if(/^[0-9a-zA-Z_]{6,}$/.test($password)){
                    flag = true;
                }else{
                    flag = false;
                    alert("请填写不少于6位的数字，字母或下划线");
                    return
                }

                if(/^[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*}$/.test($name)){
                    flag = true;
                }else{
                    flag = false;
                    alert("请填写正确格式");
                    return
                }

                if(flag){
                    var userData = {
                        userName:$userName,
                        password:$password,
                        companyName:$companyName,
                        name:$name,
                        province:$province,
                        city:$city
                    }
                    // $.ajax({
                    //     type: "POST",
                    //     url: "test.json",
                    //     data:userData,
                    //     dataType: "json",
                    //     success: function(data){
                    //         //判断是否存入数据库
                    //     },
                    //     error:function(err){
                    //         alert("网络异常")
                    //     }
                    // });
                }
            })
        }
    }

    oDetailInfo.init();
})