let isActive = false;
function startCountdown(){

    if(isActive === "stopped"){location.reload(); return;}
    if(isActive === false){
    isActive = true;
    let h = document.getElementById("inpHours").value;
    let m = document.getElementById("inpMinutes").value;
    let s = document.getElementById("inpSeconds").value;
    let userInp = document.getElementById("inpMessage").value;

    let counterSeconds = parseFloat(((h * 60) * 60)) + parseInt((m * 60)) + parseInt(s);
    counter = counterSeconds * 1000;

    let timer = setInterval(function(){
    if(counter === 0){
        document.getElementById("nedTelling").innerHTML = "<h3>" + userInp + "</h3>";
        isActive = "stopped";
        return;
    } else if(counter >= 0){
        document.getElementById("nedTelling").innerHTML = "<h3>" + (counter / 1000) + " sekunder gjenstående" + "</h3>";
        counter -= 1000;
    }}, 1000);
}}
