<?php 
if(isset($_POST['submit'])){
    $to = "g.conti1980@gmail.com"; // this is your Email address
    $name = $_POST['name'];
	$subject = $_POST['subject'];
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
		</head>
		<style>
		/* Fonts */
		@font-face {
			font-family: Montserrat;
			src: url(http://localhost/portfolio_ornella_mazzola/fonts/Montserrat-Light.ttf);
		  }
		@font-face {
			font-family: JuliusOne;
			src: url(http://localhost/portfolio_ornella_mazzola/fonts/JuliusSansOne-Regular.ttf);
		  }
		@font-face {
			font-family: Dancing;
			src: url(http://localhost/portfolio_ornella_mazzola/fonts/DancingScript-VariableFont_wght.ttf);
		  }   
		/* Reset CSS */
		* {
			margin: 0;
			padding: 0;
			border: 0;
			font-size: 100%;
			box-sizing: border-box;
		}
		body {
			height: 100vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			position: relative;
		}
		.overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -2;
			background-color: rgba(245, 245, 245, 0.5);
		}
		.overlay_2 {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -3;
			background: url(http://localhost/portfolio_ornella_mazzola/images/background.jpg) no-repeat center center;
			filter: blur(3px);
		}
		.confirm_message {
			color: #2d2d2d;
			font-family: Dancing;
			padding: 15px;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 1;
			width: 100%;
		}
		.confirm_message h2 {
			font-size: 50px;
			text-align: center;
		}
		.back {
			display: flex;
			justify-content: center;
			padding: 25px;
			width: 100%;
		}
		.back button {
			padding: 10px;
			background-color: #494949;
			font-family: Dancing;
			display: flex;
			align-items: center;
			justify-content: space-around;
			color: white;
			outline: none;
			margin: 20px;
			width: 150px;
			cursor: pointer;
		}
		.back button:hover {
			opacity: 0.8;
			animation: bounce 0.8s 1 ease;
		}
		.back a {
		
			text-decoration: none;
			font-size: 150%;
			text-align: center;
		}
		@keyframes bounce { 
			0% {transform: translateY(0);}
			50% {transform: translateY(-20px);}
			100% {transform: translateY(0px);}
		  }
		@-webkit-keyframes bounce { 
			0% {transform: translateY(0);}
			50% {transform: translateY(-20px);}
			100% {transform: translateY(0px);}
		  }
		@-o-keyframes bounce { 
			0% {transform: translateY(0);}
			50% {transform: translateY(-20px);}
			100% {transform: translateY(0px);}
		  }
		@-moz-keyframes bounce { 
			0% {transform: translateY(0);}
			50% {transform: translateY(-20px);}
			100% {transform: translateY(0px);}
		  }
		@media only screen and (max-width: 450px) {
			.back {
				flex-direction: column;
				align-items: center;
			}
			.confirm_message h2 {
				font-size: 46px;
			}
		}
		</style>
		<body>
		<div class="overlay"></div>
		<div class="overlay_2"></div>
		<div class="confirm_message">
			<h2>Thanks, your email was sent correctly!</h2>
		</div>
			<div class="back">
				<a href="https://mazzola.netlify.app/index.html"><button>Home</button></a>
				<a href="https://mazzola.netlify.app/contacts.html"><button>Contacts</button></a>
			</div>
		</body>
	</html>';

	$body = <<<EOD
	<header style="background-color:#d3d3d3; padding:30px; border: 6px solid #2d2d2d">
	<h1 style="font-style:30px; text-align: center">Ornella Mazzola - Photography<h1>
	</header>
	<section style="background-color: #2d2d2d; padding: 20px">
	<h2 style="color: white; font-size:24px; text-align: center; border-bottom: 1px solid white; margin-bottom: 20px; padding: 20px 0px">You received a new mail!</h2>
	<div>
	<p style="color:white; padding:2px;"><i>Name:</i> <bold>$name</bold></p>
	<p style="color:white; padding:2px"><i>Subject:</i> <bold>$subject</bold></p>
	<p style="color:white; padding:2px"><i>Email:</i> <bold>$email</bold></p>
	<p style="color:white; padding:2px"><i>Mobile:</i> <bold>$phone</bold></p>
	</div>
	<div style="margin-top:30px;">
	<p style="color:white; padding:10px; border-top: 1px solid white; border-bottom: 1px solid white;"><i>Message:</i> $message</p>
	</div>
	</section>
	<footer style="background-color:#d3d3d3; padding:30px; border: 6px solid #2d2d2d">
	<h3 style="font-style:18px; text-align: center">Development: Giuseppe Conti<h3>
	</footer>
EOD;
}
	$headers = "From: $name <$email>\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    mail($to,$subject,$body,$headers);
	echo $html;
    // You can also use header('Location: thank_you.php'); to redirect to another page.
?>