$(function(){

	$('#showform').click(function(){
		document.getElementById("showform").className = "active";
		document.getElementById("showhome").className = "";
		console.log("1");
	});
	$('#showhome').click(function(){
		document.getElementById("showform").className = "";
		console.log("2");
		document.getElementById("showhome").className = "active";
	});

	$('#btnform').click(function(){

		$.ajax({
			url: '/form',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log($('form').serialize());
				console.log(response);
				toastr["success"]("success!")
			},
			error: function(error){
				console.log($('form').serialize());
				console.log(error);
				toastr["error"]("error!")

			}
		});
	});
});
