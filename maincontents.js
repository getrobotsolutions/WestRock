conf_count = 0;
        
        var speak = new Array( );
        speak[0] = "see how fast you can match the pictures";
        speak[1] = "Take a picture with me.";
        speak[2] = "Pick a song and let's boogie.";
        speak[3] = "Become a robot.";
        speak[4] = "";
        speak[5] = "";

//window.external.ChangeLanguage("en-us");
function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);
    
    switch (strContentsName)
    {
        case "Welcome":
            PlaySpeech("Hi, I’m Tracey, welcome to the Novartis booth. Please click around on my screen and then speak to my smart human friends in the booth.");
            break;
        case "Home":
            //writeCookie("NavigationState", true, 30);
           location.href = "../../maincontents.htm";
           break;

        case "MatchGame":
            location.href = "Contents/MatchGame/index.html";
            PlaySpeech(speak[0]);
            break;

        case "Selfie":
            location.href = "Contents/Selfie/index.html";
            PlaySpeech(speak[1]);
            break;

        case "Dance":
            location.href = "Contents/Dance/index.html";
            PlaySpeech(speak[2]);
            break;

        case "Avatar":
            location.href = "Contents/RobotAvatar/index.htm";
            PlaySpeech(speak[3]);
            break;
        
        
            
        case "Config":
            if(conf_count === 3)
            {
                conf_count = 0;
                location.href = "Config/Config.htm";
            }
            else
            {
                conf_count++;
                console.log(conf_count);
            }

            break;
        default:
            break;
    } // end switch(strContentsName)
} // end FC_ContentsCall



function OnUserApproached()
{
    //PlaySpeech("Hello, welcome to the BWl Airport. Please press a button on my screen to begin.");
}


function ShowPopup(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}
function ShowPopupForm(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').style.display = "block";
    //document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}



$(document).ready(function(){
    $('a.close').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });

});

function OnJoystickControlled(strPara){
    var btn_info = strPara.split(',')[4];


    if(btn_info[0] == '1'){
           PlaySpeech("I'm thirsty, can you buy me a drink?  Ha, ha, just kidding.");
    }

    if(btn_info[1] == '1'){
        PlaySpeech("I like you, can I take your picture?");
        
    }
    if(btn_info[2] == '1'){
        PlaySpeech("I want to be on Dancing with the Stars, will you dance with me?");
    }
    if(btn_info[3] == '1'){
        PlaySpeech("Wanna be a robot?");
    }
}

