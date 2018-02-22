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
    
    display1(argSubTotal);
}

function calcDisc(argDiscount, argSubTotal){
    
    
    
    argDiscount = argSubTotal * .05;
    
    display2(argDiscount);
    
    
}

function calcVat(){
    
    argVat = argSubTotal * .1
    display3(argVat);
    
}
function calcTotal(){
    argTotal = argSubTotal - argDiscount + argVat
    
    display4(argTotal)
}

function allCalcs(){
    calcSub();
    calcDisc();
    calcVat();
    calcTotal();
    
    
    
}


function display1(parm1){
    
    document.getElementById("subtotal").value =parm1;
   
    enablebtnProceed();
}
function display2(parm2){
     document.getElementById("discount").value =parm2; 
}

function display3(parm3){
    document.getElementById("vat").value =parm3;
}
function display4(parm4){
    document.getElementById("total").value =parm4;
}

function enablebtnProceed(){
        $('#btnProceed').prop('disabled', false);
    }
    
    function disablebtnProceed(){
        $('#btnProceed').prop('disabled', true);
    }
