<?php
if(isset($_POST['submit'])) {

	// prepare email headers
		$to = "imh29@drexel.edu";  
		$subject = "[Portfolio Site] Inquiry";

	// collect form data
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];

	// build email body content
		$body = "From:\n $name\n\n  Email:\n $email\n\n  Message:\n $message\n\n";

	// send email
		mail($to, $subject, $body);

	// page redirect
		header('location:thankyou.html');
	
} else {
		header('location:error.html');
}
?>