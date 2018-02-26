/* global $ */

function validateDetails(){
    var pin;
    var name;
    var email;
    
    pin = document.getElementById("user_pin").value;
    name= document.getElementById("Name").value;
    email= document.getElementById("Email").value

    if (name == ""){
        alert("Please enter your name");
    }
    
    else if (pin == ""){
        alert("Please enter your PIN");
    }
    else if (String(pin).length < 4){
        alert("Please make sure your PIN is accurate");
    }
    else if (email == ""){
        alert("Please enter your email address ")
    }
    else{
        enablebtnPurchase()
    }
    
    
}


function enablebtnPurchase(){
    $('#btnPurchase').prop('disabled', false);

    
}
function disablebtnPurchase(){
    $('#btnPurchase').prop('disabled', true);
    
}

