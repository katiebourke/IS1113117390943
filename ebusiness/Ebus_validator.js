/* global $ */

function validateDetails(){
    //Declaring variables
    var pin;
    var name;
    var email;
    //Assigning values to variables
    pin = document.getElementById("user_pin").value;
    name= document.getElementById("Name").value;
    email= document.getElementById("Email").value
    //validating so that if a field is left blank an alert shows
    if (name == ""){
        alert("Please enter your name");
    }
    else if (email == ""){
        alert("Please enter your email address ")
    }
    else if (pin == ""){
        alert("Please enter your PIN");
    }
    else if (String(pin).length < 4){
        alert("Please make sure your PIN is accurate");
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

