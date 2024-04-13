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
              alert('Remplissez tout les champs');
            } else {
              // Form submission code here
              console.log('Form submitted successfully.');
            }
          });
    
       
           function validatePassword(password) {
          // Check if password is at least 8 characters long
          if (password.length < 8) {
              return false;
          }
      
          // Check if password contains at least one lowercase letter
          if (!/[a-z]/.test(password)) {
              return false;
          }
      
          // Check if password contains at least one uppercase letter
          if (!/[A-Z]/.test(password)) {
              return false;
          }
      
          // Check if password contains at least one number
          if (!/[0-9]/.test(password)) {
              return false;
          }
      
          // If all checks pass, the password is valid
          return true;
      } 
      
      document.getElementById('myForm').addEventListener('submit', function(event) {
        var password = document.getElementById('password').value;
        var errorMessage = document.getElementById('errorMessage');
        if (!validatePassword(password)) {
            event.preventDefault();
            errorMessage.innerText = 'The password must be at least 8 characters long, and contain at least one lowercase letter, one uppercase letter, and one number.';
        } else {
            errorMessage.innerText = '';
        }
    });
    
  
     
