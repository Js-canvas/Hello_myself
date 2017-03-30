/**
 * Created by mac on 2017/3/8.
 */
$(document).ready(function(){
    var oContentBanner = {
        init:function(){
	        	$('#edit').editable({
	          	inlineMode: false, 
	          	language: "zh_cn",
          		alwaysBlank: true
          	})
        }
    }
    oContentBanner.init();
})
