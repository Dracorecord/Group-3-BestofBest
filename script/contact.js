// ito yung 
// email: lalunasteakhouse@gmail.com
// pass: lalunasteak001


// Validation form 
const register = document.querySelector('#register');
const username = document.querySelector('#username');
const emailValid = document.querySelector('#email');
const contact = document.querySelector('#contact');

const usernameError = document.querySelector('#usernameError');
const emailError = document.querySelector('#emailError');
const contactError = document.querySelector('#contactError');

const validateUsername = () => {
    const userValue = username.value.trim();
    usernameError.innerText = "";
    if( !userValue ) {
        usernameError.innerText ='Name is required';
    }
    else if( userValue.length < 5 || userValue.length > 16) {
        usernameError.innerText = 'Name must be 5 to 16 characters';
    }
}

const validateEmail = () => {
    const emailValue = emailValid.value.trim();
    const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    emailError.innerText ="";

    if( !emailValue ) {
        emailError.innerText = 'Email is required';
    }
    else if ( !emailValidator.test(emailValue) ) {
        emailError.innerText = 'Please enter a valid email';
    }
}
const validateContact = () => {
    const contactValue = contact.value;
    const contactValidator = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    ;

    contactError.innerText = "";
    if ( !contactValue ) {
        contactError.innerText = 'Contact is required';
    }
    else if  (!contactValidator.test(contactValue)) {
        contactError.innerText = 'Enter a valid Contact';
    }
   
}


register.addEventListener(
    'submit',
    (e) => {
        e.preventDefault();

       validateUsername();
       validateEmail();
       validateContact();
    }
)




// sign up  for local storage
const registerForm = document.querySelector('#register');
const usernameForm = document.querySelector('#username');
const emailForm = document.querySelector('#email');
const contactForm = document.querySelector('#contact');
const messageForm = document.querySelector('#message');
const registerForms = [];


registerForm.addEventListener(
    'submit',
    (e) => {
        e.preventDefault();
        const registerForm = {  
            Name: usernameForm.value,
            Email: emailForm.value,
            Contact: contactForm.value,
            Message: messageForm.value
        }

        registerForms.push(registerForm);
        register.reset();

        
        const registersJSON = JSON.stringify( registerForms, null, 2 );
        localStorage.setItem("Help Sign Up", registersJSON);
    }
);
