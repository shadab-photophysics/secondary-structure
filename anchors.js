// Handle reference links behavior
function reference(anchor) {
	console.log("Reference clicked.");
	var spanID = anchor.split("#")[1];
	var span = document.getElementById(spanID);
	blinkOn(span);
}

function blinkOn(span) {
    span.counter = 0;
    span.defColor=span.style.color;
    span.alertTimerId =setInterval("blinkOnce('"+span.id+"')", 100 );
}

function blinkOnce(spanID) {
    var span=document.getElementById(spanID)
    span.counter++;
    if(span.style.opacity == "1"){
        span.style.opacity = "0.5";}
     else{
        span.style.opacity = "1";
     }
    if(span.counter > 10){
        blinkOff(span);
    }   
}

function blinkOff(span) {
   clearInterval(span.alertTimerId);    
   span.style.opacity = "1";
}