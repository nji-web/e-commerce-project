
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & registration</title>
	<link rel="stylesheet" href="login.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css" integrity="sha512-QeR2VH+lsBE5LSAe1Q5EnTBbe7XTBubt8dG93Y7gidSgdMCr8nVqKcfKAMyN96SV8KDbZVTDXChatu5G2KQGzg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
<body>
   <div class="container" id="signUpForm">
    <h1 class="form-title">Register</h1>
	<form action="regis.php" method="post">
		<div class="input-group">
         <i class="fas fa-user"></i>
		 <input type="text" name="fName" id="fName" placeholder="First Name" required>
		 
		</div>
		
		<div class="input-group">
         <i class="fas fa-user"></i>
		 <input type="text" name="lName" id="lName" placeholder="Last Name" required>
		 
		</div>

		<div class="input-group">
         <i class="fas fa-envelope"></i>
		 <input type="email" name="email" id="email" placeholder="Email" required>
		 
		</div>

		<div class="input-group">
         <i class="fas fa-lock"></i>
		 <input type="password" name="password" id="password" placeholder="Password" required>
		 
		</div>
		<input type="submit" name="signup" value="Register" class="btn">
	</form>
	<p class="or">
		---------or---------
	</p>
	<div class="icons">
		<i class="fab fa-google">
		</i>
		<i class="fab fa-facebook"></i>
	</div>
	<div class="links">
		<p>Already have an account?</p>
		<button id="signInButton">Sign In</button>
	</div>
   </div>
   
   
    <div class="container" id="signInForm" style="display:none;">
    <h1 class="form-title">Sign In</h1>
	<form action="regis.php" method="post" >
		<div class="input-group">
         <i class="fas fa-envelope"></i>
		 <input type="email" name="email" id="email" placeholder="Email" required>
		 
		</div>

		<div class="input-group">
         <i class="fas fa-lock"></i>
		 <input type="password" name="password" id="password" placeholder="Password" required>
		
		</div>
		<p class="recover">
		<a href="#">Recover password</a>
		</p>
		<input type="submit" name="signin" value="Sign In" class="btn" >
	</form>
	<p class="or">
		---------or---------
	</p>
	<div class="icons">
		<i class="fab fa-google">
		</i>
		<i class="fab fa-facebook"></i>
	</div>
	<div class="links">
		<p>Don't have an account yet?</p>
		<button id="signUpButton">Sign Up</button>
	</div>
   </div>
   <script src="login.js"></script>
</body>
</html>
<?php 
 include('database.php');

 if(isset($_POST['signUp'])){
    $firstName = $_POST['fName'];
    $lastName = $_POST['lName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password =md5($password);

    $checkEmail = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($checkEmail);
    if($result->num_rows>0){
        echo "Email Address Already Exists !";
    }else{
        $insertQuery="INSERT INTO users(firstName.lastName,email,password)
                      VALUES('$firstName','$lastName','$email','$password')";
            if($conn->query($insertQuery)==TRUE){
                header("location:regis.php");
				exit();
            }else{
                echo "Error:".$conn->error;
            }
    }
 }

 if(isset($_POST['signIn'])){
     $email = $_POST['email'];
    $password = $_POST['password'];
    $password =md5($password);

    $sql = "SELECT * FROM users WHERE email='$email' and password='$password";
  
    $result=$conn->query($sql);
    if($result->num_rows>0){
        session_start();
        $row=$result->fetch_assoc();
        $_SESSION['email'] = $row['email'];
        header("location: regis.php");
        exit();
    }else{
        echo"Not Found, Incorrect Email or Password";
    }
 }
?>