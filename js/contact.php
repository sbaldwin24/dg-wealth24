
<?php

//
// SendGrid PHP Library Example
//
// This example shows how to send email through SendGrid
// using the SendGrid PHP Library.  For more information
// on the SendGrid PHP Library, visit:
//
//     https://github.com/sendgrid/sendgrid-php
//

require '/vendor/autoload.php';


/* USER CREDENTIALS
/  Fill in the variables below with your SendGrid
/  username and password.
====================================================*/
$sg_username = "azure_cd3754f5d9a69c4cd90058e32995e50d@azure.com";
$sg_password = "I1DgUA4j9Od27UP";


/* CREATE THE SENDGRID MAIL OBJECT
====================================================*/
$sendgrid = new SendGrid( $sg_username, $sg_password );
$mail = new SendGrid\Email();




/* SEND MAIL
/  Replace the the address(es) in the setTo/setTos
/  function with the address(es) you're sending to.
====================================================*/
try {
    $mail->
    setFrom( "contact@dg-wealth.azurewebsites.net" )->
    addTo( "sterling.baldwin@gmail.com" )->
    setSubject( "Contact from DG-Wealth" )->
    setText( "Name: \nEmail:\nSubject:\nMessage:\n" )->
    setHtml( "" );
    
    $response = $sendgrid->send( $mail );

    if (!$response) {
        throw new Exception("Did not receive response.");
    } else if ($response->message && $response->message == "error") {
        throw new Exception("Received error: ".join(", ", $response->errors));
    } else {
        print_r($response);
    }
} catch ( Exception $e ) {
    var_export($e);
}


?>