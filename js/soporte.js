// =============================================
// SOPORTE TÉCNICO JAVASCRIPT - SH COMPANY SAS
// =============================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
     initializeSupportPage();
});

// ===== INICIALIZACIÓN DE LA PÁGINA =====
function initializeSupportPage() {
     setupWhatsAppButtons();
     setupPhoneButtons();
     setupEmailButton();
     setupVisitForm();
     setupFAQAnimations();
     setupScrollAnimations();
     console.log('Página de Soporte Técnico inicializada correctamente');
}

// ===== CONFIGURACIÓN DE BOTONES WHATSAPP =====
function setupWhatsAppButtons() {
     const whatsappButtons = document.querySelectorAll('.btn-whatsapp');

     whatsappButtons.forEach(button => {
          button.addEventListener('click', function (e) {
               e.preventDefault();

               const phoneNumber = this.dataset.phone;
               const message = encodeURIComponent(
                    '¡Hola! Necesito soporte técnico de SH COMPANY SAS. ' +
                    'Tengo un problema con mi servicio de internet.'
               );

               // Crear URL de WhatsApp
               const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

               // Abrir WhatsApp en nueva pestaña
               window.open(whatsappURL, '_blank');

               // Efecto visual de clic
               animateButtonClick(this);

               // Registro de analítica
               trackContactAction('whatsapp', phoneNumber);
          });
     });
}

// ===== CONFIGURACIÓN DE BOTONES TELÉFONO =====
function setupPhoneButtons() {
     const phoneButtons = document.querySelectorAll('.btn-phone');

     phoneButtons.forEach(button => {
          button.addEventListener('click', function (e) {
               e.preventDefault();

               const phoneNumber = this.dataset.phone;

               // Crear enlace tel:
               const telURL = `tel:${phoneNumber}`;
               window.location.href = telURL;

               // Efecto visual de clic
               animateButtonClick(this);

               // Mostrar notificación
               showNotification(`Llamando al ${phoneNumber}...`, 'info');

               // Registro de analítica
               trackContactAction('phone', phoneNumber);
          });
     });
}

// ===== CONFIGURACIÓN DE BOTÓN EMAIL =====
function setupEmailButton() {
     const emailButton = document.querySelector('.btn-email');

     if (emailButton) {
          emailButton.addEventListener('click', function (e) {
               e.preventDefault();

               const email = 'soporte@shcompany.com';
               const subject = encodeURIComponent('Solicitud de Soporte Técnico');
               const body = encodeURIComponent(
                    'Estimado equipo de SH COMPANY SAS,\n\n' +
                    'Necesito asistencia técnica con mi servicio de internet.\n\n' +
                    'Descripción del problema:\n' +
                    '- \n\n' +
                    'Información adicional:\n' +
                    '- Ubicación: \n' +
                    '- Tipo de servicio: \n' +
                    '- Teléfono de contacto: \n\n' +
                    'Quedo atento a su respuesta.\n\n' +
                    'Saludos cordiales.'
               );

               // Crear enlace mailto
               const mailtoURL = `mailto:${email}?subject=${subject}&body=${body}`;
               window.location.href = mailtoURL;

               // Efecto visual de clic
               animateButtonClick(this);

               // Mostrar notificación
               showNotification('Abriendo cliente de email...', 'info');

               // Registro de analítica
               trackContactAction('email', email);
          });
     }
}

// ===== CONFIGURACIÓN DEL FORMULARIO DE VISITA =====
function setupVisitForm() {
     const visitForm = document.getElementById('visitForm');

     if (visitForm) {
          visitForm.addEventListener('submit', function (e) {
               e.preventDefault();

               // Validar formulario
               if (validateVisitForm()) {
                    submitVisitRequest();
               }
          });

          // Configurar validación en tiempo real
          setupFormValidation();
     }
}

// ===== VALIDACIÓN DEL FORMULARIO =====
function validateVisitForm() {
     const form = document.getElementById('visitForm');
     const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
     let isValid = true;

     inputs.forEach(input => {
          if (!input.value.trim()) {
               showFieldError(input, 'Este campo es obligatorio');
               isValid = false;
          } else {
               clearFieldError(input);
          }

          // Validaciones específicas
          if (input.type === 'email' && !validateEmail(input.value)) {
               showFieldError(input, 'Ingrese un email válido');
               isValid = false;
          }

          if (input.type === 'tel' && !validatePhone(input.value)) {
               showFieldError(input, 'Ingrese un teléfono válido');
               isValid = false;
          }
     });

     return isValid;
}

// ===== VALIDACIÓN DE EMAIL =====
function validateEmail(email) {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
}

// ===== VALIDACIÓN DE TELÉFONO =====
function validatePhone(phone) {
     const phoneRegex = /^[\d\s\-\+\(\)]{7,15}$/;
     return phoneRegex.test(phone);
}

// ===== MOSTRAR ERROR EN CAMPO =====
function showFieldError(field, message) {
     clearFieldError(field);

     field.classList.add('is-invalid');

     const errorDiv = document.createElement('div');
     errorDiv.className = 'invalid-feedback';
     errorDiv.textContent = message;

     field.parentNode.appendChild(errorDiv);
}

// ===== LIMPIAR ERROR EN CAMPO =====
function clearFieldError(field) {
     field.classList.remove('is-invalid');

     const errorDiv = field.parentNode.querySelector('.invalid-feedback');
     if (errorDiv) {
          errorDiv.remove();
     }
}

// ===== CONFIGURAR VALIDACIÓN EN TIEMPO REAL =====
function setupFormValidation() {
     const form = document.getElementById('visitForm');
     const inputs = form.querySelectorAll('input, select, textarea');

     inputs.forEach(input => {
          input.addEventListener('blur', function () {
               if (this.hasAttribute('required') && !this.value.trim()) {
                    showFieldError(this, 'Este campo es obligatorio');
               } else {
                    clearFieldError(this);
               }
          });

          input.addEventListener('input', function () {
               if (this.classList.contains('is-invalid')) {
                    clearFieldError(this);
               }
          });
     });
}

// ===== ENVIAR SOLICITUD DE VISITA =====
function submitVisitRequest() {
     const form = document.getElementById('visitForm');
     const formData = new FormData(form);

     // Mostrar estado de carga
     const submitButton = form.querySelector('button[type="submit"]');
     const originalText = submitButton.textContent;

     submitButton.disabled = true;
     submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';

     // Simular envío (aquí integrarías con tu backend)
     setTimeout(() => {
          // Crear mensaje para WhatsApp con los datos del formulario
          const visitData = {
               nombre: formData.get('nombre'),
               telefono: formData.get('telefono'),
               email: formData.get('email'),
               direccion: formData.get('direccion'),
               tipoProblema: formData.get('tipoProblema'),
               fechaPreferida: formData.get('fechaPreferida'),
               horaPreferida: formData.get('horaPreferida'),
               descripcion: formData.get('descripcion')
          };

          // Crear mensaje para WhatsApp
          const whatsappMessage = createVisitWhatsAppMessage(visitData);

          // Enviar por WhatsApp al número principal
          const whatsappURL = `https://wa.me/573148686245?text=${encodeURIComponent(whatsappMessage)}`;
          window.open(whatsappURL, '_blank');

          // Restaurar botón y mostrar éxito
          submitButton.disabled = false;
          submitButton.textContent = originalText;

          showNotification('Solicitud enviada exitosamente', 'success');
          form.reset();

          // Registro de analítica
          trackContactAction('visit_request', 'form_submission');

     }, 2000);
}

// ===== CREAR MENSAJE DE WHATSAPP PARA VISITA =====
function createVisitWhatsAppMessage(data) {
     return `🔧 *SOLICITUD DE VISITA TÉCNICA*\n\n` +
          `👤 *Cliente:* ${data.nombre}\n` +
          `📞 *Teléfono:* ${data.telefono}\n` +
          `📧 *Email:* ${data.email}\n` +
          `📍 *Dirección:* ${data.direccion}\n\n` +
          `🛠️ *Tipo de Problema:* ${data.tipoProblema}\n` +
          `📅 *Fecha Preferida:* ${data.fechaPreferida}\n` +
          `⏰ *Hora Preferida:* ${data.horaPreferida}\n\n` +
          `📝 *Descripción:*\n${data.descripcion}\n\n` +
          `_Solicitud generada desde www.shcompany.com_`;
}

// ===== CONFIGURAR ANIMACIONES FAQ =====
function setupFAQAnimations() {
     const accordionButtons = document.querySelectorAll('.accordion-button');

     accordionButtons.forEach(button => {
          button.addEventListener('click', function () {
               // Efecto de animación suave
               setTimeout(() => {
                    const targetId = this.getAttribute('data-bs-target');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement && !this.classList.contains('collapsed')) {
                         targetElement.scrollIntoView({
                              behavior: 'smooth',
                              block: 'nearest'
                         });
                    }
               }, 350);
          });
     });
}

// ===== CONFIGURAR ANIMACIONES DE SCROLL =====
function setupScrollAnimations() {
     // Observador de intersección para animaciones
     const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
     };

     const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
               }
          });
     }, observerOptions);

     // Observar elementos animables
     const animatableElements = document.querySelectorAll(
          '.contact-card, .schedule-item, .faq-item, .visit-card'
     );

     animatableElements.forEach(el => {
          el.classList.add('animate-on-scroll');
          observer.observe(el);
     });
}

// ===== ANIMACIÓN DE CLIC EN BOTÓN =====
function animateButtonClick(button) {
     button.style.transform = 'scale(0.95)';

     setTimeout(() => {
          button.style.transform = '';
     }, 150);
}

// ===== MOSTRAR NOTIFICACIÓN =====
function showNotification(message, type = 'info') {
     // Crear elemento de notificación
     const notification = document.createElement('div');
     notification.className = `alert alert-${type} alert-dismissible position-fixed`;
     notification.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;

     notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)} me-2"></i>
        ${message}
        <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
    `;

     // Agregar al DOM
     document.body.appendChild(notification);

     // Animar entrada
     setTimeout(() => {
          notification.style.opacity = '1';
          notification.style.transform = 'translateX(0)';
     }, 100);

     // Auto-remover después de 5 segundos
     setTimeout(() => {
          if (notification.parentElement) {
               notification.style.opacity = '0';
               notification.style.transform = 'translateX(100%)';
               setTimeout(() => {
                    if (notification.parentElement) {
                         notification.remove();
                    }
               }, 300);
          }
     }, 5000);
}

// ===== OBTENER ICONO DE NOTIFICACIÓN =====
function getNotificationIcon(type) {
     const icons = {
          'success': 'check-circle',
          'info': 'info-circle',
          'warning': 'exclamation-triangle',
          'error': 'exclamation-circle'
     };

     return icons[type] || 'info-circle';
}

// ===== REGISTRO DE ANALÍTICA =====
function trackContactAction(method, contact) {
     // Aquí puedes integrar con Google Analytics, Facebook Pixel, etc.
     console.log(`Contacto registrado: ${method} - ${contact}`);

     // Ejemplo de integración con Google Analytics
     if (typeof gtag !== 'undefined') {
          gtag('event', 'contact_attempt', {
               'method': method,
               'contact': contact,
               'page': 'soporte-tecnico'
          });
     }
}

// ===== FUNCIONES AUXILIARES =====

// Función para formatear números de teléfono
function formatPhoneNumber(phone) {
     // Remover caracteres no numéricos
     const cleaned = phone.replace(/\D/g, '');

     // Formatear según el patrón colombiano
     if (cleaned.length === 10) {
          return `${cleaned.substring(0, 3)} ${cleaned.substring(3, 6)} ${cleaned.substring(6)}`;
     }

     return phone;
}

// Función para validar horario de atención
function isWithinBusinessHours() {
     const now = new Date();
     const hour = now.getHours();
     const day = now.getDay(); // 0 = Domingo, 6 = Sábado

     // Lunes a Viernes: 8:00 - 18:00
     if (day >= 1 && day <= 5) {
          return hour >= 8 && hour < 18;
     }

     // Sábados: 8:00 - 12:00
     if (day === 6) {
          return hour >= 8 && hour < 12;
     }

     // Domingos: Cerrado
     return false;
}

// Función para mostrar estado de atención
function updateBusinessHoursStatus() {
     const statusElement = document.querySelector('.business-hours-status');
     if (statusElement) {
          const isOpen = isWithinBusinessHours();

          statusElement.innerHTML = isOpen
               ? '<i class="fas fa-circle text-success me-2"></i>Abierto ahora'
               : '<i class="fas fa-circle text-danger me-2"></i>Cerrado ahora';
     }
}

// Inicializar estado de horarios al cargar
document.addEventListener('DOMContentLoaded', function () {
     updateBusinessHoursStatus();

     // Actualizar cada minuto
     setInterval(updateBusinessHoursStatus, 60000);
});

// ===== CSS ADICIONAL PARA ANIMACIONES =====
const animationStyles = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .animate-on-scroll.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .contact-card:nth-child(1) { transition-delay: 0.1s; }
    .contact-card:nth-child(2) { transition-delay: 0.2s; }
    .contact-card:nth-child(3) { transition-delay: 0.3s; }
    
    .faq-item:nth-child(1) { transition-delay: 0.1s; }
    .faq-item:nth-child(2) { transition-delay: 0.2s; }
    .faq-item:nth-child(3) { transition-delay: 0.3s; }
    .faq-item:nth-child(4) { transition-delay: 0.4s; }
    .faq-item:nth-child(5) { transition-delay: 0.5s; }
`;

// Agregar estilos de animación al head
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);
