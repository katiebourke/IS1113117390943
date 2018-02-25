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
    </head>
    <body>
        <h4>RECEIPT</h4>
        
        <p><strong>Name: </strong>
         <?php
        //Echo session variables that were set on previous page
        echo $_SESSION["Name"];
        ?>
        </p>
        <p><strong>Email: </strong>
         <?php
        //Echo session variables that were set on this page
        echo $_SESSION["Email"];
        ?>
        </p>
        
        <p><strong>Total: </strong>
        <?php
        //Echo session variables that were set on this page
        echo $_SESSION["total"];
        ?>
        </p>
    </body>
</html> 