
<script>
document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll('.form input, .form select');
  let isValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  });

  if (!isValid) {
    alert('Please fill in all fields.');
  } else {
    // Form submission code here
    console.log('Form submitted successfully.');
  }
});
</script>