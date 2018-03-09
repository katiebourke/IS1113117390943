/* global $*/


//Declaring variables
var argDiscount;
var argSubTotal;
var argVat;
var argTotal;

//Funtion calculating the sub total based on which radio button is selected
function calcSub(){
    
    if(document.getElementById('salesforce').checked) {
        argSubTotal = 100;
    }
    else if(document.getElementById('cloud9').checked){
        argSubTotal = 200;
    }
    else if(document.getElementById('aws').checked){
        argSubTotal = 300;
    }    
    else {
        argSubTotal = 400;
    }
    
    calcDisVatTotal(argSubTotal)
}

//Function to calculate discount, vat and the total 
function calcDisVatTotal(parmSubTotal){
    
    argDiscount = argSubTotal * .05;
    
    argVat = argSubTotal * .1
    
    argTotal = argSubTotal - argDiscount + argVat;
    
    display(argSubTotal, argDiscount, argVat, argTotal);

}
//display values in the corresponding fields
function display(parm1, parm2, parm3, parm4){
    document.getElementById("subtotal").value =parm1;
    document.getElementById("discount").value =parm2; 
    document.getElementById("vat").value =parm3;
    document.getElementById("total").value =parm4;
    
    enablebtnProceed()
}
    

function enablebtnProceed(){
        $('#btnProceed').prop('disabled', false);
        
    }
    
function disablebtnProceed(){
        $('#btnProceed').prop('disabled', true);
    }
    

