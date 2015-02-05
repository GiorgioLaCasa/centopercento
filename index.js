function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}
function reloadValori(){
	$.ajax({
			  url: '/oro/valori.json',
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

var ver = getInternetExplorerVersion();
if ( ver > -1 && ver < 9.0)
{


	$.ajax({
			  url: '/oro/valori.json',
			  dataType: 'json',
			  cache: false,
			  success: function	(data) {
			  	
				setInterval("reloadValori()",10000);

			  	$('#cifra_1').html(data['oro1']);
				$('#cifra_2').html(data['oro2']);
				$('#cifra_4').html(data['oro3']);

				$('#cifra_5').html(data['arg1']);
				$('#cifra_6').html(data['arg2']);

				$("#video").hide();
				$("#step2").show();
				$("#step4").hide();
			  }
	});

}
else
{

document.getElementById('video').addEventListener("ended", function() {
        step4();
    }, true);

    function step1(){
        $("#step4").hide();
        $("#step2").hide();
        $("#video").show();
        //document.getElementById('video').currentTime = 0;
        document.getElementById('video').play();
    }   
      
		
	   
      
      function step2(){
	 
      		$.ajax({
			  url: '/oro/valori.json',
			  dataType: 'json',
			  success: function(data) {
			  	
			  	$('#cifra_1').html(data['oro1']);
				$('#cifra_2').html(data['oro2']);
				$('#cifra_4').html(data['oro3']);

				$('#cifra_5').html(data['arg1']);
				$('#cifra_6').html(data['arg2']);

				$("#video").hide();
				$("#step4").hide();
				$("#step2").show();
				
				
				setTimeout(step1,5000);
			  }
			});
      		//player.playVideo();
      }
      /*
      function step3(){
      		$.ajax({
			  url: 'valori.json',
			  dataType: 'json',
			  success: function(data) {
			  	$('#arg1').html(data['arg1']);
				$('#arg2').html(data['arg2']);
				$("#step2").hide();
      			$("#step3").show();
				setTimeout(step4,15000);
			  }
			});
      		
      }
      */

      function step4(){
      		$("#video").hide();
      		$("#step4").show();
			setTimeout(step2,3000);
      }

 }

});
