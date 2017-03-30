/**
 * Created by mac on 2017/3/8.
 */
$(document).ready(function(){
    var oContentSystem = {
        init:function(){
	        	$('#edit').editable({
	          	inlineMode: false, 
	          	language: "zh_cn",
          		alwaysBlank: true
          	})
        }
    }
    oContentSystem.init();
})
