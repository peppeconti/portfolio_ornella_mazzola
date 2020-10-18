<?php
// Variables
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$subject = trim($_POST['subject']);
$message = trim($_POST['message']);
​
​
if( isset($name) && isset($email) ) {
​
	// Avoid Email Injection and Mail Form Script Hijacking
	/*$pattern = "/(content-type|bcc:|cc:|to:)/i";
	/*if( preg_match($pattern, $name) || preg_match($pattern, $email) || preg_match($pattern, $message) ) {
		exit;
	}
	*/
	// Email will be send
	$to = "peppeconti@hotmail.com"; // Change with your email address
	$sub = "info_Qr bike"; // You can define email subject
	// HTML Elements for Email Body
​
	$body = <<<EOD
	<strong>Name:</strong> $name <br>
	<strong>Email:</strong> $email <br> 
	<strong>Message:</strong> $message<br>
EOD;
//Must end on first column
	
	$headers = "From: $name <$email>\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
​
	// PHP email sender
	mail($to, $subject, $body);
//	mail($to, $sub, $body, $headers);
}
?>
<h2>Ciao</h2>