// Control Parental - Información y Consejos
// SH COMPANY SAS - 2025

// Configuración global
const CONFIG = {
     observerThreshold: 0.1,
     observerRootMargin: '0px 0px -50px 0px',
     animationDuration: '0.6s',
     transitionTiming: 'ease-in-out'
};

// Cache de elementos DOM
const ELEMENTS = {
     tooltips: null,
     cards: null,
     buttons: null,
     accordionItems: null
};

// Consejos y recomendaciones
const PARENTAL_TIPS = {
     recommendations: [
          'Mantén conversaciones regulares sobre seguridad en línea',
          'Ubica dispositivos en áreas comunes de la casa',
          'Establece horarios familiares sin dispositivos',
          'Enseña sobre privacidad y datos personales',
          'Revisa regularmente las actividades online'
     ],
     warningSigns: [
          'Cambios repentinos en el comportamiento',
          'Secretismo excesivo con dispositivos',
          'Uso de internet durante la noche',
          'Nerviosismo al recibir mensajes'
     ]
};

// Inicialización principal
document.addEventListener('DOMContentLoaded', function () {
     // Cache elementos una sola vez para mejor performance
     cacheElements();

     // Inicializar componentes
     initializeTooltips();
     initializeSmoothScroll();
     initializeIntersectionObserver();
     initializeCardAnimations();
     initializeAccordionEffects();
     initializeEducationalContent();
     initializeContactForm();

     // Tracking de performance
     trackPagePerformance();

     console.log('Control Parental - Página informativa cargada correctamente');
});

// Cache elementos DOM una sola vez
function cacheElements() {
     ELEMENTS.tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
     ELEMENTS.cards = document.querySelectorAll('.feature-card, .step-content, .legal-card');
     ELEMENTS.buttons = document.querySelectorAll('.btn');
     ELEMENTS.accordionItems = document.querySelectorAll('.accordion-button');
}

// Inicializar tooltips de Bootstrap
function initializeTooltips() {
     if (typeof bootstrap !== 'undefined' && ELEMENTS.tooltips.length) {
          [...ELEMENTS.tooltips].forEach(el => new bootstrap.Tooltip(el));
     }
}

// Smooth scroll optimizado
function initializeSmoothScroll() {
     const anchors = document.querySelectorAll('a[href^="#"]');
     anchors.forEach(anchor => {
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
}

// Intersection Observer para animaciones
function initializeIntersectionObserver() {
     const observer = new IntersectionObserver(function (entries) {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    const target = entry.target;
                    target.style.opacity = '1';
                    target.style.transform = 'translateY(0)';
                    target.classList.add('visible');
                    observer.unobserve(target);
               }
          });
     }, {
          threshold: CONFIG.observerThreshold,
          rootMargin: CONFIG.observerRootMargin
     });

     // Preparar y observar elementos para animación
     ELEMENTS.cards.forEach(card => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)';
          card.style.transition = `all ${CONFIG.animationDuration} ${CONFIG.transitionTiming}`;
          card.classList.add('fade-in');
          observer.observe(card);
     });
}

// Animaciones de tarjetas
function initializeCardAnimations() {
     ELEMENTS.cards.forEach(card => {
          card.addEventListener('mouseenter', function () {
               this.style.transform = 'translateY(-8px) scale(1.02)';
               this.style.boxShadow = '0 12px 35px rgba(0,0,0,0.2)';
          });

          card.addEventListener('mouseleave', function () {
               this.style.transform = 'translateY(0) scale(1)';
               this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          });
     });
}

// Efectos mejorados para accordions
function initializeAccordionEffects() {
     ELEMENTS.accordionItems.forEach(button => {
          button.addEventListener('click', function () {
               const icon = this.querySelector('i');
               if (icon) {
                    setTimeout(() => {
                         if (this.classList.contains('collapsed')) {
                              icon.style.transform = 'rotate(0deg)';
                         } else {
                              icon.style.transform = 'rotate(180deg)';
                         }
                    }, 100);
               }
          });
     });
}

// Contenido educativo en lugar de simulador
function initializeEducationalContent() {
     // Solo inicializar contenido estático
     updateInformativeStats();
}// Actualizar datos del dashboard
function updateDashboardData() {
     const dashboard = document.querySelector('.parental-dashboard');
     if (!dashboard) return;

     // Simular cambios en el tiempo de uso
     PARENTAL_DATA.profiles.forEach(profile => {
          const currentTime = parseFloat(profile.timeUsed);
          const newTime = Math.min(currentTime + 0.1, parseFloat(profile.timeLimit));
          profile.timeUsed = newTime.toFixed(1) + 'h';
     });

     // Actualizar indicadores visuales si es necesario
     updateStatusIndicators();
}

// Actualizar indicadores de estado
function updateStatusIndicators() {
     const indicators = document.querySelectorAll('.status-indicator');
     indicators.forEach(indicator => {
          // Añadir efecto de parpadeo ocasional
          if (Math.random() < 0.1) {
               indicator.style.animation = 'pulse 1s ease-in-out';
               setTimeout(() => {
                    indicator.style.animation = 'pulse 2s infinite';
               }, 1000);
          }
     });
}

// Mostrar consejos rotativos
function showRandomTip() {
     const tips = [
          'Recuerda: La comunicación abierta es la mejor herramienta de protección',
          'Consejo: Ubica los dispositivos en áreas comunes de la casa',
          'Importante: Enseña a tus hijos sobre privacidad en internet',
          'Recomendación: Establece horarios familiares sin dispositivos',
          'Tip: Sé un modelo positivo en el uso de la tecnología'
     ];

     const randomTip = tips[Math.floor(Math.random() * tips.length)];
     showToast(randomTip, 'info');
}

// Actualizar estadísticas informativas
function updateInformativeStats() {
     const stats = document.querySelectorAll('.metric-number, .speed-number');
     stats.forEach(stat => {
          const targetValue = parseInt(stat.textContent);
          if (targetValue) {
               animateCounter(stat, 0, targetValue, 2000);
          }
     });
}

// Función para animar contadores
function animateCounter(element, start, end, duration) {
     let startTimestamp = null;
     const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const current = Math.floor(progress * (end - start) + start);
          element.textContent = current;
          if (progress < 1) {
               requestAnimationFrame(step);
          }
     };
     requestAnimationFrame(step);
}

// Formulario de contacto mejorado
function initializeContactForm() {
     const contactButtons = document.querySelectorAll('.contact-options .btn');

     contactButtons.forEach(button => {
          button.addEventListener('click', function (e) {
               // Añadir efecto visual al hacer clic
               this.style.transform = 'scale(0.95)';
               setTimeout(() => {
                    this.style.transform = 'scale(1)';
               }, 150);

               // Mostrar mensaje de confirmación para WhatsApp
               if (this.href && this.href.includes('wa.me')) {
                    setTimeout(() => {
                         showToast('Redirigiendo a WhatsApp...', 'success');
                    }, 200);
               }
          });
     });
}

// Sistema de notificaciones toast
function showToast(message, type = 'info') {
     // Remover toasts existentes
     const existingToasts = document.querySelectorAll('.toast-notification');
     existingToasts.forEach(toast => toast.remove());

     const toast = document.createElement('div');
     toast.className = `toast-notification alert alert-${type} position-fixed`;
     toast.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    `;

     toast.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="bi bi-${getToastIcon(type)} me-2"></i>
            <span>${message}</span>
            <button type="button" class="btn-close ms-auto" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `;

     document.body.appendChild(toast);

     // Animar entrada
     setTimeout(() => {
          toast.style.opacity = '1';
          toast.style.transform = 'translateX(0)';
     }, 100);

     // Auto-remove después de 5 segundos
     setTimeout(() => {
          toast.style.opacity = '0';
          toast.style.transform = 'translateX(100%)';
          setTimeout(() => toast.remove(), 300);
     }, 5000);
}

// Obtener icono apropiado para el toast
function getToastIcon(type) {
     const icons = {
          'success': 'check-circle-fill',
          'info': 'info-circle-fill',
          'warning': 'exclamation-triangle-fill',
          'danger': 'x-circle-fill'
     };
     return icons[type] || 'info-circle-fill';
}

// Efectos parallax para el hero
function initializeParallaxEffects() {
     window.addEventListener('scroll', function () {
          const scrolled = window.pageYOffset;
          const heroBackground = document.querySelector('.hero-background');
          const shields = document.querySelectorAll('.pattern-shield');

          if (heroBackground) {
               const speed = scrolled * 0.2;
               heroBackground.style.transform = `translateY(${speed}px)`;
          }

          shields.forEach((shield, index) => {
               const speed = scrolled * (0.1 + index * 0.05);
               shield.style.transform = `translateY(${speed}px) rotate(${speed * 2}deg)`;
          });
     });
}

// Función para mostrar consejos educativos
function showEducationalTips() {
     const tips = [
          'La supervisión activa es más efectiva que el control automático',
          'Enseña a tus hijos a identificar y reportar contenido inapropiado',
          'Mantén actualizados los dispositivos y aplicaciones',
          'Revisa las configuraciones de privacidad en redes sociales',
          'Fomenta actividades offline y tiempo en familia'
     ];

     let tipList = 'CONSEJOS DE SEGURIDAD DIGITAL:\n\n';
     tips.forEach((tip, index) => {
          tipList += `${index + 1}. ${tip}\n`;
     });

     showToast('Revisa la consola para ver consejos de seguridad', 'info');
     console.log(tipList);
}// Función de performance tracking
function trackPagePerformance() {
     if ('performance' in window) {
          window.addEventListener('load', () => {
               setTimeout(() => {
                    const loadTime = performance.now();
                    if (loadTime > 3000) {
                         console.warn(`Página tardó ${loadTime.toFixed(2)}ms en cargar`);
                    } else {
                         console.log(`Página cargada en ${loadTime.toFixed(2)}ms`);
                    }
               }, 100);
          });
     }
}

// Función para copiar consejos de seguridad
function copyParentalTips() {
     const tipsText = `
CONSEJOS DE CONTROL PARENTAL - SH COMPANY SAS

📋 Recomendaciones Importantes:
• Mantén comunicación abierta con tus hijos
• Ubica dispositivos en áreas comunes
• Establece horarios familiares sin pantallas
• Enseña sobre privacidad y seguridad online
• Supervisa y acompaña la navegación

📞 Información y Consultas:
• WhatsApp: (314) 868 6245
• Email: internetjhs@gmail.com
• Atención: Lunes a Sábado 8:00 AM - 6:00 PM

🔒 Marco Legal:
• Cumplimiento Ley 679 de 2001
• Protección integral de menores
• Prevención de contenido inapropiado

Fecha: ${new Date().toLocaleDateString('es-CO')}
`;

     navigator.clipboard.writeText(tipsText).then(
          () => showToast('Consejos copiados al portapapeles', 'success'),
          () => showToast('Error al copiar la información', 'danger')
     );
}

// Event listeners para funcionalidades educativas
document.addEventListener('click', function (e) {
     // Solo funcionalidad de copia si existe
     if (e.target.matches('.btn-copy-tips')) {
          e.preventDefault();
          copyParentalTips();
     }
});

// Inicializar efectos parallax cuando la página carga
window.addEventListener('load', function () {
     initializeParallaxEffects();

     // Sin mensajes automáticos
});

// Función para mostrar consejos de áreas importantes
function showEducationalAreas() {
     const areas = [
          'Comunicación familiar - Clave para la seguridad digital',
          'Supervisión activa - Acompaña la navegación de tus hijos',
          'Educación digital - Enseña sobre riesgos y beneficios'
     ];

     let areaList = 'ÁREAS IMPORTANTES DE ATENCIÓN:\n\n';
     areas.forEach((area, index) => {
          areaList += `${index + 1}. ${area}\n`;
     });

     showToast('Revisa la consola para ver áreas de atención', 'info');
     console.log(areaList);
}

// Exportar funciones principales para uso global
window.parentalEducation = {
     showTips: showEducationalTips,
     copyTips: copyParentalTips,
     showAreas: showEducationalAreas,
     randomTip: showRandomTip
};

// Debug mode (solo en desarrollo)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
     console.log('🛡️ Control Parental - Modo Educativo Activado');
     console.log('Funciones disponibles: window.parentalEducation');

     // Agregar botón de debug
     setTimeout(() => {
          const debugBtn = document.createElement('button');
          debugBtn.innerHTML = '� Tips';
          debugBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 10000;
            padding: 10px;
            background: #333;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        `;
          debugBtn.onclick = () => showRandomTip();
          document.body.appendChild(debugBtn);
     }, 3000);
}
