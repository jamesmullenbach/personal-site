<?php
require_once("class.phpmailer.php");
include 'ChromePhp.php';
ChromePhp::log("hello console");
// Fetching Values from URL.
$name = $_POST['name1'];
$email = $_POST['email1'];
$message = $_POST['message1'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
	ChromePhp::log("valid email");
$subject = $name;
// To send HTML mail, the Content-type header must be set.
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From:' . $email. "\r\n"; // Sender's Email
$headers .= 'Cc:' . $email. "\r\n"; // Carbon copy to Sender
$template = '<div style="padding:50px; color:white;">Hello ' . $name . '!<br/>'
. '<br/>Thank you for your message.<br/><br/>'
. 'Name:' . $name . '<br/>'
. 'Email:' . $email . '<br/>'
. 'Message:' . $message . '<br/><br/>'
. 'This email serves as confirmation that your message was sent.'
. '</div>';
$sendmessage = "<div style=\"background-color:#7E7E7E; color:white;\">" . $template . "</div>";
ChromePhp::log("built message");
// Message lines should not exceed 70 characters (PHP rule), so wrap it.
$sendmessage = wordwrap($sendmessage, 70);
// Send mail by PHP Mail Function.
$mail = new PHPMailer();
ChromePhp::log("created PHPMailer");
$mail->IsSMTP();
$mail->SMTPDebug=1;
$mail->SMTPAuth=true;
$mail->SMTPSecure='ssl';
$mail->Host="smtp.gmail.com";
$mail->Port = 465;
$mail->IsHTML(true);
$mail->Username="mullenbachmailer@gmail.com";
$mail->Password="yitbos6868yay!";
$mail->SetFrom("mullenbachmailer@gmail.com");
$mail->Subject="Test";
$mail->Body=$sendmessage;
// send to
$mail->addAddress("james.mullenbach@gmail.com");
$mail->addCC($email);
ChromePhp::log("filled out mail");

if (!$mail->send()) {
	ChromePhp::log("Mailer error: " . $mail->ErrorInfo);
} else {
	ChromePhp::log("Message sent!");
}
} else {
ChromePhp::log("<span>* invalid email *</span>");
}
?>