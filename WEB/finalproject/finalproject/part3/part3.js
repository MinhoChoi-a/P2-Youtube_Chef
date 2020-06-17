var xhr = new XMLHttpRequest();
var r;
const NAV_SIZE = "700px";

window.onload=loaddata;
var array=[];
var answerList;
var order = {
	"name": "",
	"type": "",
	"option": array,
	"period": 0,
	"totalPrice": 0.0
};

function loaddata() {
	document.body.style.backgroundPosition = "0px -1000px";
	document.getElementById("main").style.left = "22%";
	searchLastName();
	xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
		r = JSON.parse(xhr.responseText);
	}
  };
  xhr.open("GET", "rentalclients.json", true);
  xhr.send();
}

function searchLastName() {
	document.getElementById("guide").innerHTML = 
	`<table><tr>INPUT</tr><br>
	<tr>YOUR</tr><br>
	<tr>LAST</tr><br>
	<tr>NAME</tr></table>`;
		
	document.getElementById("mySidenav1").style.width = NAV_SIZE;
	document.getElementById("inputname").innerHTML
	= `<table id="name"><tr><td>LAST NAME</td><td><input type="text" size="30" id="lastname" onkeyup="showInfo(this.value)"></td></tr></table>`
}

function showInfo(lastname) {
	document.getElementById("inputresult").innerHTML="";
	document.getElementById("guide").innerHTML = 
	`<table><tr>FIND</tr><br>
	<tr>YOUR NAME</tr><br>
	<tr>AND</tr><br>
	<tr>CLICK</tr><br>
	</table>`;
	
	var output;

	if(lastname != "")
	{
	output=`<table id="resultname">`;
	var searchname;
	for(var i=0; i<r.length; i++)
	{
		var obj=r[i];
		searchname=obj.last_name.toUpperCase();
		if(searchname.startsWith(lastname.toUpperCase()))
		{	
					output+=`<tr class="line" id="${i}" onclick="showForm(this.id)"><td>`;
					output+=obj.first_name+" "+obj.last_name;
					output+="</td></tr>";
		}
	}
	output+="</table>";
	}

	else{
		output="Input your last name";
	}

	
	document.getElementById("inputresult").innerHTML+=output;
}

function closeNav1() {
	document.getElementById("mySidenav1").style.width = "0";
  }

function showForm(i) {

	closeNav1();
	
	document.getElementById("guide").innerHTML = 
	`<table><tr>CHECK</tr><br>
	<tr>INFORMATION</tr><br>
	<tr>AND</tr><br>
	<tr>CLICK NEXT</tr><br>
	</table>`;
	
	document.getElementById("mySidenav2").style.width = NAV_SIZE;

	var obj = r[i];
	
	var output = "" ;
	output+="LAST NAME: "+obj.last_name+"<br>";
	output+="FIRST NAME: "+obj.first_name+"<br>";
	output+="ADDRESS: "+obj.address+"<br>";
	output+="PROVINCE: "+obj.state_prov+"<br>";
	output+="E-MAIL: "+obj.email+"<br>";
	output+="PHONE: "+obj.phone+"<br>";
	
	document.getElementById("searchvalue").innerHTML=output;

	order.name= obj.last_name+" "+obj.first_name;

	document.getElementById("searchvalue").innerHTML
	+= `<input type="button" onclick=selectCar() value=next>`;
}

function closeNav2() {
	document.getElementById("mySidenav2").style.width = "0";
  }

function selectCar() {
	
	closeNav2();

	document.getElementById("guide").innerHTML 
	=`<table><tr>SELECT</tr><br>
	<tr>THE</tr><br>
	<tr>VEHICLE</tr><br>
	<tr>TYPE</tr><br>
	</table>`;
	
	document.getElementById("mySidenav3").style.width = NAV_SIZE;
	
	document.getElementById("carList").innerHTML
	=` <table><tr id="image">
		<td><img src="photos/s1.jpg" alt="s1"></td>
		<td><img src="photos/s2.jpg" alt="s2"></td>
	</tr>
	<tr id="title">
		<td>Compact $15/day</td>
		<td>Mid-size $20/day</td>
	</tr>
	<tr id="selectButton">
		<td><input type="button" name="car" id="Compact" value="Select" onclick="selectOption(this.id)"></td>
		<td><input type="button" name="car" id="Mid-size" value="Select" onclick="selectOption(this.id)"></td>
	</tr>
	<tr id="image">
	<td><img src="photos/s3.jpg" alt="s3"></td>
	<td><img src="photos/s4.jpg" alt="s4"></td>
	</tr>
	<tr id="title">
		<td>Luxury $35/day</td>
		<td>Van/Truck $40/day</td>
	</tr>
	<tr id="selectButton">
		<td><input type="button" name="car" id="Luxury" value="Select" onclick="selectOption(this.id)"></td>
		<td><input type="button" name="car" id="Van/Truck" value="Select" onclick="selectOption(this.id)"></td>
	</tr></table>`;
}

function closeNav3() {
	document.getElementById("mySidenav3").style.width = "0";
  }

function selectOption(i) {

	order.type = i;

	closeNav3();

	document.getElementById("guide").innerHTML 
	=`<table><tr>CHOSE</tr><br>
	<tr>OPTIONS</tr><br>
	<tr>AND</tr><br>
	<tr>PERIOD</tr><br>
	</table>`;
	
	document.getElementById("mySidenav4").style.width = NAV_SIZE;

	document.getElementById("optionList").innerHTML
	=`<table><tr><input type="checkbox" id="option" value="Roof Rack or Bicycle Rack">Roof Rack or Bicycle Rack $5/day</tr><br>
	<tr><input type="checkbox" id="option" value="GPS extra">GPS extra $10/day</tr><br>
	<tr><input type="checkbox" id="option" value="Child Seat">Child Seat free</tr><br></table>
	Period<input id="period" type="number" min="1" max="30" required><br>`;
}

function closeNav4() {
	document.getElementById("mySidenav4").style.width = "0";
  }

function checkOrder() {
	var optionData = document.querySelectorAll('input[id="option"]:checked');
	
	for(var i =0; i < optionData.length; i++)	{
		array.push(optionData[i].value); }
	
	order.period = document.querySelector('input[id="period"]').value;

	closeNav4();

	document.getElementById("guide").innerHTML 
	=`<table><tr>CHECK</tr><br>
	<tr>YOUR</tr><br>
	<tr>ORDER</tr><br>
	</table>`;
	
	document.getElementById("mySidenav5").style.width = NAV_SIZE;

	var carPrice = 0;

	if(order.type == "Compact") {
		carPrice = 15;
	}

	else if(order.type == "Mid-size") {
		carPrice = 20;
	}
	
	else if(order.type == "Luxury") {
		carPrice = 35;
	}
	
	else {
		carPrice = 40;
	}
	
	var optionPrice = 0;
	var optionString = "";

	for(var i=0; i < order.option.length; i++)	{
		
		if(order.option[i] == "Roof Rack or Bicycle Rack")
		{
			optionPrice += 5*order.period;
			optionString += "<td>Roof Rack or BicycleRack</td></tr><tr>";
		}

		else if(order.option[i] == "GPS extra")
		{
			optionPrice += 10;
			optionString += "<td>GPS extra</td></tr><tr>";
		}

		else if(order.option[i] == "Child Seat")
		{
			optionString += "<td>Child Seat</td></tr><tr>";
		}

		else
		{
			optionString = "Nothingc";
		}

}
	order.totalPrice = carPrice*order.period + optionPrice;

	var orderString
	= `<table id="final"><tr><td>Customer Name</td><td>${order.name}</td></tr><br>
	<tr><td>Vehicle Type</td><td>${order.type}</td></tr><br>
	<tr><td rowspan=${order.option.length}>Options${optionString}</tr><br>
	<tr><td>Rental Period</td><td>${order.period}</td></tr><br>
	<tr><td>Rental Price</td><td>$ ${order.totalPrice}</td></tr>`;

	document.getElementById("check").innerHTML = orderString;

	document.getElementById("check").innerHTML += 
	`<td><input type="button" id="submit" value="Submit Order" onclick="finish()"></td>`;
}

function closeNav5() {
	document.getElementById("mySidenav5").style.width = "0";
  }


function finish(){

	closeNav5();

	document.body.style.backgroundPosition = "0px -500px";
	document.getElementById("main").style.left = "50%";

	document.getElementById("guide").innerHTML = "Thanks for Chosing Our Company";
	document.getElementById("guide").style.top = "50%";
	document.getElementById("guide").style.left = "50%";
	document.getElementById("guide").style.fontSize = "100px";
	document.getElementById("guide").style.position = "fixed";
	document.getElementById("guide").style.textAlign = "center";

	var toDay = new Date();	
    var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };	

	var toDay = toDay.toLocaleDateString("en-US", options);
    document.getElementById("foot").innerHTML += `<h4>${toDay}</h4>`;

	
}