// Limitación de Velocidad - JavaScript Interactivo

document.addEventListener('DOMContentLoaded', function () {

     // Contador animado para estadísticas de soporte
     function animateCounter(element, target, duration = 2000) {
          const start = 0;
          const startTime = performance.now();

          function updateCounter(currentTime) {
               const elapsed = currentTime - startTime;
               const progress = Math.min(elapsed / duration, 1);

               // Easing function para suavizar la animación
               const easeOutQuart = 1 - Math.pow(1 - progress, 4);
               const current = Math.floor(start + (target - start) * easeOutQuart);

               element.textContent = current + (element.dataset.suffix || '');

               if (progress < 1) {
                    requestAnimationFrame(updateCounter);
               }
          }

          requestAnimationFrame(updateCounter);
     }

     // Observer para activar animaciones cuando entren en viewport
     const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
     };

     const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    // Animar entrada de tarjetas
                    if (entry.target.classList.contains('card')) {
                         entry.target.style.animationDelay = Math.random() * 0.5 + 's';
                         entry.target.classList.add('animate-in');
                    }

                    // Activar contadores si existen
                    const counters = entry.target.querySelectorAll('[data-count]');
                    counters.forEach(counter => {
                         if (!counter.classList.contains('counted')) {
                              counter.classList.add('counted');
                              const target = parseInt(counter.dataset.count);
                              animateCounter(counter, target);
                         }
                    });
               }
          });
     }, observerOptions);

     // Observar todas las tarjetas y elementos con contadores
     document.querySelectorAll('.card, [data-count]').forEach(el => {
          observer.observe(el);
     });

     // Efecto parallax suave para elementos decorativos
     let ticking = false;

     function updateParallax() {
          const scrolled = window.pageYOffset;
          const rate = scrolled * -0.5;

          // Mover partículas del hero
          const particles = document.querySelectorAll('.limitacion-particle');
          particles.forEach((particle, index) => {
               const speed = 0.2 + (index * 0.1);
               particle.style.transform = `translateY(${scrolled * speed}px)`;
          });

          // Mover elementos decorativos del contacto
          const decorations = document.querySelectorAll('.contact-decorations > div');
          decorations.forEach((decoration, index) => {
               const speed = 0.1 + (index * 0.05);
               decoration.style.transform = `translateY(${scrolled * speed}px)`;
          });

          ticking = false;
     }

     function requestTick() {
          if (!ticking) {
               requestAnimationFrame(updateParallax);
               ticking = true;
          }
     }

     // Throttle scroll events para mejor performance
     window.addEventListener('scroll', requestTick, { passive: true });

     // Hover effects mejorados para tarjetas
     document.querySelectorAll('.factor-card, .user-factor-card').forEach(card => {
          card.addEventListener('mouseenter', function () {
               this.style.transform = 'translateY(-10px) scale(1.02)';
               this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
          });

          card.addEventListener('mouseleave', function () {
               this.style.transform = 'translateY(0) scale(1)';
          });
     });

     // Efecto de ondas en los botones de contacto
     document.querySelectorAll('.contact-btn').forEach(button => {
          button.addEventListener('click', function (e) {
               const ripple = document.createElement('span');
               const rect = this.getBoundingClientRect();
               const size = Math.max(rect.width, rect.height);
               const x = e.clientX - rect.left - size / 2;
               const y = e.clientY - rect.top - size / 2;

               ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                transform: scale(0);
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                animation: ripple 0.6s ease-out;
            `;

               this.appendChild(ripple);

               setTimeout(() => {
                    ripple.remove();
               }, 600);
          });
     });

     // Smooth scroll para anchor links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
               e.preventDefault();
               const target = document.querySelector(this.getAttribute('href'));
               if (target) {
                    target.scrollIntoView({
                         behavior: 'smooth',
                         block: 'start'
                    });
               }
          });
     });

     // Typing effect para el título principal (opcional)
     function typeWriter(element, text, speed = 100) {
          let i = 0;
          element.innerHTML = '';

          function type() {
               if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
               }
          }

          type();
     }

     // Lazy loading para imágenes si las hay
     if ('IntersectionObserver' in window) {
          const imageObserver = new IntersectionObserver((entries, observer) => {
               entries.forEach(entry => {
                    if (entry.isIntersecting) {
                         const img = entry.target;
                         img.src = img.dataset.src;
                         img.classList.remove('lazy');
                         imageObserver.unobserve(img);
                    }
               });
          });

          document.querySelectorAll('img[data-src]').forEach(img => {
               imageObserver.observe(img);
          });
     }

     // Añadir estilos CSS dinámicos para animaciones
     const style = document.createElement('style');
     style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .pulse-ring {
            opacity: 0.7;
        }
        
        .wifi-waves div {
            opacity: 0.6;
        }
    `;
     document.head.appendChild(style);

     // Performance monitoring
     if (window.performance) {
          window.addEventListener('load', () => {
               setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
               }, 0);
          });
     }
});

// Función utilitaria para debounce
function debounce(func, wait) {
     let timeout;
     return function executedFunction(...args) {
          const later = () => {
               clearTimeout(timeout);
               func(...args);
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
     };
}

// Función utilitaria para throttle
function throttle(func, limit) {
     let inThrottle;
     return function () {
          const args = arguments;
          const context = this;
          if (!inThrottle) {
               func.apply(context, args);
               inThrottle = true;
               setTimeout(() => inThrottle = false, limit);
          }
     };
}
