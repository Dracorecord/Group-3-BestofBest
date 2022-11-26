function validate() {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;

	if(username == 'luna' && password == 'sangre')
	{
		indow.location.replace("./home.html");
	} else {
		alert ('login failed');
	}
}

