function validate() {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;

	if(username == 'luna' && password == 'sangre')
	{
		Window.location.replace("./home.html");
	} else {
		alert ('login failed');
	}
}

