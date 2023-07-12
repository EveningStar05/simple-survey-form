// pseudocode:
// check for empty input before submitting.
// then check one by one input type

function formValidation() {
    const form = document.getElementById("survey-form") // get the form
    const input = document.querySelectorAll("input"); // get all input
    const errorMessage = document.getElementsByClassName("error-message") // get the error message element

    // check for empty input
    form.addEventListener("submit", (Event) => {
        for(let i = o; i < input.length; i++) {
            // incase if there is error, if the field is valid
            // then we want to reset the error message
            if (input[i].validity.valid) {
                errorMessage.textContent = "";
                errorMessage.className = "error-message"
            } else {
                showError(input[i])
            }
        }
    })
}

function showError(element) {
    if(element.validity.valueMissing) {
        errorMessage.textContent = "You must fill in the input field!"
    }
}

formValidation()