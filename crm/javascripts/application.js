/**
 * Created by mac on 2017/3/8.
 */
$(document).ready(function(){
    var oApplication = {
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
            $('#tab-two').bootstrapPaginator(options);
        }
    }
    oApplication.init();
})
