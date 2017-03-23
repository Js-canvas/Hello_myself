/**
 * Created by mac on 2017/3/8.
 */
$(document).ready(function(){
    var oFeedback = {
        init:function(){
            this.paginatorClick();
        },
        paginatorClick:function(){
            var options = {
                currentPage: 1,
                totalPages: 10,
                numberOfPages:5
            }
            $('#tab-one').bootstrapPaginator(options);
        }
    }
    oFeedback.init();
})
