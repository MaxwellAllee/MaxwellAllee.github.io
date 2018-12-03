$(document).ready(function () {

    // Open in new window
        
    // Or use this to Open link in same window (similar to target=_blank)
    $("#clickable").click(function(){
        window.location = "/";
        return false;
    });

});