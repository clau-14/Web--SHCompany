// planes.js - Funcionalidad para página de planes por sede

document.addEventListener('DOMContentLoaded', () => {
     // === FUNCIONALIDAD DE PESTAÑAS DE SEDES ===
     const sedeTabs = document.querySelectorAll('.sede-tab');
     const sedeContents = document.querySelectorAll('.sede-content');

     // Función para cambiar de sede
     function switchSede(targetSede) {
          // Remover clase active de todas las pestañas y contenidos
          sedeTabs.forEach(tab => tab.classList.remove('active'));
          sedeContents.forEach(content => content.classList.remove('active'));

          // Agregar clase active a la pestaña seleccionada
          const selectedTab = document.querySelector(`[data-sede="${targetSede}"]`);
          if (selectedTab) {
               selectedTab.classList.add('active');
          }

          // Mostrar el contenido correspondiente
          const selectedContent = document.getElementById(`${targetSede}-content`);
          if (selectedContent) {
               selectedContent.classList.add('active');
          }

          // Guardar la sede seleccionada en localStorage
          localStorage.setItem('selectedSede', targetSede);
     }

     // Event listeners para las pestañas
     sedeTabs.forEach(tab => {
          tab.addEventListener('click', () => {
               const sede = tab.getAttribute('data-sede');
               switchSede(sede);
          });
     });

     // Restaurar la sede seleccionada desde localStorage
     const savedSede = localStorage.getItem('selectedSede');
     if (savedSede && document.getElementById(`${savedSede}-content`)) {
          switchSede(savedSede);
     }

     // === FUNCIONALIDAD DE BOTONES DE PLANES ===
     const planButtons = document.querySelectorAll('.plan-btn');

     planButtons.forEach(button => {
          button.addEventListener('click', function () {
               // Obtener información del plan
               const planCard = this.closest('.plan-card');
               const planName = planCard.querySelector('.plan-name').textContent;
               const planSpeed = planCard.querySelector('.plan-speed').textContent;
               const planPrice = planCard.querySelector('.price').textContent;

               // Obtener sede actual
               const activeSede = document.querySelector('.sede-tab.active').textContent.trim();

               // Crear mensaje para WhatsApp
               const message = `¡Hola! Me interesa contratar el ${planName} de ${planSpeed} por ${planPrice}/mes en la sede de ${activeSede}. ¿Podrían darme más información?`;
               const encodedMessage = encodeURIComponent(message);
               const whatsappUrl = `https://wa.me/573216031932?text=${encodedMessage}`;

               // Abrir WhatsApp
               window.open(whatsappUrl, '_blank');
          });
     });

     // === ANIMACIONES AL HACER SCROLL ===
     const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
     };

     const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
               }
          });
     }, observerOptions);

     // Observar las tarjetas de planes
     const planCards = document.querySelectorAll('.plan-card');
     planCards.forEach(card => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)';
          card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(card);
     });

     // === EFECTOS VISUALES ADICIONALES ===

     // Efecto hover en las tarjetas de planes
     planCards.forEach(card => {
          card.addEventListener('mouseenter', function () {
               // Agregar efecto de brillo
               this.style.boxShadow = '0 20px 50px rgba(242, 92, 5, 0.2)';
          });

          card.addEventListener('mouseleave', function () {
               // Restaurar sombra original
               if (!this.classList.contains('featured')) {
                    this.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
               }
          });
     });

     // Efecto de conteo animado para los precios
     function animatePrice(element) {
          const price = element.textContent.replace(/[^\d]/g, '');
          const targetPrice = parseInt(price);
          let currentPrice = 0;
          const increment = targetPrice / 50;
          const timer = setInterval(() => {
               currentPrice += increment;
               if (currentPrice >= targetPrice) {
                    currentPrice = targetPrice;
                    clearInterval(timer);
               }
               element.textContent = `$${Math.floor(currentPrice).toLocaleString()}`;
          }, 20);
     }

     // Observar precios para animarlos cuando sean visibles
     const priceElements = document.querySelectorAll('.price');
     const priceObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
               if (entry.isIntersecting && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    setTimeout(() => {
                         animatePrice(entry.target);
                    }, 300);
               }
          });
     }, { threshold: 0.5 });

     priceElements.forEach(price => {
          priceObserver.observe(price);
     });

     // === FUNCIONALIDAD DEL HERO ===

     // Efecto parallax suave para las partículas
     window.addEventListener('scroll', () => {
          const scrolled = window.pageYOffset;
          const parallaxElements = document.querySelectorAll('.planes-particle');

          parallaxElements.forEach((element, index) => {
               const speed = 0.5 + (index * 0.1);
               const yPos = -(scrolled * speed);
               element.style.transform = `translateY(${yPos}px)`;
          });
     });

     // Efecto de escritura para el subtítulo
     const subtitle = document.querySelector('.planes-hero-subtitle');
     if (subtitle) {
          const originalText = subtitle.textContent;
          subtitle.textContent = '';

          let i = 0;
          const typeWriter = () => {
               if (i < originalText.length) {
                    subtitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
               }
          };

          // Iniciar después de 1 segundo
          setTimeout(typeWriter, 1000);
     }

     // === NAVEGACIÓN SUAVE ===
     const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

     smoothScrollLinks.forEach(link => {
          link.addEventListener('click', function (e) {
               e.preventDefault();
               const targetId = this.getAttribute('href');
               const targetElement = document.querySelector(targetId);

               if (targetElement) {
                    targetElement.scrollIntoView({
                         behavior: 'smooth',
                         block: 'start'
                    });
               }
          });
     });

     // === FEEDBACK VISUAL AL USUARIO ===

     // Mostrar toast cuando se hace clic en "Contratar Plan"
     function showToast(message, type = 'success') {
          // Crear elemento toast si no existe
          let toast = document.getElementById('custom-toast');
          if (!toast) {
               toast = document.createElement('div');
               toast.id = 'custom-toast';
               toast.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? '#28a745' : '#dc3545'};
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                z-index: 9999;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                font-weight: 600;
            `;
               document.body.appendChild(toast);
          }

          toast.textContent = message;
          toast.style.transform = 'translateX(0)';

          setTimeout(() => {
               toast.style.transform = 'translateX(100%)';
          }, 3000);
     }

     // Agregar feedback a los botones de plan
     planButtons.forEach(button => {
          const originalHandler = button.onclick;
          button.addEventListener('click', function () {
               showToast('Redirigiendo a WhatsApp...', 'success');
          });
     });

     console.log('Sistema de planes por sede inicializado correctamente');
});
