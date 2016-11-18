<?

	header("Access-Control-Allow-Origin: *");

	$json = json_decode(file_get_contents("valori.json"), true);
	print_r($json);

?>