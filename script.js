function goodFunction() {
    
    
    
    function bravo() {
        let goodFb = document.getElementById('feedb').innerHTML = "bravo";
        return goodFb;
    }
    function greenFont() {
        let greenFb = document.getElementById('feedb').style.color = "green";
        return greenFb;
    }

    function heartEyes() {
        let hEyes = document.getElementById('feedb').className = "bi bi-emoji-heart-eyes myemo";

        return hEyes;

    }
    
    bravo();
    greenFont();
   // heartEyes();
    
    
    
}

function badFunction() {
    let badFb = document.getElementById('feedb').innerHTML = "Nooooooo!";
    return badFb;

}
