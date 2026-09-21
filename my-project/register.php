<?php 
 include("database.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="register.css">
</head>
<body>
    <div class="container">
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <h2>Registration</h2>
            <div>
                <label for="username">Username:</label>
                <input type="text" name="username">
            </div>
            <div>
                <label for="Password">Password:</label>
                <input type="password" name="Password">
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" name="email">
            </div>
            <div>
                <label for="Password">Country:</label>
                <input type="text" name="country">
            </div>
            <div>
                <label for="Phone">Phone-Number:</label>
                <input type="phone" name="Phone" >
            </div>
            <div>
             <input type="submit" name="submit" value="Registeration" id="btn">
            </div>
        </form>
    </div>
</body>
</html>
<?php 
    	if($_SERVER["REQUEST_METHOD"] == "POST"){
		$username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
		$password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
         $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
         $country = filter_input(INPUT_POST, "country", FILTER_SANITIZE_SPECIAL_CHARS);
         $phone = filter_input(INPUT_POST, "Phone", FILTER_SANITIZE_SPECIAL_CHARS);
		if(empty($username)){
			 echo"Please enter a username";
		}elseif(empty($password)){
			echo"Please enter a password";
		}
		else{
			$hash = password_hash($password, PASSWORD_DEFAULT);
			$sql = "INSERT INTO registration (username,password,email,country,phone)
			VALUES ('$username', '$hash', '$email', '$country', '$phone')";	

			try{
				mysqli_query($conn, $sql);
			echo"You are now registered!";
			}
			catch(mysqli_sql_exception){
				echo"The username is already takem";
			}
			
		}
        header("Location: index.php");
	}
	mysqli_close($conn);
?>