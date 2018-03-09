<?php
session_start();
?>

 <?php
            // Set session variables
            $_SESSION["Name"] = $_POST["Name"];
            $_SESSION["Email"] = $_POST["Email"];
        ?>
        
<!DOCTYPE html>
<html>
    <head>
        <title>RECEIPT</title>
        <!--link to ebus.css-->
        <link rel="stylesheet" href="Ebus.css" type="text/css"/>
        
    </head>
    <body>
        <div>
        <h4>RECEIPT</h4>
        
        <p><strong>Name: </strong>
         <?php
        //Echo session variables that were set at top of page 
        echo $_SESSION["Name"];
        ?>
        </br>
        </p>
        <p><strong>Email: </strong>
         <?php
        //Echo session variables that were set on this page
        echo $_SESSION["Email"];
        ?>
        </p>
        <br/>
        <p><strong>Total: </strong>
        <?php
        //Echo session variables that were set on previous page
        echo $_SESSION["total"];
        ?>
        </p>
        <!--Adding today's date-->
        <p>
        <strong>Date: </strong>
        <span id="date"></span>
        
        <script>
        var d = new Date();
        document.getElementById("date").innerHTML = d.toDateString();
        </script>
    
                
        </p>
        
        <br/><br/>
        <a role="button" type="button" class="button" href="Ebus_home.html">Home</a>

        </div>
        </body>
</html> 