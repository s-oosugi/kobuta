// ================================================
// KOBUTA PHOTO STUDIO - JavaScript
// ================================================

// DOM Elements
const header = document.getElementById('header');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const nav = document.getElementById('nav');
const faqItems = document.querySelectorAll('.faq-item');

// ================================================
// Header Scroll Effect
// ================================================
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ================================================
// Mobile Menu Toggle
// ================================================
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
  });
}

// Close menu when a link is clicked
const navLinks = nav.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    if (mobileMenuToggle) {
      mobileMenuToggle.classList.remove('active');
    }
  });
});

// ================================================
// FAQ Accordion
// ================================================
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    // Close other open items
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
      }
    });

    // Toggle clicked item
    item.classList.toggle('active');
  });
});

// ================================================
// Scroll Animation (Intersection Observer)
// ================================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      // Optional: Stop observing once revealed
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements with .scroll-reveal class
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
scrollRevealElements.forEach(element => {
  observer.observe(element);
});

// ================================================
// Smooth Scroll
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ================================================
// Page Load Animation
// ================================================
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.8s ease';
    document.body.style.opacity = '1';
  }, 100);
});
