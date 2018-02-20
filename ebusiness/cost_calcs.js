/* global $*/

var argDiscount;
var argSubTotal;

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
    
    display(argSubTotal);
}

function calcDisc(){
    
    
    
    argDiscount = argSubTotal * 0.05;
    
    return(argDiscount);
    
    
}

function allCalcs(){
    calcSub();
    calcDisc();
}


function display(parm1){
    
    document.getElementById("subtotal").value =parm1;
    document.getElementById("total").value =parm1;

    enablebtnProceed();
}

function enablebtnProceed(){
        $('#btnProceed').prop('disabled', false);
    }
    
    function disablebtnProceed(){
        $('#btnProceed').prop('disabled', true);
    }
