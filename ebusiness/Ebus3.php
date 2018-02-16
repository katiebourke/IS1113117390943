<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <title>RECEIPT</title>
    </head>
    <body>
        <h4>RECEIPT</h4>
        
        <p><strong>Name: </strong></p>
        <p><strong>Email: </strong></p>
        
        <?php
        //Echo session variables that were set on previous page
        echo "Total: " . $_SESSION["total"];
        ?>
    </body>
</html>