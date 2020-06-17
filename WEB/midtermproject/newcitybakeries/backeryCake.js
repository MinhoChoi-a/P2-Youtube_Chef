var selected;
const BASE_SHEET_PRICE = 18;
const BASE_ROUND_PRICE = 15;
var areaCal;
var addPrice;
var finalPrice;
var name;
var address;
var postal;
var phone;
var email;
var string;
var finalSum=0;

function cakeSize(){

    selected = document.querySelector("input[name='cake']:checked").value;

    if(selected == "sheet")
    {
        document.querySelector("table[id='setSize']").innerHTML =""
        document.querySelector("table[id='setSize']").innerHTML = 
        (`<tr><td><input type="number" id="layer" min="1" max="3" style="width: 5em"> Layer</td><td><input type="number" id="length" min="30" max="60" style="width: 5em"> length</td>
        <td><input type="number" id="width" min="30" max="45" style="width: 5em"> width</td></tr>`);
       }

    else if(selected == "round")
    {
        document.querySelector("table[id='setSize']").innerHTML =""
        document.querySelector("table[id='setSize']").innerHTML = 
        (`<tr><td><input type="number" id="layer" min="1" max="3" style="width: 5em"> Layer</td><td><input type="number" id="radius" min="15" max="30" style="width: 5em"> radius</td>
        </tr>`);
        }
}

function checkOrder(){

    var length = document.querySelector("input[id='length']");
    var width = document.querySelector("input[id='width']");
    var radius = document.querySelector("input[id='radius']");
    var layer = document.querySelector("input[id='layer']");
    layer = parseInt(layer.value);
    
    var fname = document.querySelector("input[id='fname']").value;
    var lname = document.querySelector("input[id='lname']").value;
    
    name = fname +" "+lname;
    address =document.querySelector("input[id='address']").value;
    postal = document.querySelector("input[id='pcode']").value;
    phone = document.querySelector("input[id='phone']").value;
    email= document.querySelector("input[id='email']").value;

    var add = document.querySelectorAll("input[id='Choice']:checked");
    var addList="";
    var addTitle;
    var addSum=0;

    for(var i=0; i < add.length;i++)
    {
        if (add[i].value==5)
        {addTitle = "Cream Cheese icing";}
           
        else if(add[i].value==7)
       {addTitle = "Fruit and Almonds topping";}
    
        else
        {addTitle = "Fruit jam filling";}
        
        addList += (
        `${addTitle}   $${add[i].value}
        `);
    
        addSum += parseInt(add[i].value);
    
    }

    if(selected == "sheet")
    {
        areaCal = parseFloat(length.value)*parseFloat(width.value);
        addPrice = (areaCal-900)*0.02 + BASE_SHEET_PRICE;
        finalPrice = (addPrice + ((layer-1)*addPrice*0.5)).toFixed(2);
        finalSum = parseFloat(finalPrice) + parseFloat(addSum);
        finalSum = finalSum.toFixed(2)
       
        string = (`
        INVOICE
        
        ${name}
        ${address}
        ${postal}
        ${phone}
        ${email}

        your order:

        Sheet cake ${width.value}cm ${length.value}cm with ${layer} layers:  $${finalPrice}
        ${addList}
        Total:  $${finalSum}
        `);

    }

    else
    {
        areaCal = parseFloat(radius.value)*parseFloat(radius.value)*3.14;
        addPrice = (areaCal-707)*0.02 + BASE_ROUND_PRICE;
        finalPrice = (addPrice + ((layer-1)*addPrice*0.5)).toFixed(2);
        finalSum = parseFloat(finalPrice) + parseFloat(addSum);
        finalSum = finalSum.toFixed(2)

    string = (`
        INVOICE    

        ${name}
        ${address}
        ${postal}
        ${phone}
        ${email}

        your order:

        Round cake ${radius.value}cm with ${layer} layers:  $${finalPrice}
        ${addList}
        Total:  $${finalSum}
        `);
    }
    window.alert(string);
}