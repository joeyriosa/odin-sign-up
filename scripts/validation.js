const form = document.querySelector('form');
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", (event) => {
    if (!validateMatchingPasswords()) {
        event.preventDefault();
    } 
    else if (form.checkValidity()) {
        form.submit();
    }
});

function validateMatchingPasswords() {
    const passwordBox = document.getElementById('password');
    const confirmPasswordBox = document.getElementById('confirm-password');
    const error1 = document.getElementById('error-password');
    const error2 = document.getElementById('error-confirm-password');
    
    if (passwordBox.value !== confirmPasswordBox.value) {
        error1.textContent = 'Password and Confirm Password should match.';
        error2.textContent = 'Password and Confirm Password should match.';
        return false;
    }
    else {
        error1.textContent = "";
        error2.textContent = "";
        return true;
    }
}