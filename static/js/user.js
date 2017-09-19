$(function() {
	$('.fa-reset').hide();
	$('.fa-forgot').hide();
	$('.fa-login').hide();

	$('.btn-login').click(function() {
		$('.btn-login').hide();
		$('.fa-login').show();
		login_data = {
			"username":$("#username-input-login").val(), 
			"password":$("#password-input-login").val()
		}

		$.ajax({
				type: "POST",
				url: "/auth-login",
				data: login_data,
				success: function(data) {
					if (data.result == 'success') {
						window.location.href = "/";
					} else {
						alert(data.err_msg)
						$('.fa-login').hide();
						$('.btn-login').show();
					}
				},
				dataType: 'json'
			})
	});

	$('.btn-forgot').click(function() {
		$('.btn-forgot').hide();
		$('.fa-forgot').show();
		forgot_data = {
			"email":$("#recovery-input-forgot").val()
		}

		console.log(forgot_data);
		$.ajax({
				type: "POST",
				url: "/auth_recover",
				data: forgot_data,
				success: function(data) {
					if (data.result == 'success') {
						$("#reset-link").text("Please send the following link to the user: " + data.reset_link);
						// alert("We have sent a message to " + data.email);
						// window.location.href = "/";
						$('.fa-forgot').hide();
						$('.btn-forgot').show();
					} else {
						alert(data.msg)
						$('.fa-forgot').hide();
						$('.btn-forgot').show();
					}
					console.log(data);
				},
				dataType: 'json'
			})
	});


	$('.btn-reset').click(function() {
			$('.btn-reset').hide();
			$('.fa-reset').show();
			reset_data = {
				"reset_id":$("#reset-input-reset").val(), 
				"password":$("#password-input-reset").val(), 
				"password2":$("#password2-input-reset").val()
			}

			console.log(reset_data);
			$.ajax({
					type: "POST",
					url: "/reset_password",
					data: reset_data,
					success: function(data) {
						if (data.result == 'success') {
							// $("#reset-link").text("Please send the following link to the user: " + data.reset_link);
							alert("We have reset your password. You can now sign in with your new password.")
							window.location.href = "/";
						} else {
							alert(data.msg)
							$('.fa-reset').hide();
							$('.btn-reset').show();
						}
						console.log(data);
					},
					dataType: 'json'
				})
		});

});