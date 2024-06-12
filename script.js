document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Perform your form submission logic here (e.g., AJAX request)
    
    // Redirect back to the original page after form submission
    window.location.href = 'google.com';
  });