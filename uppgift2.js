const comments=document.getElementById("comments");
const count=document.getElementById("count");
const namn =document.getElementById("namn");

comments.addEventListener("input",()=>{
  count.innerText=comments.value.length;

  if(Number(count.innerText)<=15){
    document.getElementById("count").style.color="red";
  }else{
     document.getElementById("count").style.color="green";
  }

});

const form = document.getElementById('feedback');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const validComments=validateComments();
  const validEmail=validateEmail();
  const validFullName=validateFullName();
  const validTopic=validateTopic();

  if (validComments && validFullName && validEmail && validTopic) {
    succesfullSubmit();
    setTimeout(function(){
      resetForm();
    },4000);
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
  clearFieldError("comments");
  return true;
}

function validateFullName() {

    if(!namn.value){
      showFieldError("namn", "Name is required");
      return false;
    }
      
    if (namn.value.length<2) {
        showFieldError("namn", "Name most contain more than one letter");
        return false;
    }
    clearFieldError("namn");
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
    showFieldError("email", "Email must include a domain");
    return false;
  }

  const secondDomain = firstDomain.split(".")[1];

  if (!secondDomain || secondDomain.length < 1) {
    showFieldError("email", "Email must contain .se, .com");
    return false;
  }
  clearFieldError("email");
  return true;
}

function validateTopic(){
  const topic = document.forms["feedback"]["topicofinterest"].value;
  if(!topic){
    showFieldError("topicofinterest", "It is required to select a topic");
    return false;
  }
  clearFieldError("topicofinterest");
  return true;  
}

function showFieldError(id, error){
  document.getElementById(id).style.border="2px solid red";
  document.getElementById(id + "-error").innerText=error;
}

function clearFieldError(id){
  document.getElementById(id).style.border="2px solid green";
  document.getElementById(id + "-error").innerText="";
}

function resetForm(){
  form.reset();
  count.innerText=0;
  document.querySelectorAll(".box").forEach(function(element){
    element.style.border="2px solid #ccc";
  })
  document.getElementById("status").innerText="";
  document.getElementById("count").style.color="#555";
}

function succesfullSubmit(){
  document.querySelectorAll(".box").forEach(function(element){
    element.style.border="2px solid green";
  })
  document.getElementById("status").innerText="Thanks for your feedback, " + namn.value;
}