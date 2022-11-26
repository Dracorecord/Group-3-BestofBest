function validate() {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;

	if(username == 'luna' && password == 'sangre')
	{
		alert('Login Successfuly');
	} else {
		alert ('login failed');
	}
}

