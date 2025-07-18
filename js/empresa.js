// empresa.js

document.addEventListener('DOMContentLoaded', () => {
     const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Solo anima una vez
               }
          });
     }, {
          threshold: 0.15
     });

     const sections = document.querySelectorAll('.animate-section');
     sections.forEach(section => observer.observe(section));
});
