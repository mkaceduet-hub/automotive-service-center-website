const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(bookingForm);
  const customerName = String(formData.get('name') || '').trim();
  const feedback = bookingForm.querySelector('.form-feedback');

  if (!customerName) {
    feedback.textContent = 'Please enter your name to continue.';
    return;
  }

  feedback.textContent = `Thanks, ${customerName}! This demo form is ready to connect to a booking service.`;
  bookingForm.reset();
});