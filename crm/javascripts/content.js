/**
 * Created by mac on 2017/3/8.
 */
$(document).ready(function(){
    var oContent = {
        init:function(){
            this.banDeleteBtn();
            this.banEditBtn()
        },
        banDeleteBtn:function(){
            var $tr=''
            $('#one').delegate('.delete','click',function(){
                    $('#myModal').modal('show');
                    console.log($(this).parent('td').parent('tr'))
                    $tr = $(this).parent('td').parent('tr')
            })
            $('#myModal').delegate('.yes-btn','click',function(){
                $tr.remove()
                $('#myModal').modal('hide');
            })
            $('#myModal').delegate('.no-btn','click',function(){
                $('#myModal').modal('hide');
            })
        },
        banEditBtn:function(){
            $('#one').delegate('.edit','click',function(){
                window.location.href='content-banner.html'
            })
        }
    }
    oContent.init();
})
