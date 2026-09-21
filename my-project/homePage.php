<?php 
  session_start();
  include("database.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
</head>
<body>
    <div style="text-align:center; padding:15%;">
        <p style="text-align: center; padding:15%">
            hello  <?php
                if(isset($_SESSION['email'])){
                    $email =$_SESSION['email'];
                    $query = mysqli_query($conn, 
   "SELECT * FROM users where users.email='$email'");
   while($row=mysqli_fetch_array($query)){
         echo $row['firstName']. ' '.$row['lastName'];
   }
                }
            ?>
        <a href="logout.php">logout</a>
        </p>
    </div>
</body>
</html>