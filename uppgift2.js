
function validateFullName() {
    const name = document.forms["feedback"]["namn"].value;
    if (name.length<2) {
        alert("Name most contain more than one letter");
        return false;
    }
    return true;
}

function validateEmail() {}

function validateTopic(){}

function validateComments(){}

function showFieldError(){}

function clearFieldError(){}

function resetForm(){}