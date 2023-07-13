const form = document.querySelector("form")
const set_default_msg = document.querySelector("span.error-message");

function formValidation() {
    let text_input = document.querySelectorAll("input:not(#submit), select, textarea");

    for (let i = 0; i < text_input.length; i++) {
        if (text_input[i].validity.valid) {
            set_default_msg.textContent = "";
        } else {
            showError(text_input[i])
        }
    }
}

function showError(element) {

    let element_name;

    if(element.name === "rd-age-group") {
        element_name = "div.age-group + span.error-message"
    } else if (element.id === "#textarea") {
        element_name = `#${element.id} span.error-message` 
    } else {
        element_name = `#${element.id} + span.error-message` 
    }

    const errorMessage = document.querySelector(element_name) // get the error message element

    if(element.validity.valueMissing) { // check for empty input field
        if(element.id === "dropdown" || element.name === "rd-age-group") {
            errorMessage.textContent = "Please select one of the answer"
        } else {
            errorMessage.textContent = "You must fill in the blank field.";
        }
    }
}

form.addEventListener("submit", (Event) => {
    Event.preventDefault() // prevents the page to reload.
    formValidation()
})