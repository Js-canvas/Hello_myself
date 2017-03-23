/**
 * Created by mac on 2017/3/8.
 */
$(document).ready(function(){
    var oUser = {
        init:function(){
            this.clearClick();
            this.paginatorClick();
        },
        clearClick:function(){
            $('.clear-btn').click(function(){
                $('input[type=checkbox]').removeAttr('checked');
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
            $('#tab-thr').bootstrapPaginator(options);
        }
    }
    oUser.init();
})
