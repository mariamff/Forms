// Name: Mariam Faragalla
// Date: Oct 8, 2023
// Purpose: Validate forms using JS


// Adding Eventlistener so the DOM will be fully loaded before executing my javascript
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form, input field, and error message element
    let form = document.getElementById('myForm');
    let inputField = document.getElementById('inputField');
    let errorElement = document.getElementById('err-message');

    // Function to validate input based on a regular expression
    function isValidInput(inputValue) {
        let alphanumeric = /^[0-9a-zA-Z]+$/;
        return alphanumeric.test(inputValue);
    }

    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {

        // Retrieve the input value
        let inputValue = inputField.value;

        // Check if the input value matches the pattern
        if (isValidInput(inputValue)) {
            // If valid, display a confirmation message
            errorElement.textContent = 'Your input is valid! Form have been submitted';
        } else {
            // Prevent the default form submission 
            event.preventDefault();
            // If invalid, display an error message
            errorElement.textContent = 'Sorry! invalid input! Form cannot be submitted! Input must be alphanumeric!';
            
        
        }
    });
});
