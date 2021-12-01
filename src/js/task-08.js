
const formEl = document.querySelector('.login-form');
const btnEl = formEl.lastElementChild;

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return window.alert("Please fill in all the fields!");

  }
console.log(`elements);

  event.currentTarget.reset();
}