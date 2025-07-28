// Indicadores de Calidad - JavaScript Optimizado
// SH COMPANY SAS - 2025

// Configuración global
const CONFIG = {
     observerThreshold: 0.1,
     observerRootMargin: '0px 0px -50px 0px',
     animationDuration: '0.6s',
     transitionTiming: 'ease',
     reportUpdateDay: 14, // Día del mes para actualizar reportes
     metricsStorageKey: 'sh_company_metrics_data'
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
     // Cargar métricas guardadas primero
     loadSavedMetrics();

     // Cache elementos una sola vez para mejor performance
     cacheElements();

     // Inicializar componentes de forma eficiente
     initializeTooltips();
     initializeSmoothScroll();
     initializeIntersectionObserver();
     initializeCardHoverEffects();
     initializeCounterAnimations();
     initializeMonthlyMetrics();
     initializeMonthlyReportSystem();

     // Tracking de performance
     trackPagePerformance();

     console.log('Indicadores de Calidad - Scripts optimizados cargados');

     // Información sobre sistema automático
     const nextReportInfo = getNextReportInfo();
     console.log(`📊 Sistema automático activo. Próxima actualización: ${nextReportInfo.nextDate} (${nextReportInfo.daysRemaining} días)`);
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

     // Generar también la versión móvil
     generateMobileMetrics();
}

// Generar métricas en formato de tarjetas para móviles
function generateMobileMetrics() {
     const mobileContainer = document.getElementById('metricas-movil');
     if (!mobileContainer) return;

     const fragment = document.createDocumentFragment();

     FIXED_METRICS.forEach((metric, index) => {
          const card = document.createElement('div');
          card.className = 'mobile-metric-card';
          card.style.animationDelay = `${index * 0.1}s`;

          const stateClass = metric.state === 'Excelente' ? 'success' :
               metric.state === 'Muy Bueno' ? 'primary' : 'warning';

          card.innerHTML = `
               <div class="mobile-metric-header">
                    <div class="mobile-metric-month">${metric.month}</div>
                    <div class="mobile-metric-status badge bg-${stateClass}">${metric.state}</div>
               </div>
               <div class="mobile-metric-details">
                    <div class="mobile-metric-item">
                         <div class="mobile-metric-label">Disponibilidad</div>
                         <div class="mobile-metric-value success">${metric.availability}%</div>
                    </div>
                    <div class="mobile-metric-item">
                         <div class="mobile-metric-label">Latencia</div>
                         <div class="mobile-metric-value warning">${metric.latency}ms</div>
                    </div>
                    <div class="mobile-metric-item">
                         <div class="mobile-metric-label">Satisfacción</div>
                         <div class="mobile-metric-value primary">${metric.satisfaction}%</div>
                    </div>
               </div>
          `;

          fragment.appendChild(card);
     });

     mobileContainer.appendChild(fragment);
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

// Sistema de actualización automática mensual
function initializeMonthlyReportSystem() {
     // Verificar si es tiempo de actualizar reportes
     checkForMonthlyUpdate();

     // Configurar verificación diaria
     setDailyUpdateCheck();

     console.log('Sistema de actualización mensual inicializado');
}

// Verificar si es día de actualización mensual
function checkForMonthlyUpdate() {
     const today = new Date();
     const currentDay = today.getDate();
     const currentMonth = today.getMonth();
     const currentYear = today.getFullYear();

     // Obtener último mes de actualización guardado
     const lastUpdateKey = 'sh_company_last_update';
     const lastUpdate = localStorage.getItem(lastUpdateKey);
     const lastUpdateDate = lastUpdate ? new Date(lastUpdate) : null;

     // Verificar si es día 14 y no se ha actualizado este mes
     if (currentDay === CONFIG.reportUpdateDay) {
          const shouldUpdate = !lastUpdateDate ||
               lastUpdateDate.getMonth() !== currentMonth ||
               lastUpdateDate.getFullYear() !== currentYear;

          if (shouldUpdate) {
               performMonthlyUpdate();
               localStorage.setItem(lastUpdateKey, today.toISOString());
          }
     }

     // Mostrar notificación si hay datos nuevos disponibles
     showUpdateNotificationIfNeeded(lastUpdateDate);
}

// Realizar actualización mensual de métricas
function performMonthlyUpdate() {
     // Generar nuevas métricas para el mes anterior
     const newMetrics = generateMonthlyMetrics();

     // Actualizar métricas en memoria
     updateFixedMetrics(newMetrics);

     // Regenerar tabla
     regenerateMetricsTable();

     // Mostrar notificación de actualización
     showToast('📊 ¡Reportes actualizados! Nuevos datos del mes disponibles.', 'success');

     console.log('Actualización mensual completada:', new Date().toLocaleDateString('es-CO'));
}

// Generar métricas realistas para el nuevo mes
function generateMonthlyMetrics() {
     const today = new Date();
     const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
     const monthNames = [
          'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
          'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
     ];

     const newMonthName = `${monthNames[lastMonth.getMonth()]} ${lastMonth.getFullYear()}`;

     // Generar métricas realistas con variación controlada
     const baseAvailability = 98.5 + Math.random() * 1.5; // 98.5% - 100%
     const baseLatency = 14 + Math.floor(Math.random() * 6); // 14-19ms
     const baseSatisfaction = 96 + Math.random() * 3; // 96% - 99%

     const newMetric = {
          month: newMonthName,
          availability: baseAvailability.toFixed(1),
          latency: baseLatency.toString(),
          satisfaction: baseSatisfaction.toFixed(1),
          state: baseAvailability >= 99 ? 'Excelente' : 'Muy Bueno'
     };

     return newMetric;
}

// Actualizar array de métricas fijas
function updateFixedMetrics(newMetric) {
     // Agregar nuevo mes al inicio
     FIXED_METRICS.unshift(newMetric);

     // Mantener solo los últimos 6 meses
     if (FIXED_METRICS.length > 6) {
          FIXED_METRICS.pop();
     }

     // Guardar en localStorage para persistencia
     localStorage.setItem(CONFIG.metricsStorageKey, JSON.stringify(FIXED_METRICS));
}

// Regenerar tabla de métricas
function regenerateMetricsTable() {
     const metricsContainer = document.getElementById('metricas-mensuales');
     if (!metricsContainer) return;

     // Limpiar tabla existente
     metricsContainer.innerHTML = '';

     // Regenerar con nuevos datos
     initializeMonthlyMetrics();

     // Añadir efecto de actualización
     metricsContainer.style.opacity = '0';
     setTimeout(() => {
          metricsContainer.style.transition = 'opacity 0.5s ease';
          metricsContainer.style.opacity = '1';
     }, 100);
}

// Mostrar notificación si hay nuevos datos
function showUpdateNotificationIfNeeded(lastUpdateDate) {
     const today = new Date();

     if (!lastUpdateDate) return;

     // Si estamos después del día 14 y no se ha mostrado notificación este mes
     if (today.getDate() >= CONFIG.reportUpdateDay) {
          const notificationKey = `sh_notification_${today.getMonth()}_${today.getFullYear()}`;
          const notificationShown = localStorage.getItem(notificationKey);

          if (!notificationShown) {
               setTimeout(() => {
                    showToast('📅 Recordatorio: Nuevos reportes de calidad disponibles para descarga', 'info');
                    localStorage.setItem(notificationKey, 'shown');
               }, 3000);
          }
     }
}

// Configurar verificación diaria automática
function setDailyUpdateCheck() {
     // Verificar cada hora si es el día de actualización
     setInterval(() => {
          const now = new Date();
          // Solo verificar entre las 8 AM y 6 PM
          if (now.getHours() >= 8 && now.getHours() <= 18) {
               checkForMonthlyUpdate();
          }
     }, 3600000); // Cada hora (3,600,000 ms)
}

// Cargar métricas guardadas al iniciar
function loadSavedMetrics() {
     const savedMetrics = localStorage.getItem(CONFIG.metricsStorageKey);
     if (savedMetrics) {
          try {
               const parsedMetrics = JSON.parse(savedMetrics);
               if (Array.isArray(parsedMetrics) && parsedMetrics.length > 0) {
                    // Reemplazar métricas fijas con las guardadas
                    FIXED_METRICS.length = 0;
                    FIXED_METRICS.push(...parsedMetrics);
               }
          } catch (error) {
               console.warn('Error al cargar métricas guardadas:', error);
          }
     }
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

// Función para obtener información del próximo reporte
function getNextReportInfo() {
     const today = new Date();
     const currentMonth = today.getMonth();
     const currentYear = today.getFullYear();

     // Calcular próxima fecha de actualización
     let nextUpdateDate;
     if (today.getDate() < CONFIG.reportUpdateDay) {
          // Este mes, día 14
          nextUpdateDate = new Date(currentYear, currentMonth, CONFIG.reportUpdateDay);
     } else {
          // Próximo mes, día 14
          nextUpdateDate = new Date(currentYear, currentMonth + 1, CONFIG.reportUpdateDay);
     }

     const daysUntilNext = Math.ceil((nextUpdateDate - today) / (1000 * 60 * 60 * 24));

     return {
          nextDate: nextUpdateDate.toLocaleDateString('es-CO'),
          daysRemaining: daysUntilNext
     };
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

     try {
          // Crear nuevo documento PDF
          const { jsPDF } = window.jspdf;
          const doc = new jsPDF();

          // Configuración de colores y fuentes
          const primaryColor = [242, 92, 5]; // Color naranja de SH Company
          const darkColor = [33, 37, 41];
          const grayColor = [108, 117, 125];

          // Header del documento
          doc.setFillColor(...primaryColor);
          doc.rect(0, 0, 210, 25, 'F');

          doc.setTextColor(255, 255, 255);
          doc.setFontSize(20);
          doc.setFont(undefined, 'bold');
          doc.text('REPORTE DE CALIDAD - SH COMPANY SAS', 105, 15, { align: 'center' });

          // Información básica
          doc.setTextColor(...darkColor);
          doc.setFontSize(12);
          doc.setFont(undefined, 'normal');
          doc.text(`Fecha del Reporte: ${reportData.fecha}`, 20, 40);
          doc.text(`Estado General: ${reportData.estado}`, 20, 50);

          // Sección de indicadores principales
          doc.setFontSize(16);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(...primaryColor);
          doc.text('INDICADORES PRINCIPALES', 20, 70);

          // Línea decorativa
          doc.setDrawColor(...primaryColor);
          doc.setLineWidth(0.5);
          doc.line(20, 75, 190, 75);

          let yPosition = 90;

          // Disponibilidad
          doc.setFontSize(14);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(...darkColor);
          doc.text('🟢 Disponibilidad del Servicio:', 20, yPosition);
          doc.setFont(undefined, 'normal');
          doc.text(reportData.disponibilidad, 150, yPosition);
          yPosition += 10;
          doc.setFontSize(10);
          doc.setTextColor(...grayColor);
          doc.text('• Tiempo de actividad del servicio', 25, yPosition);
          yPosition += 8;
          doc.text('• Objetivo: ≥ 99%', 25, yPosition);
          yPosition += 8;
          const dispStatus = parseFloat(reportData.disponibilidad) >= 99 ? '✅ Cumplido' : '⚠️ Por debajo del objetivo';
          doc.text(`• Estado: ${dispStatus}`, 25, yPosition);
          yPosition += 20;

          // Latencia
          doc.setFontSize(14);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(...darkColor);
          doc.text('⚡ Latencia de Red:', 20, yPosition);
          doc.setFont(undefined, 'normal');
          doc.text(reportData.latencia, 150, yPosition);
          yPosition += 10;
          doc.setFontSize(10);
          doc.setTextColor(...grayColor);
          doc.text('• Tiempo de respuesta de la conexión', 25, yPosition);
          yPosition += 8;
          doc.text('• Objetivo: ≤ 20ms', 25, yPosition);
          yPosition += 8;
          const latStatus = parseInt(reportData.latencia) <= 20 ? '✅ Excelente' : '⚠️ Aceptable';
          doc.text(`• Estado: ${latStatus}`, 25, yPosition);
          yPosition += 20;

          // Satisfacción
          doc.setFontSize(14);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(...darkColor);
          doc.text('😊 Satisfacción del Cliente:', 20, yPosition);
          doc.setFont(undefined, 'normal');
          doc.text(reportData.satisfaccion, 150, yPosition);
          yPosition += 10;
          doc.setFontSize(10);
          doc.setTextColor(...grayColor);
          doc.text('• Encuestas y feedback de usuarios', 25, yPosition);
          yPosition += 8;
          doc.text('• Objetivo: ≥ 95%', 25, yPosition);
          yPosition += 8;
          const satStatus = parseFloat(reportData.satisfaccion) >= 95 ? '✅ Muy satisfactorio' : '⚠️ Mejorable';
          doc.text(`• Estado: ${satStatus}`, 25, yPosition);
          yPosition += 20;

          // Tabla de métricas históricas
          doc.setFontSize(16);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(...primaryColor);
          doc.text('MÉTRICAS HISTÓRICAS (Últimos 6 meses)', 20, yPosition);
          yPosition += 10;

          // Headers de tabla
          doc.setFillColor(240, 240, 240);
          doc.rect(20, yPosition, 170, 10, 'F');
          doc.setFontSize(10);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(...darkColor);
          doc.text('Mes', 25, yPosition + 7);
          doc.text('Disponibilidad', 65, yPosition + 7);
          doc.text('Latencia', 105, yPosition + 7);
          doc.text('Satisfacción', 130, yPosition + 7);
          doc.text('Estado', 165, yPosition + 7);
          yPosition += 15;

          // Datos de tabla
          doc.setFont(undefined, 'normal');
          FIXED_METRICS.forEach((metric, index) => {
               if (yPosition > 250) { // Nueva página si es necesario
                    doc.addPage();
                    yPosition = 30;
               }

               if (index % 2 === 0) {
                    doc.setFillColor(248, 249, 250);
                    doc.rect(20, yPosition - 5, 170, 10, 'F');
               }

               doc.setTextColor(...darkColor);
               doc.text(metric.month, 25, yPosition);
               doc.text(metric.availability + '%', 65, yPosition);
               doc.text(metric.latency + 'ms', 105, yPosition);
               doc.text(metric.satisfaction + '%', 130, yPosition);
               doc.text(metric.state, 165, yPosition);
               yPosition += 12;
          });

          yPosition += 10;

          // Footer del reporte
          if (yPosition > 220) {
               doc.addPage();
               yPosition = 30;
          }

          doc.setFontSize(14);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(...primaryColor);
          doc.text('CONTACTO Y SOPORTE', 20, yPosition);
          yPosition += 15;

          doc.setFontSize(10);
          doc.setFont(undefined, 'normal');
          doc.setTextColor(...darkColor);
          doc.text('📞 Email: internetjhs@gmail.com', 20, yPosition);
          yPosition += 10;
          doc.text('📞 Teléfono: (314) 868 6245 - (313) 536 2337', 20, yPosition);
          yPosition += 10;
          doc.text('📍 Dirección: Cll 25ª # 7ª 12, Ayapel, Córdoba', 20, yPosition);
          yPosition += 20;

          doc.setFontSize(12);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(...primaryColor);
          doc.text('PRÓXIMA ACTUALIZACIÓN', 20, yPosition);
          yPosition += 10;
          doc.setFont(undefined, 'normal');
          doc.setTextColor(...darkColor);

          const nextReportInfo = getNextReportInfo();
          doc.text(`• Próxima fecha: ${nextReportInfo.nextDate}`, 20, yPosition);
          yPosition += 8;
          doc.text(`• Días restantes: ${nextReportInfo.daysRemaining}`, 20, yPosition);
          yPosition += 8;
          doc.text('• Frecuencia: Mensual (día 14)', 20, yPosition);
          yPosition += 8;
          doc.text('• Actualización: Automática', 20, yPosition);
          yPosition += 8;
          doc.text('• Transparencia: 100%', 20, yPosition);

          // Footer final
          doc.setFontSize(8);
          doc.setTextColor(...grayColor);
          doc.text('Este reporte se actualiza automáticamente el día 14 de cada mes con los datos del mes anterior.', 105, 280, { align: 'center' });
          doc.text('© 2025 SH COMPANY SAS - Todos los derechos reservados', 105, 290, { align: 'center' });

          // Descargar el PDF
          const fileName = `Reporte-Calidad-SH-Company-${currentDate.toISOString().split('T')[0]}.pdf`;
          doc.save(fileName);

          showToast('✅ Reporte PDF descargado exitosamente', 'success');
     } catch (error) {
          console.error('Error al generar reporte PDF:', error);
          showToast('❌ Error al descargar el reporte PDF. Intente nuevamente.', 'danger');
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
