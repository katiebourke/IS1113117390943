<?php
//Start the session
session_start();
?>

<!DOCTYPE html>
<html>  
    <head>
        <title>Select Product</title> 
        <link rel="stylesheet" href="/ebusiness/Ebus.css" type="text/css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
        <script type="text/javascript" src="cost_calcs.js"></script>
       
       
    </head>
    
    <body>
       <div>
       
       <h2>Select a Product</h2>
       
   <br/>
   
   <form method="POST" action="Ebus2.php">
       
       <label for="salesforce">
       <input type="radio" id="salesforce" name="product" checked onClick="disablebtnProceed()"/>
        SalesForce @ $100
        </label>
  
  <br/>
  
        <label for="cloud9">
            <input type="radio" id="cloud9" name="product" checked onClick="disablebtnProceed()"/>
            Cloud 9 @ $200
        </label>    
        
    <br/>

         <label for="aws">
      <input type="radio" id="aws" name="product" checked onClick="disablebtnProceed()"/>
        AWS @ $300
        </label>
        
    <br/>
    
        <label for="gmail">
            <input type="radio" id="gmail" name="product" checked onClick="disablebtnProceed()"/>
            Gmail @ $400
        </label>
        
        <br/>
        <br/>
        
        <label for="subtotal">
            Sub Total 
       <input type="text" id="subtotal" name="subtotal" value="0.00" readonly/>
        </label>
        
        <br/>
        <br/>
        
        <label for="discount">
            Discount @ 5%
        <input type="text" id="discount" name="discount" value="0.00" readonly>
        </label>
        
        <br/>
        <br/>

            
        <label for="vat">
            Vat @ 10%
        <input type="text" id="vat" name="vat" value="0.00" readonly>
        </label>
        
        <br/>
        <br/>
          
        <label for="total">
            Total (Subtotal - discount + VAT)
       <input type="text" id="total" name="total" value="0.00" readonly/>
        </label>
        
        <br/><br/>
          <button type = "button" onClick="calcSub()">Calculate Cost</button>
        <br/>
        <br/>
        <button type="submit" id="btnProceed" disabled>Add to Shopping Cart</button>
        
        </form>
        
       
        <br/>
        <a role="button" type="button" class="button" href="Ebus1.php">Clear Choices</a>
        <br/><br/>
        <a role-"button" type="button" class="button"href="Ebus_home.html">Cancel Order</a>
        <br/><br/>
    </div>
    </body>

</html>