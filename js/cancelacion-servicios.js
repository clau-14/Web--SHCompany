// Cancelación de Servicios - JavaScript

document.addEventListener('DOMContentLoaded', function () {

     // Inicializar tooltips de Bootstrap
     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
     var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl);
     });

     // Smooth scroll para links internos
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

     // Animación para las cards cuando entran en viewport
     const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
     };

     const observer = new IntersectionObserver(function (entries) {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
               }
          });
     }, observerOptions);

     // Observar todas las cards
     document.querySelectorAll('.card').forEach(card => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          card.style.transition = 'all 0.6s ease';
          observer.observe(card);
     });

     // Efecto de hover para las cards de servicios
     document.querySelectorAll('.card').forEach(card => {
          card.addEventListener('mouseenter', function () {
               this.style.transform = 'translateY(-5px)';
               this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
          });

          card.addEventListener('mouseleave', function () {
               this.style.transform = 'translateY(0)';
               this.style.boxShadow = '';
          });
     });

     // Animación de conteo para números importantes
     function animateCounter(element, start, end, duration) {
          let startTimestamp = null;
          const step = (timestamp) => {
               if (!startTimestamp) startTimestamp = timestamp;
               const progress = Math.min((timestamp - startTimestamp) / duration, 1);
               const current = Math.floor(progress * (end - start) + start);
               element.textContent = current;
               if (progress < 1) {
                    window.requestAnimationFrame(step);
               }
          };
          window.requestAnimationFrame(step);
     }

     // Activar animaciones de conteo cuando sea visible
     const counterObserver = new IntersectionObserver(function (entries) {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    const counter = entry.target;
                    const finalNumber = parseInt(counter.dataset.count);
                    animateCounter(counter, 0, finalNumber, 2000);
                    counterObserver.unobserve(counter);
               }
          });
     });

     document.querySelectorAll('[data-count]').forEach(counter => {
          counterObserver.observe(counter);
     });

     // Efecto parallax suave para las partículas
     window.addEventListener('scroll', function () {
          const scrolled = window.pageYOffset;
          const parallax = document.querySelector('.hero-particles');
          if (parallax) {
               const speed = scrolled * 0.5;
               parallax.style.transform = `translateY(${speed}px)`;
          }
     });

     // Funcionalidad para los accordions
     const accordionButtons = document.querySelectorAll('.accordion-button');
     accordionButtons.forEach(button => {
          button.addEventListener('click', function () {
               const icon = this.querySelector('i');
               if (icon) {
                    setTimeout(() => {
                         if (this.classList.contains('collapsed')) {
                              icon.style.transform = 'rotate(0deg)';
                         } else {
                              icon.style.transform = 'rotate(180deg)';
                         }
                    }, 50);
               }
          });
     });

     // Mensaje de confirmación para links externos
     const externalLinks = document.querySelectorAll('a[target="_blank"]');
     externalLinks.forEach(link => {
          link.addEventListener('click', function (e) {
               if (this.href.includes('wa.me')) {
                    // Para WhatsApp, mostrar mensaje amigable
                    const confirmed = confirm('¿Desea abrir WhatsApp para iniciar el trámite?');
                    if (!confirmed) {
                         e.preventDefault();
                    }
               }
          });
     });

     // Resaltar el elemento actual en la navegación
     const currentPage = window.location.pathname.split('/').pop();
     const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
     navLinks.forEach(link => {
          if (link.getAttribute('href') === currentPage) {
               link.classList.add('active');
          }
     });

     // Agregar funcionalidad de loading para formularios
     const forms = document.querySelectorAll('form');
     forms.forEach(form => {
          form.addEventListener('submit', function () {
               const submitBtn = this.querySelector('button[type="submit"]');
               if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Enviando...';
               }
          });
     });

     // Notificación toast personalizada
     function showToast(message, type = 'info') {
          const toast = document.createElement('div');
          toast.className = `toast align-items-center text-bg-${type} border-0`;
          toast.setAttribute('role', 'alert');
          toast.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        `;

          // Agregar al contenedor de toasts o crear uno
          let toastContainer = document.querySelector('.toast-container');
          if (!toastContainer) {
               toastContainer = document.createElement('div');
               toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
               document.body.appendChild(toastContainer);
          }

          toastContainer.appendChild(toast);
          const bsToast = new bootstrap.Toast(toast);
          bsToast.show();

          // Remover después de mostrar
          toast.addEventListener('hidden.bs.toast', () => {
               toast.remove();
          });
     }

     // Detectar scroll para efectos adicionales
     let lastScrollTop = 0;
     window.addEventListener('scroll', function () {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          // Efecto para la navbar (si necesario)
          const navbar = document.querySelector('.navbar');
          if (scrollTop > 100) {
               navbar.classList.add('scrolled');
          } else {
               navbar.classList.remove('scrolled');
          }

          lastScrollTop = scrollTop;
     });

     console.log('Cancelación de Servicios - Scripts cargados correctamente');
});

// Función global para copiar texto al portapapeles
function copyToClipboard(text) {
     navigator.clipboard.writeText(text).then(function () {
          showToast('Texto copiado al portapapeles', 'success');
     }, function (err) {
          console.error('Error al copiar: ', err);
          showToast('Error al copiar el texto', 'danger');
     });
}

// Función para validar formularios
function validateForm(formElement) {
     const inputs = formElement.querySelectorAll('input[required], textarea[required]');
     let isValid = true;

     inputs.forEach(input => {
          if (!input.value.trim()) {
               input.classList.add('is-invalid');
               isValid = false;
          } else {
               input.classList.remove('is-invalid');
               input.classList.add('is-valid');
          }
     });

     return isValid;
}
