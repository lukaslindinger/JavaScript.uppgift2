const comments=document.getElementById("comments");
const count=document.getElementById("count");

comments.addEventListener("input",()=>{
  count.innerText=comments.value.length;
});

const form = document.getElementById('feedback');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const validComments=validateComments();
  const validEmail=validateEmail();
  const validFullName=validateFullName();
  const validTopic=validateTopic();

  if (validComments && validFullName && validEmail && validTopic) {
    alert("Form accepted!");
    resetForm();
  }
});

function validateComments() {

  if(!comments.value){
    showFieldError("comments", "Comments is required");
    return false;
  }

  if(Number(count.innerText)<=15){
    showFieldError("comments", "Comment must be longer than 15 characters");
    return false;
  }
  return true;
}

function validateFullName() {
    const name = document.forms["feedback"]["namn"].value;

    if(!name){
      showFieldError("namn", "Name is required");
      return false;
    }
      
    if (name.length<2) {
        showFieldError("namn", "Name most contain more than one letter");
        return false;
    }
    return true;
}

function validateEmail() {
  const email = document.forms["feedback"]["email"].value;
  const firstDomain = email.split("@")[1];

  if(!email){
    showFieldError("email", "This field is required");
    return false;
  }

  if (!email.includes("@")) {
    showFieldError("email", "Email must contain @");
    return false;
  }
  if (!firstDomain || !firstDomain.includes(".")) {
    alert("Email must include a domain");
    showFieldError("email", "Email must include a domain");
    return false;
  }

  const secondDomain = firstDomain.split(".")[1];

  if (!secondDomain || secondDomain.length < 1) {
    alert("Email must.se, .com osv");
    showFieldError("email", "Email must contain .se, .com");
    return false;
  }
  return true;
}

function validateTopic(){
  const topic = document.forms["feedback"]["topicofinterest"].value;
  if(!topic){
      showFieldError("topicofinterest", "It is required to select a topic");
      return false;
    }
}

function showFieldError(id, error){
  document.getElementById(id).style.border="1px solid red";
  document.getElementById(id + "-error").innerText=error;
}

function clearFieldError(){}

function resetForm(){
  form.reset();
  count.innerText=0;
}