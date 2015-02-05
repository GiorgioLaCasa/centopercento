function reloadValori(){
		$.ajax({
					  url: 'http://www.lacasadiriposo.it/oro/valori.json',
					  dataType: 'json',
					  cache: false,
					  success: function(data) {
					  	
					  	$('#cifra_1').html(data['oro1']);
						$('#cifra_2').html(data['oro2']);
						$('#cifra_4').html(data['oro3']);
						$('#cifra_5').html(data['arg1']);
						$('#cifra_6').html(data['arg2']);
					  }
		});
	}

$(document).ready(function() {

	
	reloadValori();
	

});

setInterval("reloadValori()",10000);
