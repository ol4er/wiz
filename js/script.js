



//function epic_quotes()
//{
//quotes=new Array();
//quotes[0]='The wide screen reminds me of a roll of toilet paper. <br> Yasujiro Ozu';
//quotes[1]='A film should be more like music than like fiction. <br> Stanley Kubrick';
//    var result=Math.floor(Math.random()*quotes.length);
//    document.getElementById("quotes").innerHTML=quotes[result];
//}

    var a = document.getElementById("crickets");
    a.onclick = function() {
    var audio = new Audio('cricket.ogg');
    audio.play();
    return false;
    }

    
    //
  
var date = new Date();
var day = date.getDay();
if (day == 3) {
document.getElementById("wiazrd").innerHTML = "Wiazrds";
}
else {
    document.getElementById("wiazrd").innerHTML = "Wizards";
}
