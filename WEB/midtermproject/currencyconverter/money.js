var UsdToEuro = 0.93; 
var UsdToUk = 0.78;
var UsdToJap = 111.99;
var UsdToCad = 1.33;
var currency;
function convertFunction() {
    var amountFrom = parseFloat(document.getElementById("amount").value);
    var amountTo;
    var selectFrom = parseInt(document.getElementById("from").value);
    var selectTo = parseInt(document.getElementById("to").value);

    if(selectFrom==1)
    {
        if(selectTo==2)
        {amountTo = amountFrom/UsdToEuro;
        currency = "USD";}

        else if(selectTo==1)
        {amountTo = amountFrom;
        currency = "EUR";}

        else if(selectTo==4)
        {amountTo = amountFrom/UsdToEuro*UsdToJap;
            currency = "YEN";}    
        else if(selectTo==5)
        {amountTo = amountFrom/UsdToEuro*UsdToCad;
            currency = "CAD";}
            
        else if(selectTo==3)
        {amountTo = amountFrom/UsdToEuro*UsdToUk;
            currency = "GBP";}
    }
    
    else if(selectFrom==2)
    {
        if(selectTo==1)
        {amountTo = amountFrom*UsdToEuro;
        currency = "EUR";}
        else if(selectTo==2)
        {amountTo = amountFrom;
            currency = "USD";}
        else if(selectTo==3)
        {amountTo = amountFrom*UsdToUk;
            currency = "GBP";}
        else if(selectTo==4)
        {amountTo = amountFrom*UsdToJap;
            currency = "YEN";}
        else if(selectTo==5)
        {amountTo = amountFrom*UsdToCad;
            currency = "CAD";}
    }
    
    else if(selectFrom==3)
    {
        if(selectTo==1)
        {amountTo = amountFrom/UsdToUk*UsdToEuro;
            currency = "EUR";}
        else if(selectTo==2)
        {amountTo = amountFrom/UsdToUk;
            currency = "USD";}
        else if(selectTo==3)
        {amountTo = amountFrom;
            currency = "GBP";}
        else if(selectTo==4)
        {amountTo = amountFrom/UsdToUk*UsdToJap;
        currency = "YEN";}
        else if(selectTo==5)
        {amountTo = amountFrom/UsdToUk*UsdToCad;
            currency = "CAD";}
    }
    
    else if(selectFrom==4)
    {
        if(selectTo==1)
        {amountTo = amountFrom/UsdToJap*UsdToEuro;
            currency = "EUR";}
        else if(selectTo==2)
        {amountTo = amountFrom/UsdToJap;
            currency = "USD";}
        else if(selectTo==3)
        {amountTo = amountFrom/UsdToJap*UsdToUk;
            currency = "GBP";}
        else if(selectTo==4)
        {amountTo = amountFrom;
            currency = "YEN";}
        else if(selectTo==5)
        {amountTo = amountFrom/UsdToJap*UsdToCad;
            currency = "CAD";}
    }

    var current_ratio = amountTo/amountFrom;
    
    document.getElementById("converted").value = amountTo.toFixed(2)+ " "+currency;
    document.getElementById("ratio").value = current_ratio.toFixed(2);
    


}