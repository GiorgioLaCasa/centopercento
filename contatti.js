    $(document).ready(function() { 
			var options = { 
			    success:    function(data) {
			    	alert('Messaggio inviato!');
			    } 
			}; 
            $('#myForm').ajaxForm(options); 
  });