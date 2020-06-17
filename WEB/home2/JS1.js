window.onload=initfunction;

function initfunction()
{
var toDay = new Date();	
		
document.getElementById("dtfield").innerHTML = toDay;
document.getElementById("resetBut").disabled = true;
document.getElementById("orderBut").disabled = true;
}

let customer = {
	"fName": "",
	"lName": "",
	"address": "",
	"phone": "",
	"string": ""
};

var orderList = [];
var array = [];

let order = {
	"menu": "",
	"select":"",
	"size": "",
	"quant": 0,
	"top": array,
	"price": 0,
	"totalP": 0,
	"string": ""
};

var pizza = ["Super Cheesy", "Extra Meatry", "Really Veggy"];
var sandwich = ["All Garden Vegetarian", "Big Beef on a Bun", "Mixed Grill", "Grilled Pork"];
var drink = ["Cola", "Orange Juice", "Lemon Juice", "Root Beer"];

var sum;

function saveContact()
{
	customer.fName = document.contact.fname.value;
	customer.lName = document.contact.lname.value;
	customer.address = document.contact.address.value;
	customer.phone = document.contact.tp.value;

	customer.string 
	= "Name: "+customer.fName+" "+customer.lName+ "\n"+
	"Address: "+customer.address+"\n"+
	"Phone: "+customer.phone+"\n";
	
	document.getElementById("resetBut").disabled = false;
	document.getElementById("orderBut").disabled = false;
}

function openNav(c, i) {
	document.getElementById("mySidenav").style.width = "400px";

	var string = c.toString();
	order.menu = string;
	
	if(order.menu == "pizza")
	{
		order.select = pizza[i-1];
		document.getElementById("option").innerHTML
		= 
		(`${order.select} Pizza<br><br>	
		SIZE<br>
		<input type="radio" name="pr1" value="Small">Small $8.50<br>
		<input type="radio" name="pr1" value="Medium">Medium $11.50<br>
		<input type="radio" name="pr1" value="Large">Large $14.00<br>
		<input type="radio" name="pr1" value="Extra Large">Extra Large $16.50<br>
		<br>
		QUANTITY<br>
		<input type="number" name="q" min=1 max=99><br>
		<br>
		Extra toppings ($1.75 for each)<br>
		<input type="checkbox" name="t1" value="Extra Cheese">Extra Cheese<br>
		<input type="checkbox" name="t1" value="Pepperoni">Pepperoni<br>
		<input type="checkbox" name="t1" value="Mushrooms">Mushrooms<br>
		<input type="checkbox" name="t1" value="Bacon">Bacon<br>
		<input type="checkbox" name="t1" value="Olives">Olives<br>
		<br>
		<input type="button" class="bt" value="Add to Cart" onclick="cart()">`);
	}

	else if(order.menu == "sandwich")
	{
		order.select = sandwich[i-1];
		document.getElementById("option").innerHTML
		= 
		(`${order.select} Sandwich<br><br>
		QUANTITY<br>
		<input type="number" name="q" min=1 max=99><br>
		<br>
		<input type="button" class="bt" value="Add to Cart" onclick="cart()">`);
	}

	else if(order.menu == "drink")
	{
		order.select = drink[i-1];
		document.getElementById("option").innerHTML
		= 
		(`${order.select} <br><br>
		SIZE<br>
		<input type="radio" name="pr1" value="Small"> Small $1.25<br>
		<input type="radio" name="pr1" value="Medium"> Medium $1.75<br>
		<input type="radio" name="pr1" value="Large"> Large $2.00<br>
		<br>				
		QUNATITY
		<input type="number" name="q" min=1 max=99><br>
		<br>
		<input type="button" class="bt" value="Add to Cart" onclick="cart()">`);
	}
}

function cart(){
	order.quant = document.querySelector('input[name = "q"]').value;	
	
	
	if(order.menu == "pizza")
	{
		order.size = document.querySelector('input[name = "pr1"]:checked').value;
		var tList = document.querySelectorAll('input[name=t1]:checked');
		array = [];
		
		for(var i=0; i <tList.length; i++)
		{
			array.push(tList[i].value);
		}
		
		if(order.size == "Small") {
			order.price = 8.5;}
		else if(order.size == "Medium"){
			order.price = 11.5;}
		else if(order.size == "Large"){
			order.price = 14.0;}
		else if(order.size == "Extra Large"){
			order.price = 16.5;}
		
		order.price = order.price*parseFloat(order.quant);
		order.totalP = order.price + array.length*1.75; 
		order.top = array;
		
		order.string 
		= order.quant+" "+order.size+" "+order.select+" pizza\n"+
		"with "+(order.top).toString();
	}
		
	else if(order.menu == "sandwich")
	{
		if(order.select == sandwich[0]){
			order.price = 7.5*order.quant;}
		else if(order.select == sandwich[1]){
			order.price = 8.5*order.quant;}
		else if(order.select == sandwich[2]){
			order.price = 9.5*order.quant;}
		else if(order.select == sandwich[3]){
			order.price = 9.5*order.quant;}
		
		order.totalP = order.price;
		order.string
		= order.quant+" "+order.select+" sandwich";
	}	

	else if(order.menu == "drink")
	{
		order.size = document.querySelector('input[name = "pr1"]:checked').value;

		if(order.size == "Small") {
			order.price = 1.25 * order.quant;}
		else if(order.size == "Medium"){
			order.price = 1.75 * order.quant;}
		else if(order.size == "Large"){
			order.price = 2.0 * order.quant;}
		
	order.totalP = order.price;
	order.string 
	= order.quant+" "+order.size+" "+order.select;
	}
	
	const newOrder = Object.assign({}, order);

	orderList.push(newOrder);
	window.alert("Your order is added");
	document.getElementById("mySidenav").style.width = "0";	
}

function openNavFin() {
	document.getElementById("mySidenav").style.width = "600px";
	document.querySelector("div[id='option']").innerHTML = "";
	var finalArray = [];
	sum = 0;

	if(orderList.length == 0) {
	document.querySelector("div[id='option']").innerHTML = "Please Select the menu first"
	}

	else {
	for(var i=0; i<orderList.length;i++) {
	var content = (`<tr id="row">
	<td>${orderList[i].string}</td></tr><br>
	<tr id="row">
	<td><input type="button" class="bt" id="${i}" value="Edit" onclick="editButton(this.id)"></td>
	<td><input type="button" class="bt" id="${i}" value="Delete" onclick="deleteButton(this.id)"></td></tr><br>`);
	
	sum += orderList[i].totalP;

	finalArray.push(content);
	
	document.querySelector("div[id='option']").innerHTML += finalArray[i];
	}
		
	document.querySelector("div[id='option']").innerHTML += 
	(`<br>Total Price: $${sum}<br>
	<br>
	<input type="button" class="bt" value="Place the Order" onclick="placeOrder()">`);
	}
}

function deleteButton(id){
    
    orderList.splice(id,1);    
    
    openNavFin();
}

function editButton(id){
	order.menu = orderList[id].menu;
	order.select = orderList[id].select;
	order.size = orderList[id].size;
	order.quant = orderList[id].quant;
	order.top = orderList[id].top;
	order.price = orderList[id].price;
	order.totalP = orderList[id].totalP;
	order.string = orderList[id].string;
	
	openNavEdit(id);
}

function openNavEdit(id) {
		
	if(order.menu == "pizza")
	{
		document.getElementById("option").innerHTML
		= 
		(`${order.select} Pizza<br><br>	
		SIZE<br>
		<input type="radio" name="pr1" value="Small">Small $8.50<br>
		<input type="radio" name="pr1" value="Medium">Medium $11.50<br>
		<input type="radio" name="pr1" value="Large">Large $14.00<br>
		<input type="radio" name="pr1" value="Extra Large">Extra Large $16.50<br>
		<br>
		QUANTITY<br>
		<input type="number" name="q" min=1 max=99><br>
		<br>
		Extra toppings ($1.75 for each)<br>
		<input type="checkbox" name="t1" value="Extra Cheese">Extra Cheese<br>
		<input type="checkbox" name="t1" value="Pepperoni">Pepperoni<br>
		<input type="checkbox" name="t1" value="Mushrooms">Mushrooms<br>
		<input type="checkbox" name="t1" value="Bacon">Bacon<br>
		<input type="checkbox" name="t1" value="Olives">Olives<br>
		<br>`);
	}

	else if(order.menu == "sandwich")
	{
		document.getElementById("option").innerHTML
		= 
		(`${order.select} Sandwich<br><br>
		QUANTITY<br>
		<input type="number" name="q" min=1 max=99><br>
		<br>`);
	}

	else if(order.menu == "drink")
	{
		document.getElementById("option").innerHTML
		= 
		(`${order.select} <br><br>
		SIZE<br>
		<input type="radio" name="pr1" value="Small"> Small $1.25<br>
		<input type="radio" name="pr1" value="Medium"> Medium $1.75<br>
		<input type="radio" name="pr1" value="Large"> Large $2.00<br>
		<br>				
		QUNATITY
		<input type="number" name="q" min=1 max=99><br>
		<br>`);
	}

	document.getElementById("option").innerHTML +=
	(`<input type="button" class="bt" value="Save" onclick="edit(${id})">`)
}

function edit(id){
	order.quant = document.querySelector('input[name = "q"]').value;	
	
	if(order.menu == "pizza")
	{
		order.size = document.querySelector('input[name = "pr1"]:checked').value;
		var tList = document.querySelectorAll('input[name=t1]:checked');
		array = [];
	
		for(var i=0; i <tList.length; i++)
		{
			array.push(tList[i].value);
		}
		
		if(order.size == "Small") {
			order.price = 8.5;}
		else if(order.size == "Medium"){
			order.price = 11.5;}
		else if(order.size == "Large"){
			order.price = 14.0;}
		else if(order.size == "Extra Large"){
			order.price = 16.5;}
		
		order.price = order.price*parseFloat(order.quant);
		order.totalP = order.price + array.length*1.75; 
		order.top = array;

		order.string 
		= order.quant+" "+order.size+" "+order.select+" pizza\n"+
		"with "+(order.top).toString();
	}
		
	else if(order.menu == "sandwich")
	{
		if(order.select == sandwich[0]){
			order.price = 7.5*order.quant;}
		else if(order.select == sandwich[1]){
			order.price = 8.5*order.quant;}
		else if(order.select == sandwich[2]){
			order.price = 9.5*order.quant;}
		else if(order.select == sandwich[3]){
			order.price = 9.5*order.quant;}
		
		order.totalP = order.price;
		order.string
		= order.quant+" "+order.select+" sandwich";
	}	

	else if(order.menu == "drink")
	{
		order.size = document.querySelector('input[name = "pr1"]:checked').value;

		if(order.size == "Small") {
			order.price = 1.25 * order.quant;}
		else if(order.size == "Medium"){
			order.price = 1.75 * order.quant;}
		else if(order.size == "Large"){
			order.price = 2.0 * order.quant;}
		
	order.totalP = order.price;
	order.string 
	= order.quant+" "+order.size+" "+order.select;
	}
	
	const newOrder = Object.assign({}, order);

	orderList.splice(id,1,newOrder);
	window.alert("Your order is fixed");
	document.getElementById("mySidenav").style.width = "0";	
}


function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }


function placeOrder() {

	var pString="";
	var sString="";
	var dString="";

	for(var i=0; i<orderList.length; i++)
	{
		if(orderList[i].menu == "pizza"){
			pString += orderList[i].string + " $"+orderList[i].totalP+"\n";
		}

		else if(orderList[i].menu == "sandwich"){
			sString += orderList[i].string + " $"+orderList[i].totalP+"\n";
		}

		else{
			dString += orderList[i].string + " $"+orderList[i].totalP+"\n";
		}

	}

	var fString = (`
	${customer.fName} ${customer.lName}
	${customer.address}	
	${customer.phone}
	
	Your order:
	
	Pizza:
	${pString}
	
	Sandwiches:
	${sString}
	
	Drinks:
	${dString}
	
	Order Total: $${sum}
	`)

	window.alert(fString);
}



  