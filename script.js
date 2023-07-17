const form = document.getElementById("signup-form");
const submitBtn = document.getElementById("submit-form");
const password = document.getElementById('password').value;
const passwordField = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password').value;
const confirmPasswordField = document.getElementById('confirm_password');

const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");

function formValidation(){

    // Name Field
     
        var name = document.getElementById('name').value;
        var nameField = document.getElementById('name');
        if(name === ""){
            nameField.style.borderColor = "red";
            nameField.classList.add("invalid");
            return false;
        }
        else if (/\d/.test(name)) {
            nameField.style.borderColor = "red";
            nameField.classList.add("invalid");
        }
        else if(name.length <=2){
            nameField.style.borderColor = "red";
            nameField.classList.add("invalid");
        }
        else{
            nameField.style.borderColor = "green";
            nameField.classList.remove("invalid");
            nameField.classList.add("valid");
        }


    // Email Field
     
        var email = document.getElementById('email').value;
        var emailField = document.getElementById('email');
        if(email === ""){
            emailField.style.borderColor = "red";
            emailField.classList.add("invalid");
            return false;
        }else{
            emailField.style.borderColor = "green";
            emailField.classList.remove("invalid");
            emailField.classList.add("valid");
        }


        function validateEmail(email) {

            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (email.match(validRegex)) {

                emailField.style.borderColor = "green";
                emailField.classList.remove("invalid");
                emailField.classList.add("valid");
                return true;

            } else {

                emailField.style.borderColor = "red";
                emailField.classList.add("invalid");
                return false;

            }

        }

        validateEmail(email);


    // Phonenumber Field
     
        var phonenumber = document.getElementById('phonenumber').value;
        var phonenumberField = document.getElementById('phonenumber');
        if(phonenumber === ""){
            phonenumberField.style.borderColor = "red";
            phonenumberField.classList.add("invalid");
            return false;
        }else{
            phonenumberField.style.borderColor = "green";
            phonenumberField.classList.remove("invalid");
            phonenumberField.classList.add("valid");
        }


    // Password Field

        if (letter.classList.contains("invalid") || capital.classList.contains("invalid") 
            || number.classList.contains("invalid") || length.classList.contains("invalid")) {
            passwordField.style.borderColor = "red";
            passwordField.classList.add("invalid");
        } else {
            passwordField.style.borderColor = "green";
            passwordField.classList.remove("invalid");
            passwordField.classList.add("valid");
        }
}    

function passwordFieldValidations() {

        // When the user clicks on the password field, show the message box
        passwordField.onclick = function() {
            document.getElementById("message").style.display = "block";
        }

    // When the user clicks outside of the password field, hide the message box
        passwordField.onblur = function() {
            document.getElementById("message").style.display = "none";
        }

    passwordField.onkeyup = function() {

    // Validate lowercase letters
        var lowerCaseLetters = /[a-z]/g;
        if(passwordField.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
        } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
        }

    // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if(passwordField.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
        } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
        }

    // Validate numbers
        var numbers = /[0-9]/g;
        if(passwordField.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
        } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
        }

    // Validate length
        if(passwordField.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
        }

        if  (letter.classList.contains("valid") && capital.classList.contains("valid") 
        && number.classList.contains("valid") && length.classList.contains("valid")) {
        passwordField.style.borderColor = "green";
        passwordField.classList.remove("invalid");
        passwordField.classList.add("valid");
        //return valid;
        }

    }

}

// Confirm Password Field

    form.addEventListener("submit", (e) => {
        var password1 = passwordField.value;
        var password2 = confirmPasswordField.value;
        if(password1 !== password2) {
            e.preventDefault();
            confirmPasswordField.style.borderColor = "red";
            confirmPasswordField.classList.add("invalid");
        } else { 
            confirmPasswordField.style.borderColor = "green";
            confirmPasswordField.classList.remove("invalid");
            confirmPasswordField.classList.add("valid");
        }
    });

submitBtn.addEventListener("click", formValidation);