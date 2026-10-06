// Qinyue Global - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    
    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
  
  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
      const item = this.parentElement;
      const wasOpen = item.classList.contains('open');
      
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      
      // Open clicked if it was closed
      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });
  
  // Form submission handling (client-side demo)
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const required = quoteForm.querySelectorAll('[required]');
      let valid = true;
      required.forEach(field => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#ef4444';
        } else {
          field.style.borderColor = '';
        }
      });
      
      if (!valid) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Show success message
      const formContainer = quoteForm.parentElement;
      formContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
          <div style="width: 64px; height: 64px; background: #22c55e; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: white; font-size: 2rem;">✓</div>
          <h2 style="margin-bottom: 1rem;">Thank you for your inquiry</h2>
          <p style="color: #404040; max-width: 480px; margin: 0 auto 1.5rem;">Your project details have been received. Our team will review your requirements and get back to you.</p>
          <a href="/" class="btn btn-primary">Back to Home</a>
        </div>
      `;
    });
  }
  
  // Track CTA clicks (placeholder for analytics)
  document.querySelectorAll('[data-track]').forEach(el => {
    el.addEventListener('click', function() {
      const event = this.getAttribute('data-track');
      console.log('Track event:', event);
      // Integrate with GA: gtag('event', event);
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});