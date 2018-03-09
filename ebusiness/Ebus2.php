<?php
//Start the session
session_start();
?>

      <?php
        
            // Set session variables
            $_SESSION["total"] = $_POST["total"];
        ?>

<!DOCTYPE html>
<html>
    <head>
        <title>Enter Details</title>
        
        <!--jQuery and link to ebus.css and ebus validator-->
        <link rel="stylesheet" href="Ebus.css" type="text/css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script type ="text/javascript" src="Ebus_validator.js"></script>


    </head>
    
    <body>
      <div>
      <h4>Please enter your payment details</h4>
      <!--form for payment details. will go to ebus3 when completed -->
        
          <form action="Ebus3.php" method="POST">
            
            <label for="Name">
              Name
              <input type="text"  id="Name" name="Name" placeholder="Enter Name" />
            </label>
            
            <br/>
            <br/>
            <label for="Email">
              Email
              <input type="text"  id="Email" name="Email" placeholder="Email Address"/>
            </label>
            
            <br/>
            <br/>
            
            <label for="user_pin">
              PIN
            <input type="password" id="user_pin" name="user_pin" placeholder="Card PIN" maxlength="4">
            </label>
            <br/>
            <br/>
          
            <button type="submit" id="btnPurchase" disabled>Proceed with Purchase</button>
          </form>
            <br/>
            <button onClick="validateDetails()">Validate</button>
            <br/><br/>
           <a role="button" type="button" class="button" href="Ebus_home.html">Cancel Order</a>

            
           
            </div>
           
            
             
    </body>
</html>