$(function () {

    var $landingContent = $("#landing-content"),
        $actualContent  = $("#actual-content");
    
    $landingContent.on("click", function (){
    
        $(this).addClass("clicked");
        
    })
 });