/* global $ */

function validateDetails(){
    var pin;
    
    pin = document.getElementById("user_pin").value;
    
    if (pin == ""){
        alert("Please enter your PIN");
    }
    else if (String(pin).length < 4){
        alert("Please make sure your PIN is accurate");
    }
    
    validateName()
}
    
    function validateName(){
        var name;
    name= document.getElementById("Name").value;
    
    
    if (name == ""){
        alert("Please enter your name");
    }
    else{
        enablebtnPurchase();
    } 
}

function enablebtnPurchase(){
    $('#btnPurchase').prop('disabled', false);
}
function disablebtnPurchase(){
    $('#btnPurchase').prop('disabled', true);
}
