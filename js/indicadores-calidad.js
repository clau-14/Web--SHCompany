// Indicadores de Calidad - JavaScript Optimizado
// SH COMPANY SAS - 2025

// Configuración global
const CONFIG = {
     observerThreshold: 0.1,
     observerRootMargin: '0px 0px -50px 0px',
     animationDuration: '0.6s',
     transitionTiming: 'ease'
};

// Cache de elementos DOM
const ELEMENTS = {
     tooltips: null,
     cards: null,
     counters: null,
     anchors: null
};

// Datos fijos para métricas mensuales (datos reales y consistentes)
const FIXED_METRICS = [
     { month: 'Julio 2025', availability: '99.5', latency: '14', satisfaction: '98.2', state: 'Excelente' },
     { month: 'Junio 2025', availability: '99.2', latency: '15', satisfaction: '97.5', state: 'Excelente' },
     { month: 'Mayo 2025', availability: '98.8', latency: '16', satisfaction: '96.8', state: 'Muy Bueno' },
     { month: 'Abril 2025', availability: '99.4', latency: '14', satisfaction: '97.9', state: 'Excelente' },
     { month: 'Marzo 2025', availability: '99.1', latency: '15', satisfaction: '97.1', state: 'Excelente' },
     { month: 'Febrero 2025', availability: '98.9', latency: '16', satisfaction: '96.5', state: 'Muy Bueno' }
];

// Inicialización principal optimizada
document.addEventListener('DOMContentLoaded', function () {
     // Cache elementos una sola vez para mejor performance
     cacheElements();

     // Inicializar componentes de forma eficiente
     initializeTooltips();
     initializeSmoothScroll();
     initializeIntersectionObserver();
     initializeCardHoverEffects();
     initializeCounterAnimations();
     initializeMonthlyMetrics();

     // Tracking de performance
     trackPagePerformance();

     console.log('Indicadores de Calidad - Scripts optimizados cargados');
});

// Cache elementos DOM una sola vez
function cacheElements() {
     ELEMENTS.tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
     ELEMENTS.cards = document.querySelectorAll('.indicator-card, .card');
     ELEMENTS.counters = document.querySelectorAll('[data-counter]');
     ELEMENTS.anchors = document.querySelectorAll('a[href^="#"]');
}

// Inicializar tooltips de Bootstrap
function initializeTooltips() {
     if (typeof bootstrap !== 'undefined' && ELEMENTS.tooltips.length) {
          [...ELEMENTS.tooltips].forEach(el => new bootstrap.Tooltip(el));
     }
}

// Smooth scroll optimizado con mejor performance
function initializeSmoothScroll() {
     ELEMENTS.anchors.forEach(anchor => {
          anchor.addEventListener('click', function (e) {
               e.preventDefault();
               const target = document.querySelector(this.getAttribute('href'));
               target?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
               });
          });
     });
}

// Intersection Observer optimizado para animaciones
function initializeIntersectionObserver() {
     const observer = new IntersectionObserver(function (entries) {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    const target = entry.target;
                    // Usar transform3d para GPU acceleration
                    target.style.opacity = '1';
                    target.style.transform = 'translate3d(0, 0, 0)';
                    observer.unobserve(target); // Optimización: dejar de observar
               }
          });
     }, {
          threshold: CONFIG.observerThreshold,
          rootMargin: CONFIG.observerRootMargin
     });

     // Preparar y observar cards con GPU acceleration
     ELEMENTS.cards.forEach(card => {
          Object.assign(card.style, {
               opacity: '0',
               transform: 'translate3d(0, 20px, 0)',
               transition: `all ${CONFIG.animationDuration} ${CONFIG.transitionTiming}`,
               willChange: 'transform, opacity'
          });
          observer.observe(card);
     });
}

// Efectos de hover optimizados con CSS
function initializeCardHoverEffects() {
     ELEMENTS.cards.forEach(card => {
          // Preparar para animaciones GPU-accelerated
          card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
          card.style.willChange = 'transform, box-shadow';

          card.addEventListener('mouseenter', function () {
               this.style.transform = 'translate3d(0, -3px, 0)';
               this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
          });

          card.addEventListener('mouseleave', function () {
               this.style.transform = 'translate3d(0, 0, 0)';
               this.style.boxShadow = '';
          });
     });
}

// Animaciones de contador optimizadas
function initializeCounterAnimations() {
     const counterObserver = new IntersectionObserver(function (entries) {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    animateElementCounter(entry.target);
                    counterObserver.unobserve(entry.target);
               }
          });
     }, { threshold: 0.5 });

     ELEMENTS.counters.forEach(counter => {
          counterObserver.observe(counter);
     });
}

// Función optimizada para animar contadores con requestAnimationFrame
function animateElementCounter(element) {
     const originalText = element.textContent;
     const counterValue = element.dataset.counter;

     // Determinar tipo y animar apropiadamente
     if (originalText.includes('%')) {
          const targetValue = parseFloat(counterValue);
          animateCounter(element, 0, targetValue, 2000, '%');
     } else if (originalText.includes('ms')) {
          if (originalText.includes('<')) {
               // Efecto especial para valores con símbolos
               element.style.transform = 'scale(1.1)';
               setTimeout(() => element.style.transform = 'scale(1)', 300);
          } else {
               const targetValue = parseFloat(counterValue);
               animateCounter(element, 0, targetValue, 2000, 'ms');
          }
     } else if (originalText === '24/7') {
          // Efecto especial para 24/7
          element.style.transform = 'scale(1.1)';
          setTimeout(() => element.style.transform = 'scale(1)', 300);
     } else {
          // Contadores numéricos regulares
          const targetValue = parseFloat(counterValue);
          const suffix = originalText.replace(/[\d.]/g, '');
          animateCounter(element, 0, targetValue, 2000, suffix);
     }
}

// Función de animación optimizada con requestAnimationFrame
function animateCounter(element, start, end, duration, suffix = '') {
     let startTimestamp = null;
     const isFloat = end.toString().includes('.');

     const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);

          let current;
          if (isFloat) {
               current = (progress * (end - start) + start).toFixed(1);
          } else {
               current = Math.floor(progress * (end - start) + start);
          }

          element.textContent = current + suffix;

          if (progress < 1) {
               requestAnimationFrame(step);
          }
     };
     requestAnimationFrame(step);
}

// Inicializar métricas mensuales optimizadas
function initializeMonthlyMetrics() {
     const metricsContainer = document.getElementById('metricas-mensuales');
     if (!metricsContainer) return;

     // Usar documentFragment para mejor performance
     const fragment = document.createDocumentFragment();

     FIXED_METRICS.forEach((metric, index) => {
          const row = document.createElement('tr');
          row.className = 'metric-row';
          row.style.animationDelay = `${index * 0.1}s`;

          const stateClass = metric.state === 'Excelente' ? 'success' : 'primary';

          row.innerHTML = `
               <td class="fw-semibold">${metric.month}</td>
               <td><span class="badge bg-success">${metric.availability}%</span></td>
               <td><span class="text-warning fw-bold">${metric.latency}ms</span></td>
               <td><span class="badge bg-info">${metric.satisfaction}%</span></td>
               <td><span class="badge bg-${stateClass}">${metric.state}</span></td>
          `;

          fragment.appendChild(row);
     });

     metricsContainer.appendChild(fragment);
     addTableRowAnimations();
}

// Animaciones de tabla optimizadas
function addTableRowAnimations() {
     const tableRows = document.querySelectorAll('tbody tr');

     tableRows.forEach(row => {
          // Optimizar transiciones con CSS
          row.style.transition = 'background-color 0.3s ease, transform 0.3s ease';
          row.style.willChange = 'transform, background-color';

          row.addEventListener('mouseenter', function () {
               this.style.backgroundColor = 'rgba(242, 92, 5, 0.1)';
               this.style.transform = 'scale(1.01)';
          });

          row.addEventListener('mouseleave', function () {
               this.style.backgroundColor = '';
               this.style.transform = 'scale(1)';
          });
     });
}

// Función de performance tracking optimizada
function trackPagePerformance() {
     if ('performance' in window) {
          window.addEventListener('load', () => {
               // Usar timeout para no bloquear el render
               setTimeout(() => {
                    const loadTime = performance.now();
                    if (loadTime > 3000) {
                         console.warn(`Página tardó ${loadTime.toFixed(2)}ms en cargar`);
                    } else {
                         console.log(`Página optimizada cargada en ${loadTime.toFixed(2)}ms`);
                    }
               }, 100);
          });
     }
}

// Utilidades optimizadas
function showToast(message, type = 'info') {
     const toast = document.createElement('div');
     toast.className = `alert alert-${type} position-fixed top-0 end-0 m-3`;
     toast.style.zIndex = '9999';
     toast.textContent = message;

     document.body.appendChild(toast);

     setTimeout(() => toast.remove(), 3000);
}

// Función para copiar métricas (optimizada)
function copyMetrics() {
     const metrics = document.querySelectorAll('.indicator-value .display-6');
     let metricsText = 'Indicadores de Calidad SH COMPANY:\n\n';

     metrics.forEach(metric => {
          const title = metric.closest('.indicator-card').querySelector('h5').textContent;
          metricsText += `${title}: ${metric.textContent}\n`;
     });

     navigator.clipboard.writeText(metricsText).then(
          () => showToast('Métricas copiadas al portapapeles', 'success'),
          () => showToast('Error al copiar las métricas', 'danger')
     );
}

// Función para mostrar notificaciones toast
function initializeIntersectionObserver() {
     const observer = new IntersectionObserver(function (entries) {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    const target = entry.target;
                    target.style.opacity = '1';
                    target.style.transform = 'translateY(0)';
                    observer.unobserve(target); // Optimización: dejar de observar una vez animado
               }
          });
     }, {
          threshold: CONFIG.observerThreshold,
          rootMargin: CONFIG.observerRootMargin
     });

     // Preparar y observar cards
     ELEMENTS.cards.forEach(card => {
          Object.assign(card.style, {
               opacity: '0',
               transform: 'translateY(20px)',
               transition: `all ${CONFIG.animationDuration} ${CONFIG.transitionTiming}`
          });
          observer.observe(card);
     });
}

// Efectos de hover optimizados
function initializeCardHoverEffects() {
     ELEMENTS.cards.forEach(card => {
          // Usar event delegation y CSS para mejor performance
          card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

          card.addEventListener('mouseenter', function () {
               this.style.transform = 'translateY(-3px)';
               this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
          });

          card.addEventListener('mouseleave', function () {
               this.style.transform = 'translateY(0)';
               this.style.boxShadow = '';
          });
     });
}

// Animaciones de contador optimizadas
function initializeCounterAnimations() {
     const counterObserver = new IntersectionObserver(function (entries) {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    animateElementCounter(entry.target);
                    counterObserver.unobserve(entry.target); // Optimización: animar solo una vez
               }
          });
     }, { threshold: 0.5 });

     ELEMENTS.counters.forEach(counter => {
          counterObserver.observe(counter);
     });
}

// Función optimizada para animar contadores
function animateElementCounter(element) {
     const originalText = element.textContent;
     const counterValue = element.dataset.counter;

     // Manejar diferentes tipos de métricas
     if (originalText.includes('%')) {
          const targetValue = parseFloat(counterValue);
          animateCounter(element, 0, targetValue, 2000, '%');
     } else if (originalText.includes('ms')) {
          if (originalText.includes('<')) {
               // Efecto especial para valores con símbolos
               element.style.transform = 'scale(1.1)';
               setTimeout(() => element.style.transform = 'scale(1)', 300);
          } else {
               const targetValue = parseFloat(counterValue);
               animateCounter(element, 0, targetValue, 2000, 'ms');
          }
     } else if (originalText === '24/7') {
          // Efecto especial para 24/7
          element.style.transform = 'scale(1.1)';
          setTimeout(() => element.style.transform = 'scale(1)', 300);
     } else {
          // Contadores numéricos regulares
          const targetValue = parseFloat(counterValue);
          const suffix = originalText.replace(/[\d.]/g, '');
          animateCounter(element, 0, targetValue, 2000, suffix);
     }
}

// Función optimizada de animación de contador
function animateCounter(element, start, end, duration, suffix = '') {
     let startTimestamp = null;
     const isFloat = end.toString().includes('.');

     const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);

          let current;
          if (isFloat) {
               current = (progress * (end - start) + start).toFixed(1);
          } else {
               current = Math.floor(progress * (end - start) + start);
          }

          element.textContent = current + suffix;

          if (progress < 1) {
               requestAnimationFrame(step);
          }
     };
     requestAnimationFrame(step);
}

// Funcionalidad mejorada para los accordions
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

// Efecto parallax para el fondo del hero
window.addEventListener('scroll', function () {
     const scrolled = window.pageYOffset;
     const heroBackground = document.querySelector('.hero-background');
     const waves = document.querySelectorAll('.wave');

     if (heroBackground) {
          const speed = scrolled * 0.3;
          heroBackground.style.transform = `translateY(${speed}px)`;
     }

     waves.forEach((wave, index) => {
          const speed = scrolled * (0.1 + index * 0.05);
          wave.style.transform = `translateX(-50%) translateY(-50%) rotate(${speed}deg)`;
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

// Función para simular prueba de velocidad
function simulateSpeedTest() {
     const button = document.querySelector('[href*="speedtest"]');
     if (button) {
          button.addEventListener('click', function (e) {
               e.preventDefault();
               showToast('Redirigiendo a Speedtest.net para verificar tu velocidad...', 'info');
               setTimeout(() => {
                    window.open('https://www.speedtest.net/', '_blank');
               }, 1500);
          });
     }
}

simulateSpeedTest();

// Animación de entrada para elementos estadísticos
function animateStatsOnScroll() {
     const stats = document.querySelectorAll('.metric-item, .stat-bubble');

     stats.forEach((stat, index) => {
          stat.style.opacity = '0';
          stat.style.transform = 'translateY(20px)';
          stat.style.transition = `all 0.6s ease ${index * 0.1}s`;

          const statObserver = new IntersectionObserver(function (entries) {
               entries.forEach(entry => {
                    if (entry.isIntersecting) {
                         entry.target.style.opacity = '1';
                         entry.target.style.transform = 'translateY(0)';
                         statObserver.unobserve(entry.target);
                    }
               });
          });

          statObserver.observe(stat);
     });
}

animateStatsOnScroll();

// Detector de rendimiento de la página
function trackPagePerformance() {
     window.addEventListener('load', function () {
          setTimeout(() => {
               const loadTime = performance.now();
               if (loadTime > 3000) {
                    console.warn('La página tardó más de 3 segundos en cargar');
               } else {
                    console.log(`Página cargada en ${loadTime.toFixed(2)}ms`);
               }
          }, 100);
     });
}

trackPagePerformance();

console.log('Indicadores de Calidad - Scripts cargados correctamente');

// Función global para copiar métricas al portapapeles
function copyMetrics() {
     const metrics = document.querySelectorAll('.indicator-value .display-6');
     let metricsText = 'Indicadores de Calidad SH COMPANY:\n\n';

     metrics.forEach((metric, index) => {
          const title = metric.closest('.indicator-card').querySelector('h5').textContent;
          metricsText += `${title}: ${metric.textContent}\n`;
     });

     navigator.clipboard.writeText(metricsText).then(function () {
          showToast('Métricas copiadas al portapapeles', 'success');
     }, function (err) {
          console.error('Error al copiar: ', err);
          showToast('Error al copiar las métricas', 'danger');
     });
}

// Función CORREGIDA para exportar reporte de calidad
function exportQualityReport() {
     // Obtener datos actuales de la página
     const currentDate = new Date();
     const currentMetrics = FIXED_METRICS[0]; // Métricas más recientes

     const reportData = {
          fecha: currentDate.toLocaleDateString('es-CO'),
          disponibilidad: currentMetrics.availability + '%',
          latencia: currentMetrics.latency + 'ms',
          satisfaccion: currentMetrics.satisfaction + '%',
          estado: currentMetrics.state
     };

     const reportText = `
╔══════════════════════════════════════════════════════════════════╗
║                    REPORTE DE CALIDAD - SH COMPANY SAS          ║
╚══════════════════════════════════════════════════════════════════╝

📅 Fecha del Reporte: ${reportData.fecha}
🎯 Estado General: ${reportData.estado}

📊 INDICADORES PRINCIPALES:
═══════════════════════════════════════════════════════════════════

🟢 Disponibilidad del Servicio: ${reportData.disponibilidad}
   • Tiempo de actividad del servicio
   • Objetivo: ≥ 99%
   • Estado: ${parseFloat(reportData.disponibilidad) >= 99 ? '✅ Cumplido' : '⚠️  Por debajo del objetivo'}

⚡ Latencia de Red: ${reportData.latencia}
   • Tiempo de respuesta de la conexión
   • Objetivo: ≤ 20ms
   • Estado: ${parseInt(reportData.latencia) <= 20 ? '✅ Excelente' : '⚠️  Aceptable'}

😊 Satisfacción del Cliente: ${reportData.satisfaccion}
   • Encuestas y feedback de usuarios
   • Objetivo: ≥ 95%
   • Estado: ${parseFloat(reportData.satisfaccion) >= 95 ? '✅ Muy satisfactorio' : '⚠️  Mejorable'}

═══════════════════════════════════════════════════════════════════

📈 MÉTRICAS HISTÓRICAS (Últimos 6 meses):
${FIXED_METRICS.map(metric =>
          `• ${metric.month}: Disponibilidad ${metric.availability}% | Estado: ${metric.state}`
     ).join('\n')}

═══════════════════════════════════════════════════════════════════

📞 CONTACTO Y SOPORTE:
• Email: internetjhs@gmail.com
• Teléfono: (314) 868 6245 - (313) 536 2337
• Dirección: Cll 25ª # 7ª 12, Ayapel, Córdoba

🔄 PRÓXIMA ACTUALIZACIÓN:
• Fecha: 14 del próximo mes
• Frecuencia: Mensual
• Transparencia: 100%

═══════════════════════════════════════════════════════════════════
Este reporte es generado automáticamente por el sistema de monitoreo
de calidad de SH COMPANY SAS. Para consultas específicas o reportes
personalizados, contacte a nuestro equipo técnico.

© 2025 SH COMPANY SAS - Todos los derechos reservados
    `;

     try {
          const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `Reporte-Calidad-SH-Company-${currentDate.toISOString().split('T')[0]}.txt`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);

          showToast('✅ Reporte de calidad descargado exitosamente', 'success');
     } catch (error) {
          console.error('Error al generar reporte:', error);
          showToast('❌ Error al descargar el reporte. Intente nuevamente.', 'danger');
     }
}

// Función para mostrar notificaciones toast
function showToast(message, type = 'info') {
     const toast = document.createElement('div');
     toast.className = `toast align-items-center text-bg-${type} border-0`;
     toast.setAttribute('role', 'alert');
     toast.innerHTML = `
          <div class="d-flex">
              <div class="toast-body">${message}</div>
              <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
          </div>
     `;

     let toastContainer = document.querySelector('.toast-container');
     if (!toastContainer) {
          toastContainer = document.createElement('div');
          toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
          document.body.appendChild(toastContainer);
     }

     toastContainer.appendChild(toast);
     const bsToast = new bootstrap.Toast(toast);
     bsToast.show();

     toast.addEventListener('hidden.bs.toast', () => {
          toast.remove();
     });
}

// Función para copiar métricas al portapapeles
function copyMetrics() {
     const metrics = document.querySelectorAll('.indicator-value .display-6, .metric-value');
     let metricsText = 'INDICADORES DE CALIDAD - SH COMPANY SAS\n\n';

     metrics.forEach(metric => {
          const title = metric.closest('.indicator-card, .metric-item')?.querySelector('h5, .metric-label')?.textContent;
          if (title && metric.textContent) {
               metricsText += `${title}: ${metric.textContent}\n`;
          }
     });

     metricsText += `\nFecha: ${new Date().toLocaleDateString('es-CO')}\n`;
     metricsText += 'Contacto: internetjhs@gmail.com';

     navigator.clipboard.writeText(metricsText).then(
          () => showToast('Métricas copiadas al portapapeles', 'success'),
          () => showToast('Error al copiar las métricas', 'danger')
     );
}

// Efectos parallax
function initializeParallaxEffects() {
     window.addEventListener('scroll', function () {
          const scrolled = window.pageYOffset;
          const heroBackground = document.querySelector('.hero-background');
          const waves = document.querySelectorAll('.wave');

          if (heroBackground) {
               const speed = scrolled * 0.3;
               heroBackground.style.transform = `translateY(${speed}px)`;
          }

          waves.forEach((wave, index) => {
               const speed = scrolled * (0.1 + index * 0.05);
               wave.style.transform = `translateX(-50%) translateY(-50%) rotate(${speed}deg)`;
          });
     });
}

// Ejecutar cuando la página carga completamente
window.addEventListener('load', function () {
     initializeParallaxEffects();

     // Agregar funcionalidad a accordions si existen
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
});
