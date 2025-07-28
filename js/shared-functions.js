/*
 * JAVASCRIPT COMPARTIDO OPTIMIZADO - SH COMPANY SAS
 * Funcionalidades comunes para mejorar el rendimiento
 */

// LAZY LOADING DE IMÁGENES
document.addEventListener('DOMContentLoaded', function () {
     // Agregar lazy loading a todas las imágenes que no lo tengan
     const images = document.querySelectorAll('img:not([loading])');
     images.forEach(img => {
          img.setAttribute('loading', 'lazy');
     });
});

// OPTIMIZACIÓN DE BOOTSTRAP
document.addEventListener('DOMContentLoaded', function () {
     // Inicializar tooltips si existen
     const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
     tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl);
     });

     // Inicializar popovers si existen
     const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
     popoverTriggerList.map(function (popoverTriggerEl) {
          return new bootstrap.Popover(popoverTriggerEl);
     });
});

// SMOOTH SCROLL OPTIMIZADO
document.addEventListener('DOMContentLoaded', function () {
     // Mejorar smooth scroll para enlaces internos
     const links = document.querySelectorAll('a[href^="#"]');
     links.forEach(link => {
          link.addEventListener('click', function (e) {
               const targetId = this.getAttribute('href');
               if (targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                         e.preventDefault();
                         targetElement.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start'
                         });
                    }
               }
          });
     });
});

// OPTIMIZACIÓN DE CARGA DE VIDEOS
document.addEventListener('DOMContentLoaded', function () {
     const videos = document.querySelectorAll('video');
     videos.forEach(video => {
          // Pausar videos que no están visibles
          const observer = new IntersectionObserver((entries) => {
               entries.forEach(entry => {
                    if (entry.isIntersecting) {
                         video.play().catch(() => {
                              // Si el autoplay falla, no hacer nada
                         });
                    } else {
                         video.pause();
                    }
               });
          });
          observer.observe(video);
     });
});

// PRELOAD DE PÁGINAS IMPORTANTES
document.addEventListener('DOMContentLoaded', function () {
     const importantLinks = [
          '/inicio',
          '/planes',
          '/empresa',
          '/soporte-tecnico'
     ];

     // Preload al hacer hover
     const links = document.querySelectorAll('a[href]');
     links.forEach(link => {
          const href = link.getAttribute('href');
          if (importantLinks.includes(href)) {
               link.addEventListener('mouseenter', function () {
                    const linkElement = document.createElement('link');
                    linkElement.rel = 'prefetch';
                    linkElement.href = href;
                    document.head.appendChild(linkElement);
               }, { once: true });
          }
     });
});

// OPTIMIZACIÓN DE FORMULARIOS
document.addEventListener('DOMContentLoaded', function () {
     const forms = document.querySelectorAll('form');
     forms.forEach(form => {
          form.addEventListener('submit', function (e) {
               e.preventDefault();

               // Recopilar datos del formulario
               const formData = new FormData(form);
               const data = Object.fromEntries(formData);

               // Crear mensaje para WhatsApp si es el formulario de contacto
               if (form.querySelector('#mensaje')) {
                    const mensaje = `Hola, me gustaría contactarlos:
        
Nombre: ${data.nombre || 'No especificado'}
Teléfono: ${data.telefono || 'No especificado'}
Correo: ${data.correo || 'No especificado'}
Mensaje: ${data.mensaje || 'No especificado'}`;

                    const whatsappUrl = `https://wa.me/573148686245?text=${encodeURIComponent(mensaje)}`;
                    window.open(whatsappUrl, '_blank');
               }
          });
     });
});

// ANIMACIONES AL SCROLL
document.addEventListener('DOMContentLoaded', function () {
     const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
     };

     const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
               }
          });
     }, observerOptions);

     // Aplicar a secciones principales
     const sections = document.querySelectorAll('section, .card, .plan-card, .cobertura-card');
     sections.forEach(section => {
          observer.observe(section);
     });
});

// OPTIMIZACIÓN DE CARGA DE RECURSOS
document.addEventListener('DOMContentLoaded', function () {
     // Cargar CSS no crítico de forma asíncrona
     const nonCriticalCSS = [
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
     ];

     nonCriticalCSS.forEach(cssUrl => {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = cssUrl;
          link.media = 'print';
          link.onload = function () {
               this.media = 'all';
          };
          document.head.appendChild(link);
     });
});

// CACHE SIMPLE DE NAVEGACIÓN
const NavigationCache = {
     cache: new Map(),

     get: function (url) {
          return this.cache.get(url);
     },

     set: function (url, data) {
          if (this.cache.size >= 10) {
               const firstKey = this.cache.keys().next().value;
               this.cache.delete(firstKey);
          }
          this.cache.set(url, data);
     }
};

// MANEJO DE ERRORES DE CARGA
window.addEventListener('error', function (e) {
     if (e.target.tagName === 'IMG') {
          // Reemplazar imágenes rotas con placeholder
          e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="%23f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999">Imagen no disponible</text></svg>';
     }
});

// PERFORMANCE MONITORING SIMPLE
if ('performance' in window) {
     window.addEventListener('load', function () {
          setTimeout(function () {
               const perfData = performance.getEntriesByType('navigation')[0];
               console.log('Tiempo de carga:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
          }, 0);
     });
}
