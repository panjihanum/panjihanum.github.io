$(document).ready(function(){
    
    setTimeout(function(){ 
        jQuery('#loading_wrap').fadeOut("slow", function() {
            $('#loading_wrap').remove();
        });
    }, 2000);
     
});