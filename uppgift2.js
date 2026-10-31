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

  if(!comments){
    alert("Comments is required")
    return false;
  }

  if(Number(count.innerText)<=15){
    alert("Comment must be longer than 15 characters");
    return false;
  }
  return true;
}

function validateFullName() {
    const name = document.forms["feedback"]["namn"].value;

    if(!name){
      alert("Name is required")
      return false;
    }
      
    if (name.length<2) {
        alert("Name most contain more than one letter");
        return false;
    }
    return true;
}

function validateEmail() {
  const email = document.forms["feedback"]["email"].value;
  const firstDomain = email.split("@")[1];

  if(!email){
    alert("This field is required");
    return false;
  }

  if (!email.includes("@")) {
    alert("Email must contain @");
    return false;
  }
  if (!firstDomain || !firstDomain.includes(".")) {
    alert("Email must include a domain");
    return false;
  }

  const secondDomain = firstDomain.split(".")[1];

  if (!secondDomain || secondDomain.length < 1) {
    alert("Email must.se, .com osv");
    return false;
  }
  return true;
}

function validateTopic(){
  const topic = document.forms["feedback"]["topicofinteres"].value;
  if(!topic){
      alert("It is required to select a topic")
      return false;
    }
}

function showFieldError(){}

function clearFieldError(){}

function resetForm(){
  form.reset();
  count.innerText=0;
}