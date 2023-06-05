const emailInput = document.querySelector('.emailInput');

emailInput.addEventListener('input', () => {
  const email = emailInput.value;

  // Regular expression to check if the email address is valid
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Check if the email address is valid
  if (regex.test(email)) {
    document.querySelector('.invalid::after').style.color = 'green';
  } else {
    document.querySelector('.invalid::after').style.color = 'red';
  }
});