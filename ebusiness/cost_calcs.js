/* global $*/



var argDiscount;
var argSubTotal;
var argVat;
var argTotal;

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

function calcDisVatTotal(parmSubTotal){
    
    argDiscount = argSubTotal * .05;
    
    argVat = argSubTotal * .1
    
    argTotal = argSubTotal - argDiscount + argVat;
    
    display(argSubTotal, argDiscount, argVat, argTotal);

}

function display(parm1, parm2, parm3, parm4){
    document.getElementById("subtotal").value =parm1;
    document.getElementById("discount").value =parm2; 
    document.getElementById("vat").value =parm3;
    document.getElementById("total").value =parm4;
    
    enablebtnProceed()
}
    

function enablebtnProceed(){
        $('#btnProceed').prop('disabled', false);
        color()
    }
    
function disablebtnProceed(){
        $('#btnProceed').prop('disabled', true);
    }
    
    function color(){
    document.getElementById("btnProceed").style.backgroundColor = "0xFFFF00";
}
