// empresa.js

document.addEventListener('DOMContentLoaded', () => {
     // Animaciones de scroll para todas las secciones
     const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
               }
          });
     }, { threshold: 0.15 });

     const sections = document.querySelectorAll('.animate-section');
     sections.forEach(section => observer.observe(section));

     // Animación específica para los cuadros de información corporativa
     const infoObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    const infoBoxes = entry.target.querySelectorAll('.info-box');
                    infoBoxes.forEach((box, index) => {
                         setTimeout(() => {
                              box.classList.add('visible');

                              // Efecto de partículas adicional
                              createParticleEffect(box);
                         }, index * 300);
                    });

                    infoObserver.unobserve(entry.target);
               }
          });
     }, { threshold: 0.1 });

     const infoSection = document.querySelector('.info-corporativa-section');
     if (infoSection) {
          infoObserver.observe(infoSection);
     }

     // Función para crear efecto de partículas
     function createParticleEffect(element) {
          for (let i = 0; i < 5; i++) {
               setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.style.cssText = `
                         position: absolute;
                         width: 4px;
                         height: 4px;
                         background: #f25c05;
                         border-radius: 50%;
                         pointer-events: none;
                         z-index: 1000;
                         box-shadow: 0 0 10px #f25c05;
                    `;

                    const rect = element.getBoundingClientRect();
                    particle.style.left = rect.left + Math.random() * rect.width + 'px';
                    particle.style.top = rect.top + Math.random() * rect.height + 'px';

                    document.body.appendChild(particle);

                    // Animar partícula
                    particle.animate([
                         {
                              transform: 'translateY(0) scale(1)',
                              opacity: 1
                         },
                         {
                              transform: 'translateY(-100px) scale(0)',
                              opacity: 0
                         }
                    ], {
                         duration: 2000,
                         easing: 'ease-out'
                    }).onfinish = () => particle.remove();
               }, i * 200);
          }
     }

     // Efecto de hover mejorado para los cuadros
     const infoBoxes = document.querySelectorAll('.info-box');
     infoBoxes.forEach(box => {
          box.addEventListener('mouseenter', function () {
               // Efecto de pulso en el borde
               this.style.animation = 'borderPulse 1s ease-in-out infinite';

               // Agregar clase CSS para efectos adicionales
               this.classList.add('hover-active');
          });

          box.addEventListener('mouseleave', function () {
               this.style.animation = '';
               this.classList.remove('hover-active');
          });
     });

     // Agregar estilos dinámicos para el efecto de pulso
     const style = document.createElement('style');
     style.textContent = `
          @keyframes borderPulse {
               0%, 100% { 
                    border-color: rgba(242, 92, 5, 0.3);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
                                inset 0 1px 0 rgba(255, 255, 255, 0.2);
               }
               50% { 
                    border-color: rgba(242, 92, 5, 1);
                    box-shadow: 0 30px 60px rgba(242, 92, 5, 0.4),
                                0 0 40px rgba(242, 92, 5, 0.3),
                                inset 0 1px 0 rgba(255, 255, 255, 0.3);
               }
          }
          
          .info-box.hover-active {
               background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
          }
     `;
     document.head.appendChild(style);
});
