var copyrightText = "Cliff Olaw © 2021"

window.onload = function() {
    var x = document.getElementsByClassName("copyrights");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML=copyrightText;
    }
} 
