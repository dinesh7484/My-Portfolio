document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const clearButton = document.getElementById('clearForm');
    const formMessage = document.getElementById('form-message');

    if (clearButton && contactForm) {
        clearButton.addEventListener('click', function() {
            // Reset all form fields
            contactForm.reset();
            
            // Additional manual reset for complete clearance
            document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(field => {
                field.value = '';
                field.classList.remove('filled');
            });
            
            // Show success message
            if (formMessage) {
                formMessage.textContent = 'Form cleared successfully!';
                formMessage.className = 'success';
                formMessage.style.display = 'block';
                
                // Hide message after 2 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 2000);
            }
            
            console.log('Form cleared'); // Optional debug log
        });
    }
});