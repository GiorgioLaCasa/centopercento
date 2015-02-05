<?

	
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From: Sito centopercentocash.it <info@centopercentocash.it>' . "\r\n";
	
	
	$message = "Gentile Centopercentocash,<br/>".
				"avete ricevuto un messaggio dal sito:<br/>
				<br/<br/>Nome: ".$_REQUEST['nome']."<br/>
				Email: ".$_REQUEST['email']."<br/>
				Telefono: ".$_REQUEST['telefono']."<br/>
				Commento: ".$_REQUEST['messaggio']."<br/>";

	mail("info@centopercentocash.it","messaggio dal sito",$message,$headers);

?>