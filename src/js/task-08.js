
const formEl = document.querySelector('.login-form');
const btnEl = formEl.lastElementChild;

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  
const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = { email, password }

  if (email === "" || password === "") {

    return window.alert("Please, fill in all the fields!");

  }
  console.log(formData);
  
   event.currentTarget.reset();
  }
 