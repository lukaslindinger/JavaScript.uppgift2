const comments=document.getElementById("comments");
const count=document.getElementById("count");

comments.addEventListener("input",()=>{
  count.innerText=comments.value.length;
});

const form = document.getElementById('feedback');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (validateComments() && validateFullName() && validateEmail() && validateTopic()) {
    alert("Form accepted!");
    resetForm();
  }
});

function validateComments() {

  if(Number(count.innerText)<=15){
    alert("Comment must be longer than 15 characters");
    return false;
  }
  return true;
}

function validateFullName() {
    const name = document.forms["feedback"]["namn"].value;
    if (name.length<2) {
        alert("Name most contain more than one letter");
        return false;
    }
    return true;
}

function validateEmail(){}

function validateTopic(){}

function showFieldError(){}

function clearFieldError(){}

function resetForm(){
  form.reset();
  count.innerText=0;
}