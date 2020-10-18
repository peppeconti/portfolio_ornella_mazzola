<?php 
if(isset($_POST['submit'])){
    $to = "g.conti1980@gmail.com"; // this is your Email address
    $name = $_POST['name'];
	$subject = "Form submission";
	$message = $_POST['message'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$html = '<html lang="en">
	<head>
		<meta charset="UTF-8">
		<!-- viewport controllo zoom bloccato-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
		<!-- X-UA er compatibilità di alcuni aspetti di Internet Explorer -->
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<!-- autore del sito -->
		<meta name="author" content="Giuseppe Conti">
		<!-- meta description -->
		<meta name="description" content="Portfolio fotografico di Ornella Mazzola">    
		<!-- meta keywords -->
		<meta name="keywords" content="Ornella Mazzola, fotografa, fotografia, Palermo">
		<title>Mazzola Photography - Confirm</title>
		<!-- carico il file per le icone Fontawesome -->
		<link rel="stylesheet" href="fontawesome/css/all.min.css">
		<link rel="icon" href="images/favicon.png" type="image/png">
		<link rel="stylesheet" href="css/style_confirms.css">
	</head>
	<body>
		
	</body>
	</html>';

	$body = <<<EOD
	<i>Name:</i> $name <br>
	<i>Email:</i> $email <br> 
	<i>Message:</i> $message<br>
EOD;
}
	$headers = "From: $name <$email>\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    mail($to,$subject,$body,$headers);
	echo $html;
    // You can also use header('Location: thank_you.php'); to redirect to another page.
?>