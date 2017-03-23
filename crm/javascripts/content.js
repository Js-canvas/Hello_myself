/**
 * Created by mac on 2017/3/8.
 */
$(document).ready(function(){
    var oContent = {
        init:function(){
            this.banDeleteBtn();
            this.banEditBtn();
            this.paginatorClick();
        },
        banDeleteBtn:function(){
            var $tr=''
            $('#one').delegate('.delete','click',function(){
                $tr = $(this).parent('td').parent('tr')
            })
            $('#two').delegate('.delete','click',function(){
                $tr = $(this).parent('td').parent('tr')
            })
            $('#myModal').delegate('.btn-primary','click',function(){
                $tr.remove();
                $('#myModal').modal('hide');
            })
            $('#myModal').delegate('.btn-default','click',function(){
                $('#myModal').modal('hide');
            })
        },
        banEditBtn:function(){
            $('#one').delegate('.edit','click',function(){
                window.location.href='content-banner.html'
            })
            $('#two').delegate('.edit','click',function(){
                window.location.href='content-system.html'
            })
        },
        paginatorClick:function(){
            var options = {
                currentPage: 1,
                totalPages: 10,
                numberOfPages:5
            }
            $('#tab-one').bootstrapPaginator(options);
            $('#tab-two').bootstrapPaginator(options);
        }
    }
    oContent.init();
})
