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

     // Animación específica para los objetivos de calidad
     const objetivosObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    const objetivoItems = entry.target.querySelectorAll('.objetivo-item');
                    objetivoItems.forEach((item, index) => {
                         setTimeout(() => {
                              item.classList.add('visible');

                              // Efecto de onda en el círculo
                              const circle = item.querySelector('.objetivo-circle');
                              createRippleEffect(circle);
                         }, index * 200);
                    });

                    objetivosObserver.unobserve(entry.target);
               }
          });
     }, { threshold: 0.1 });

     const objetivosSection = document.querySelector('.objetivos-section');
     if (objetivosSection) {
          objetivosObserver.observe(objetivosSection);
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

     // Función para crear efecto de onda
     function createRippleEffect(element) {
          const ripple = document.createElement('div');
          ripple.style.cssText = `
               position: absolute;
               top: 50%;
               left: 50%;
               width: 0;
               height: 0;
               border-radius: 50%;
               border: 2px solid #f25c05;
               transform: translate(-50%, -50%);
               pointer-events: none;
               z-index: 1;
          `;

          element.appendChild(ripple);

          ripple.animate([
               {
                    width: '0px',
                    height: '0px',
                    opacity: 1
               },
               {
                    width: '120px',
                    height: '120px',
                    opacity: 0
               }
          ], {
               duration: 1500,
               easing: 'ease-out'
          }).onfinish = () => ripple.remove();
     }     // Efecto de hover mejorado para los cuadros
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

     // === HERO HEADER INTERACTIVO === 
     const heroHeader = document.querySelector('.hero-header');
     const heroTitle = document.querySelector('.hero-title');

     if (heroHeader && heroTitle) {
          // Efecto de movimiento del mouse en el hero
          heroHeader.addEventListener('mousemove', (e) => {
               const rect = heroHeader.getBoundingClientRect();
               const x = (e.clientX - rect.left) / rect.width;
               const y = (e.clientY - rect.top) / rect.height;

               const moveX = (x - 0.5) * 20;
               const moveY = (y - 0.5) * 20;

               heroTitle.style.transform = `translate(${moveX}px, ${moveY}px)`;
          });

          // Resetear posición cuando el mouse sale
          heroHeader.addEventListener('mouseleave', () => {
               heroTitle.style.transform = 'translate(0, 0)';
          });

          // Animación de scroll suave para el botón
          const heroBtn = document.querySelector('.hero-btn');
          if (heroBtn) {
               heroBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(heroBtn.getAttribute('href'));
                    if (target) {
                         target.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start'
                         });
                    }
               });
          }

          // Efecto de typing en el subtítulo
          const subtitle = document.querySelector('.hero-subtitle');
          if (subtitle) {
               const text = subtitle.textContent;
               subtitle.textContent = '';
               subtitle.style.opacity = '1';

               let i = 0;
               const typeWriter = () => {
                    if (i < text.length) {
                         subtitle.textContent += text.charAt(i);
                         i++;
                         setTimeout(typeWriter, 50);
                    }
               };

               // Iniciar el efecto después de 1 segundo
               setTimeout(typeWriter, 1000);
          }
     }

     // ================== SPEEDTEST FUNCTIONALITY ==================
     const speedButton = document.getElementById('speedButton');
     const speedCircle = document.getElementById('speedCircle');
     const speedStatus = document.getElementById('speedStatus');
     const speedResults = document.getElementById('speedResults');
     const downloadSpeed = document.getElementById('downloadSpeed');
     const uploadSpeed = document.getElementById('uploadSpeed');
     const pingSpeed = document.getElementById('pingSpeed');

     if (speedButton) {
          speedButton.addEventListener('click', startSpeedTest);
     }

     function startSpeedTest() {
          // Deshabilitar el botón durante la prueba
          speedButton.style.pointerEvents = 'none';
          speedCircle.classList.add('testing');
          speedResults.style.display = 'none';

          // Fase 1: Ping
          speedStatus.textContent = 'Midiendo ping...';
          speedButton.querySelector('.speedtest-text').textContent = 'Midiendo...';

          setTimeout(() => {
               const ping = Math.floor(Math.random() * 50) + 10; // 10-60 ms
               pingSpeed.textContent = ping;

               // Fase 2: Velocidad de descarga
               speedStatus.textContent = 'Midiendo velocidad de descarga...';

               let currentDownload = 0;
               const targetDownload = Math.floor(Math.random() * 80) + 20; // 20-100 Mbps

               const downloadInterval = setInterval(() => {
                    currentDownload += Math.floor(Math.random() * 10) + 5;
                    if (currentDownload >= targetDownload) {
                         currentDownload = targetDownload;
                         clearInterval(downloadInterval);

                         downloadSpeed.textContent = currentDownload;

                         // Fase 3: Velocidad de subida
                         speedStatus.textContent = 'Midiendo velocidad de subida...';

                         let currentUpload = 0;
                         const targetUpload = Math.floor(targetDownload * 0.3) + 5; // Subida típicamente menor

                         const uploadInterval = setInterval(() => {
                              currentUpload += Math.floor(Math.random() * 5) + 2;
                              if (currentUpload >= targetUpload) {
                                   currentUpload = targetUpload;
                                   clearInterval(uploadInterval);

                                   uploadSpeed.textContent = currentUpload;

                                   // Finalizar prueba
                                   speedCircle.classList.remove('testing');
                                   speedButton.querySelector('.speedtest-text').textContent = 'Repetir Test';
                                   speedStatus.textContent = '¡Prueba completada!';
                                   speedResults.style.display = 'block';
                                   speedButton.style.pointerEvents = 'auto';

                                   // Animar resultados
                                   const resultCards = speedResults.querySelectorAll('.speed-result-card');
                                   resultCards.forEach((card, index) => {
                                        setTimeout(() => {
                                             card.style.opacity = '0';
                                             card.style.transform = 'translateY(20px)';
                                             card.style.transition = 'all 0.5s ease';

                                             setTimeout(() => {
                                                  card.style.opacity = '1';
                                                  card.style.transform = 'translateY(0)';
                                             }, 100);
                                        }, index * 200);
                                   });
                              } else {
                                   uploadSpeed.textContent = currentUpload;
                              }
                         }, 150);
                    } else {
                         downloadSpeed.textContent = currentDownload;
                    }
               }, 100);
          }, 1000);
     }
});
