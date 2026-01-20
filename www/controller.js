$(document).ready(function () {
    
    // Display Speak Massage
    eel.expose(DisplayMessage)
    function DisplayMessage(message) {

        $(".siri-massage li:first").text(message);
        $('.siri-massage').textillate('start');
    } 

    // Display hood
    eel.expose(showHood)
    function showHood() {
        $("#Oval").attr("hidden", false);        
        $("#Siriwave").attr("hidden", true);    
    }

});