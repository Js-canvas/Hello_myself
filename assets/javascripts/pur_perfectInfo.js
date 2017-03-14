/**
 * Created by mac on 2017/2/16.
 */
$(document).ready(function(){

    var $reback = $(".reback");
    var $okBtn = $(".okBtn");
    var flag =true;
    var oProfession = $("#profession");
    var oProvince = $("#province");
    var oCity = $("#city");

    $reback.on("click",function(){
        window.history.go(-1);
    });


    $okBtn.on("click",function(){

        var $userName = $("#phoneNum")[0].value;
        var $password = $("#password")[0].value;
        var $companyName = $("#companyName")[0].value;
        var $name = $("#name")[0].value;
        var $money = $("#money")[0].value;
        var $profession = $("#profession")[0].value;
        var $province = $("#province")[0].value;
        var $city = $("#city")[0].value;

        if($password==""||$companyName==""||$name==""||$money==""||$profession==""||$province==""||$city==""){
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
                money:$money,
                profession:$profession,
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

})