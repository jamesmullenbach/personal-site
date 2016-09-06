$(document).ready(function() {
	$("#submit").click(function() {
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		if (name == "" || email == "" || message == "") {
			console.log("name: " + name + ", email: " + email + ", message: " + message);
			alert("Please fill out the required fields");
		} else {
			console.log("boi if you dont'");
			$.post("contact.php", {
				name1: name,
				email1: email,
				message1: message
			}, function(data) {
				console.log("ay lmao");
				$("#form")[0].reset();
			});
		}
	})
});