<?


	$myFile = "valori.json";
	$fh = fopen($myFile, 'w') or die("can't open file");
	$stringData = "Bobby Bopper\n";
	fwrite($fh, json_encode($_REQUEST));
	fclose($fh);
	
?>