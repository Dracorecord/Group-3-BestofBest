function validate() {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;

	if(username == 'luna' && password == 'sangre')
	{
		alert ('login Success');
		window.location.href = "./home.html";
	} else {
		alert ('login failed');
	}
}

