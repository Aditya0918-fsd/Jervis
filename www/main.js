$(document).ready(function () {
    
    $('.text').textillate({
        loop: true,
        sync: true,
        in: {
            effect: 'bounceIn',
        },
        out: {
            effect: 'bounceOut',
        },
        
    }); 

    //Siri configeration
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",
        amplitude: "1",
        speed: "0.30",
        autostart: true,
    });

    //Siri massage animation
    $('.siri-massage').textillate({
        loop: true,
        sync: true,
        in: {
            effect: 'fadeInUp',
            sync: true,
        },
        out: {
            effect: 'fadeOutDown',
            sync: true,
        },
        
    }); 

    // Mic button click event

    $("#MicBtn").click(function () { 

        eel.playAssistantSound()
        $("#Oval").attr("hidden", true);        
        $("#SiriWave").attr("hidden", false);    
        eel.allCommands()()    
    });

    
    function doc_keyUp(e) {
        // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time

        if (e.key === 'j' && e.metaKey) {
            eel.playAssistantSound()
            $("#Oval").attr("hidden", true);
            $("#SiriWave").attr("hidden", false);
            eel.allCommands()()
        }
    }
    document.addEventListener('keyup', doc_keyUp, false);

    function playAssistant(massage) {

        if (massage != "") {

            $("#Oval").attr("hidden", true);
            $("#SiriWave").attr("hidden", false);
            eel.allCommands(massage)
            $("#chatbox").val("");
            $("#MicBtn").attr("hidden", false);
            $("#sendBtn").attr("hidden", true); 
        }
    }

    function showHideButton(massage) {

        if (massage.length == 0) {
            $("#MicBtn").attr("hidden", false);
            $("#sendBtn").attr("hidden", true);

        } else {

            $("#MicBtn").attr("hidden", true);
            $("#sendBtn").attr("hidden", false);
        }
    }

    $("#chatbox").keyup(function () {

        let massage = $("#chatbox").val();
        showHideButton(massage);
    });

    $("#sendBtn").click(function () {

        let massage = $("#chatbox").val();
        playAssistant(massage);
    });


    $("#chatbox").keypress(function (e) {
        key = e.which;
        if (key == 13) {
            let massage = $("#chatbox").val();
            playAssistant(massage);
        }

    });

}); 