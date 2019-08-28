<?php 
    $name = $_POST['nameGET'];
    $email = $_POST['emailGET'];
    $message = $_POST['messageGET'];
    $formcontent="From: $name \n Message: $message";
    $recipient = "ayeyoitskenneth@gmail.com";
    $subject = "Contact Form";
    $mailheader = "From: $email \r\n";
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    echo "Thank You!";
?>