// Protección Infantil - JavaScript
document.addEventListener('DOMContentLoaded', function () {

     // Elementos principales
     const protectionShield = document.querySelector('.protection-shield');
     const lawCards = document.querySelectorAll('.law-card');
     const commitmentCards = document.querySelectorAll('.commitment-card');
     const statNumbers = document.querySelectorAll('.stat-number');
     const documentLinks = document.querySelectorAll('.document-link');
     const reportButtons = document.querySelectorAll('.report-button');

     // Configuración de animaciones
     const animationConfig = {
          duration: 600,
          easing: 'ease-out',
          threshold: 0.1
     };

     // Intersection Observer para animaciones de entrada
     const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
     };

     // Observer para las tarjetas de leyes
     const lawCardsObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry, index) => {
               if (entry.isIntersecting) {
                    setTimeout(() => {
                         entry.target.style.opacity = '1';
                         entry.target.style.transform = 'translateY(0)';
                         entry.target.style.transition = `all ${animationConfig.duration}ms ${animationConfig.easing}`;
                    }, index * 100);
               }
          });
     }, observerOptions);

     // Observer para las tarjetas de compromisos
     const commitmentCardsObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry, index) => {
               if (entry.isIntersecting) {
                    setTimeout(() => {
                         entry.target.style.opacity = '1';
                         entry.target.style.transform = 'translateY(0)';
                         entry.target.style.transition = `all ${animationConfig.duration}ms ${animationConfig.easing}`;
                    }, index * 150);
               }
          });
     }, observerOptions);

     // Observer para contadores estadísticos
     const statsObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    animateStatNumber(entry.target);
               }
          });
     }, observerOptions);

     // Aplicar observers
     lawCards.forEach(card => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)';
          lawCardsObserver.observe(card);
     });

     commitmentCards.forEach(card => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)';
          commitmentCardsObserver.observe(card);
     });

     statNumbers.forEach(stat => {
          statsObserver.observe(stat);
     });

     // Función para animar números estadísticos
     function animateStatNumber(element) {
          const text = element.textContent;
          const isPercentage = text.includes('%');
          const hasPlus = text.includes('+');
          const isZero = text === '0';
          const is24_7 = text === '24/7';

          if (is24_7) {
               // Animación especial para 24/7
               element.style.opacity = '0';
               setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                         element.style.transform = 'scale(1)';
                    }, 200);
               }, 100);
               return;
          }

          let finalNumber;
          let suffix = '';

          if (isPercentage) {
               finalNumber = parseInt(text);
               suffix = '%';
          } else if (hasPlus) {
               finalNumber = parseInt(text.replace('k+', '')) * 1000;
               suffix = '+';
          } else if (isZero) {
               finalNumber = 0;
          } else {
               finalNumber = parseInt(text) || 0;
          }

          // Reiniciar el contador
          element.textContent = '0';

          // Configuración de la animación
          const duration = 2000;
          const startTime = performance.now();

          function updateCounter(currentTime) {
               const elapsed = currentTime - startTime;
               const progress = Math.min(elapsed / duration, 1);

               // Función de easing
               const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

               if (hasPlus) {
                    const currentValue = Math.floor(easeOutExpo * (finalNumber / 1000));
                    element.textContent = currentValue + 'k' + suffix;
               } else {
                    const currentValue = Math.floor(easeOutExpo * finalNumber);
                    element.textContent = currentValue + suffix;
               }

               if (progress < 1) {
                    requestAnimationFrame(updateCounter);
               } else {
                    // Efecto de "bounce" al completar
                    element.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                         element.style.transform = 'scale(1)';
                    }, 200);
               }
          }

          requestAnimationFrame(updateCounter);
     }

     // Efectos de hover mejorados para el escudo de protección
     if (protectionShield) {
          protectionShield.addEventListener('mouseenter', function () {
               this.style.transform = 'scale(1.1)';
               this.style.boxShadow = '0 0 50px rgba(255, 255, 255, 0.5)';
          });

          protectionShield.addEventListener('mouseleave', function () {
               this.style.transform = 'scale(1)';
               this.style.boxShadow = '';
          });
     }

     // Efectos de sonido simulados para botones importantes
     function playClickSound() {
          // Crear un contexto de audio simple
          if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
               const audioContext = new (AudioContext || webkitAudioContext)();
               const oscillator = audioContext.createOscillator();
               const gainNode = audioContext.createGain();

               oscillator.connect(gainNode);
               gainNode.connect(audioContext.destination);

               oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
               oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);

               gainNode.gain.setValueAtTime(0, audioContext.currentTime);
               gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
               gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

               oscillator.start(audioContext.currentTime);
               oscillator.stop(audioContext.currentTime + 0.1);
          }
     }

     // Añadir efectos de click a botones de reporte
     reportButtons.forEach(button => {
          button.addEventListener('click', function (e) {
               // Efecto visual de click
               this.style.transform = 'scale(0.95)';
               setTimeout(() => {
                    this.style.transform = '';
               }, 150);

               // Efecto de sonido
               playClickSound();

               // Confirmación para enlaces externos
               if (this.hasAttribute('href') && this.getAttribute('href').startsWith('http')) {
                    const confirmMessage = '¿Deseas abrir este enlace externo para realizar la denuncia?';
                    if (!confirm(confirmMessage)) {
                         e.preventDefault();
                    }
               }
          });
     });

     // Efectos de hover para enlaces de documentos
     documentLinks.forEach(link => {
          link.addEventListener('mouseenter', function () {
               this.style.transform = 'translateY(-5px) scale(1.05)';
          });

          link.addEventListener('mouseleave', function () {
               this.style.transform = 'translateY(0) scale(1)';
          });

          link.addEventListener('click', function () {
               // Efecto de click
               this.style.transform = 'scale(0.95)';
               setTimeout(() => {
                    this.style.transform = '';
               }, 150);
          });
     });

     // Scroll suave para enlaces internos
     const internalLinks = document.querySelectorAll('a[href^="#"]');
     internalLinks.forEach(link => {
          link.addEventListener('click', function (e) {
               e.preventDefault();
               const targetId = this.getAttribute('href');
               const targetElement = document.querySelector(targetId);

               if (targetElement) {
                    targetElement.scrollIntoView({
                         behavior: 'smooth',
                         block: 'start'
                    });

                    // Añadir un efecto de highlight temporal
                    targetElement.style.backgroundColor = 'rgba(30, 58, 138, 0.1)';
                    setTimeout(() => {
                         targetElement.style.backgroundColor = '';
                    }, 2000);
               }
          });
     });

     // Validación y mejora de formularios de contacto
     const contactButtons = document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"], a[href^="https://wa.me/"]');
     contactButtons.forEach(button => {
          button.addEventListener('click', function () {
               // Efecto visual
               this.style.transform = 'scale(0.95)';
               setTimeout(() => {
                    this.style.transform = '';
               }, 150);

               // Log para analytics (si está disponible)
               if (typeof gtag !== 'undefined') {
                    gtag('event', 'contact_interaction', {
                         'method': this.getAttribute('href').split(':')[0],
                         'page_title': 'Protección Infantil'
                    });
               }
          });
     });

     // Efecto de partículas en el fondo del hero (opcional)
     function createParticles() {
          const hero = document.querySelector('.hero-protection');
          if (!hero) return;

          const particlesCount = 50;

          for (let i = 0; i < particlesCount; i++) {
               const particle = document.createElement('div');
               particle.style.position = 'absolute';
               particle.style.width = '2px';
               particle.style.height = '2px';
               particle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
               particle.style.borderRadius = '50%';
               particle.style.left = Math.random() * 100 + '%';
               particle.style.top = Math.random() * 100 + '%';
               particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
               particle.style.animationDelay = Math.random() * 2 + 's';

               hero.appendChild(particle);
          }
     }

     // Crear partículas después de un pequeño delay
     setTimeout(createParticles, 1000);

     // Función para manejar el tema oscuro/claro (si se implementa en el futuro)
     function handleThemeChange() {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          document.body.classList.toggle('dark-theme', prefersDark);
     }

     // Escuchar cambios en el tema del sistema
     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);

     // Función para optimizar rendimiento en dispositivos móviles
     function optimizeForMobile() {
          if (window.innerWidth <= 768) {
               // Reducir animaciones en móviles para mejor rendimiento
               const style = document.createElement('style');
               style.textContent = `
                * {
                    animation-duration: 0.3s !important;
                    transition-duration: 0.3s !important;
                }
            `;
               document.head.appendChild(style);
          }
     }

     // Ejecutar optimización móvil
     optimizeForMobile();
     window.addEventListener('resize', optimizeForMobile);

     // Precargar documentos PDF importantes al pasar el mouse
     documentLinks.forEach(link => {
          link.addEventListener('mouseenter', function () {
               const href = this.getAttribute('href');
               if (href && href.endsWith('.pdf')) {
                    const linkElement = document.createElement('link');
                    linkElement.rel = 'prefetch';
                    linkElement.href = href;
                    document.head.appendChild(linkElement);
               }
          });
     });

     // Añadir indicador de progreso de lectura
     function addReadingProgressIndicator() {
          const progressBar = document.createElement('div');
          progressBar.style.position = 'fixed';
          progressBar.style.top = '0';
          progressBar.style.left = '0';
          progressBar.style.width = '0%';
          progressBar.style.height = '3px';
          progressBar.style.backgroundColor = '#059669';
          progressBar.style.zIndex = '9999';
          progressBar.style.transition = 'width 0.3s ease';
          document.body.appendChild(progressBar);

          window.addEventListener('scroll', function () {
               const scrollTop = window.pageYOffset;
               const docHeight = document.body.scrollHeight - window.innerHeight;
               const scrollPercent = (scrollTop / docHeight) * 100;
               progressBar.style.width = Math.min(scrollPercent, 100) + '%';
          });
     }

     // Añadir indicador de progreso
     addReadingProgressIndicator();

     console.log('✅ Protección Infantil - JavaScript cargado correctamente');
     console.log('🛡️ Sistema de protección activado');
     console.log('📱 Optimizaciones móviles aplicadas');
});

// Funciones utilitarias globales
window.ProteccionInfantil = {
     // Función para reportar contenido sospechoso
     reportContent: function (type = 'general') {
          const reportOptions = {
               'general': 'https://ciberpaz.gov.co/portal/',
               'icbf': 'https://www.icbf.gov.co/',
               'policia': 'https://caivirtual.policia.gov.co/',
               'fiscalia': 'https://www.fiscalia.gov.co/colombia/'
          };

          const url = reportOptions[type] || reportOptions['general'];
          window.open(url, '_blank');

          // Log para analytics
          if (typeof gtag !== 'undefined') {
               gtag('event', 'report_content', {
                    'report_type': type,
                    'page_title': 'Protección Infantil'
               });
          }
     },

     // Función para contacto de emergencia
     emergencyContact: function () {
          const emergencyNumbers = [
               { name: 'ICBF - Línea 141', number: '141' },
               { name: 'Emergencias - Línea 123', number: '123' },
               { name: 'SH COMPANY', number: '+573148686245' }
          ];

          let message = 'Números de emergencia para protección infantil:\n\n';
          emergencyNumbers.forEach(contact => {
               message += `${contact.name}: ${contact.number}\n`;
          });

          alert(message);
     },

     // Función para compartir información
     shareInfo: function () {
          const shareData = {
               title: 'Protección Infantil - Internet Sano | SH COMPANY',
               text: 'Conoce cómo SH COMPANY promueve un internet sano y seguro para los menores de edad.',
               url: window.location.href
          };

          if (navigator.share) {
               navigator.share(shareData);
          } else {
               // Fallback: copiar URL al portapapeles
               navigator.clipboard.writeText(window.location.href).then(() => {
                    alert('Enlace copiado al portapapeles');
               });
          }
     }
};
