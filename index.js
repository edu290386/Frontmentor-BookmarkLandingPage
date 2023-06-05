const emailInput = document.querySelector('.email-input');

emailInput.addEventListener('input', () => {
  if (emailInput.validity.valid) {
    document.querySelector('.email-input::after').style.color = 'green';
  } else {
    document.querySelector('.email-input::after').style.color = 'red';
  }
});