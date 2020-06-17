window.onload=loaddata;

function loaddata() {
	var toDay = new Date();	
    var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    
    var toDay = toDay.toLocaleDateString("en-US", options);
    
    document.getElementById("dtfield").innerHTML = toDay;
   
}