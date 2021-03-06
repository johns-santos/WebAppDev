function addError(field) {
  if (field.previousElementSibling &&
    field.previousElementSibling.className === 'error') {
    // error message already showing
    return;
  }
  const error = document.createElement('div');
  error.innerHTML = '&#x26A1; '
    + field.dataset.errorMsg;
  error.className = 'error';
  field.parentNode.insertBefore(error, field);
}

function removeError(field) {
  if (field.previousElementSibling &&
    field.previousElementSibling.className === 'error') {
    field.previousElementSibling.remove();
  }
}

function checkField(field) {
  if (!field.checkValidity()) {
    addError(field);
  } else {
    removeError(field);
  }
}

function checkSelect(field) {
  if ( field.selectedIndex === 0 ) {
    field.setCustomValidity('Invalid');
    addError(field);
  } else {
    field.setCustomValidity('');
    removeError(field);
  }
}

window.addEventListener('load', function(e) {
  /*
    Add validation for the following fields:
     * user name * email * phone 
     * container * flavor * requests * terms
    
    Each field should be validated when its value is changed.
    All fields should be validated when form is submitted.
    Be sure to prevent the form from submitting if any field
     is invalid.
  */

  const form  = document.getElementById('ice-cream-form'); 
  const username = form.username;
  username.dataset.errorMsg = 'User name must be between 8 and 25 characters.'
  
  const email = form.email;
  email.dataset.errorMsg = 'Invalid Email';
  
  const phone = form.phone;
  phone.dataset.errorMsg = 'Use the following formate: 123-456-7890.'
  
  const container = form.container[0];
  container.dataset.errorMsg = "Please select a container."

  const flavor = form.flavor;
  flavor.dataset.errorMsg = "Please select a flavor."

  const requests = form.requests;
  requests.dataset.errorMsg = 'Your comment must be between ' +
  requests.minLength + ' and ' + requests.maxLength + 
  ' characters.';

  const terms = form.terms;
  terms.dataset.errorMsg = 'You must accept the terms.';


//  * username validation check
username.addEventListener('input', function(e){
    checkField(username)
  });

  // * email validation check
  email.addEventListener('input', function(e){
    checkField(email);

  });

  // * phone validation check
  phone.addEventListener('input', function(e){
    checkField(phone);
  });

  for (radio of form.container) {
  container.addEventListener('click', function(e){
    checkField(container)
  });
}

flavor.addEventListener('change', function(e){
  checkSelect(flavor);
})

requests.addEventListener('input', function(e){
  checkField(requests)
})

terms.addEventListener("click", function(e) {
  checkField(terms);
});


  // If any form error found on SUBMIT - generate ALERT
  form.addEventListener('submit', function(e){
    checkField(username);
    checkField(email);
    checkField(phone);
    checkField(container);
    checkSelect(flavor);
    checkField(requests);
    checkField(terms);
    
  if(!form.checkValidity()){
    e.preventDefault();
    alert('Pleaes fix form errors.');
  }
  });


});