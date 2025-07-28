// =============================================
// PQRS JavaScript - SH COMPANY SAS
// Sistema de Peticiones, Quejas, Reclamos y Sugerencias
// =============================================

// Función para mostrar modal de confirmación bonito
function mostrarModalConfirmacion(datos) {
     // Crear el modal HTML
     const modalHTML = `
    <div class="modal fade" id="confirmacionModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content" style="border: none; border-radius: 20px; overflow: hidden;">
          <!-- Header del modal -->
          <div style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 2rem; text-align: center;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">
              <i class="fas fa-check-circle"></i>
            </div>
            <h2 style="margin: 0; font-weight: 800;">¡${datos.tipoPQRS} Enviada Exitosamente!</h2>
            <p style="margin: 1rem 0 0 0; opacity: 0.9; font-size: 1.1rem;">Gracias por contactarnos, ${datos.nombres}</p>
          </div>
          
          <!-- Cuerpo del modal -->
          <div style="padding: 2rem;">
            <!-- Número de radicado destacado -->
            <div style="text-align: center; margin-bottom: 2rem;">
              <div style="background: linear-gradient(135deg, #f25c05, #ff8a47); color: white; padding: 1rem 2rem; border-radius: 50px; display: inline-block; font-weight: bold; font-size: 1.2rem;">
                <i class="fas fa-file-alt me-2"></i>
                Número de Radicado: ${datos.radicado}
              </div>
            </div>
            
            <!-- Información importante -->
            <div class="row g-3">
              <div class="col-md-6">
                <div style="background: #e8f5e8; padding: 1.5rem; border-radius: 15px; border-left: 5px solid #28a745;">
                  <h5 style="color: #28a745; margin-bottom: 1rem;">
                    <i class="fas fa-clock me-2"></i>Tiempo de Respuesta
                  </h5>
                  <p style="margin: 0; color: #2c3e50;">Te responderemos en un máximo de <strong>15 días hábiles</strong></p>
                </div>
              </div>
              
              <div class="col-md-6">
                <div style="background: #fff3e0; padding: 1.5rem; border-radius: 15px; border-left: 5px solid #f25c05;">
                  <h5 style="color: #f25c05; margin-bottom: 1rem;">
                    <i class="fas fa-envelope me-2"></i>Confirmación
                  </h5>
                  <p style="margin: 0; color: #2c3e50;">Recibirás un correo de confirmación con todos los detalles</p>
                </div>
              </div>
            </div>
            
            <!-- Contacto de emergencia -->
            <div style="background: linear-gradient(135deg, #e3f2fd, #bbdefb); padding: 1.5rem; border-radius: 15px; margin-top: 1.5rem; text-align: center;">
              <h5 style="color: #1976d2; margin-bottom: 1rem;">
                <i class="fas fa-phone-alt me-2"></i>¿Necesitas Atención Inmediata?
              </h5>
              <div class="row">
                <div class="col-6">
                  <a href="https://api.whatsapp.com/send?phone=%2B573148686245&text=Hola%2C%20mi%20número%20de%20radicado%20es%20${datos.radicado}" 
                     target="_blank" 
                     style="background: #25d366; color: white; padding: 0.8rem; border-radius: 10px; text-decoration: none; display: block; font-weight: bold;">
                    <i class="fab fa-whatsapp me-2"></i>WhatsApp<br>
                    <small>(314) 868 6245</small>
                  </a>
                </div>
                <div class="col-6">
                  <a href="tel:3135362337" 
                     style="background: #1976d2; color: white; padding: 0.8rem; border-radius: 10px; text-decoration: none; display: block; font-weight: bold;">
                    <i class="fas fa-phone me-2"></i>Teléfono<br>
                    <small>(313) 536 2337</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Footer del modal -->
          <div style="background: #f8f9fa; padding: 1.5rem; text-align: center;">
            <button type="button" class="btn" style="background: linear-gradient(135deg, #f25c05, #ff8a47); color: white; border: none; padding: 0.8rem 2rem; border-radius: 25px; font-weight: bold;" data-bs-dismiss="modal">
              <i class="fas fa-thumbs-up me-2"></i>¡Perfecto!
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

     // Agregar el modal al DOM
     document.body.insertAdjacentHTML('beforeend', modalHTML);

     // Mostrar el modal
     const modal = new bootstrap.Modal(document.getElementById('confirmacionModal'));
     modal.show();

     // Eliminar el modal del DOM cuando se cierre
     document.getElementById('confirmacionModal').addEventListener('hidden.bs.modal', function () {
          this.remove();
     });
}

// Función para mostrar loading en el botón
function mostrarLoading(btn) {
     btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
     btn.disabled = true;
}

// Función para ocultar loading en el botón
function ocultarLoading(btn) {
     btn.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Enviar PQRS';
     btn.disabled = false;
}

// Función para manejar el envío del formulario PQRS
function enviarFormularioPQRS(event) {
     event.preventDefault();

     const form = event.target;
     const submitBtn = form.querySelector('button[type="submit"]');

     mostrarLoading(submitBtn);

     // Crear FormData
     const formData = new FormData(form);

     // Enviar datos al servidor PHP
     fetch('pqrs.php', {
          method: 'POST',
          body: formData
     })
          .then(response => {
               console.log('Status:', response.status);
               console.log('StatusText:', response.statusText);

               if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
               }

               return response.text(); // Primero obtenemos el texto
          })
          .then(text => {
               console.log('Response text:', text);

               try {
                    const data = JSON.parse(text); // Luego intentamos parsearlo
                    ocultarLoading(submitBtn);

                    if (data.success) {
                         // Mostrar modal de confirmación bonito
                         mostrarModalConfirmacion(data);

                         // Limpiar el formulario
                         form.reset();
                    } else {
                         // Mostrar error
                         alert('Error: ' + data.message);
                    }
               } catch (jsonError) {
                    ocultarLoading(submitBtn);
                    console.error('JSON Parse Error:', jsonError);
                    console.error('Response text was:', text);
                    alert('Error: La respuesta del servidor no es válida. Por favor, revisa la consola para más detalles.');
               }
          })
          .catch(error => {
               ocultarLoading(submitBtn);
               console.error('Fetch Error:', error);
               alert('Error al enviar la solicitud: ' + error.message);
          });
}

// Función para inicializar las animaciones de scroll
function inicializarAnimaciones() {
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

     // Aplicar animaciones a las tarjetas
     document.querySelectorAll('.pqrs-type-card, .pqrs-info-card').forEach(card => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)';
          card.style.transition = 'all 0.6s ease';
          observer.observe(card);
     });
}

// Función para validar formulario en tiempo real
function validarFormulario() {
     const form = document.getElementById('pqrsForm');
     const campos = form.querySelectorAll('input[required], select[required], textarea[required]');

     campos.forEach(campo => {
          campo.addEventListener('blur', function () {
               if (!this.value.trim()) {
                    this.classList.add('is-invalid');
               } else {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
               }
          });

          campo.addEventListener('input', function () {
               if (this.value.trim()) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
               }
          });
     });
}

// Función para mostrar tooltips informativos
function inicializarTooltips() {
     // Agregar tooltips a los iconos de información
     const iconosInfo = document.querySelectorAll('.fas.fa-info-circle');
     iconosInfo.forEach(icono => {
          icono.setAttribute('data-bs-toggle', 'tooltip');
          icono.setAttribute('data-bs-placement', 'top');
     });

     // Inicializar tooltips de Bootstrap
     if (typeof bootstrap !== 'undefined') {
          const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
          tooltipTriggerList.map(function (tooltipTriggerEl) {
               return new bootstrap.Tooltip(tooltipTriggerEl);
          });
     }
}

// Función para mostrar información contextual según el tipo de PQRS seleccionado
function mostrarInformacionContextual() {
     const selectTipo = document.getElementById('tipoPQRS');

     selectTipo.addEventListener('change', function () {
          const tipoSeleccionado = this.value;
          const descripcionTextarea = document.getElementById('descripcion');

          let placeholder = '';

          switch (tipoSeleccionado) {
               case 'peticion':
                    placeholder = 'Describe qué información o servicio necesitas. Incluye detalles específicos sobre tu consulta.';
                    break;
               case 'queja':
                    placeholder = 'Describe tu inconformidad con el servicio o atención recibida. Incluye fechas, horarios y detalles específicos.';
                    break;
               case 'reclamo':
                    placeholder = 'Describe el problema específico con tu servicio o facturación. Incluye número de contrato, fechas y cualquier documentación relevante.';
                    break;
               case 'sugerencia':
                    placeholder = 'Comparte tu idea o sugerencia para mejorar nuestros servicios. Explica cómo crees que podríamos mejorar.';
                    break;
               default:
                    placeholder = 'Describe detalladamente tu solicitud, incluyendo fechas, horarios y cualquier información relevante que nos ayude a resolver tu caso de manera efectiva.';
          }

          descripcionTextarea.placeholder = placeholder;
     });
}

// Función principal que se ejecuta cuando el DOM está cargado
function inicializarPQRS() {
     // Verificar que el formulario existe
     const form = document.getElementById('pqrsForm');
     if (!form) {
          console.warn('Formulario PQRS no encontrado');
          return;
     }

     // Agregar event listener al formulario
     form.addEventListener('submit', enviarFormularioPQRS);

     // Inicializar todas las funcionalidades
     inicializarAnimaciones();
     validarFormulario();
     inicializarTooltips();
     mostrarInformacionContextual();
     inicializarScrollSuave();

     console.log('Sistema PQRS inicializado correctamente');
}

// Función para scroll suave
function inicializarScrollSuave() {
     // Scroll suave para el botón CTA
     const ctaBtn = document.querySelector('.pqrs-cta-btn');
     if (ctaBtn) {
          ctaBtn.addEventListener('click', function (e) {
               e.preventDefault();
               const target = document.querySelector('#pqrsForm');
               if (target) {
                    target.scrollIntoView({
                         behavior: 'smooth',
                         block: 'start'
                    });
               }
          });
     }

     // Scroll suave para la flecha
     const scrollArrow = document.querySelector('.scroll-arrow');
     if (scrollArrow) {
          scrollArrow.addEventListener('click', function () {
               const target = document.querySelector('.pqrs-types-section');
               if (target) {
                    target.scrollIntoView({
                         behavior: 'smooth',
                         block: 'start'
                    });
               }
          });
     }

     // Efectos de parallax ligeros en el header
     window.addEventListener('scroll', function () {
          const scrolled = window.pageYOffset;
          const particles = document.querySelectorAll('.pqrs-particle');
          const bgShapes = document.querySelectorAll('.pqrs-bg-shape');

          particles.forEach((particle, index) => {
               const speed = (index + 1) * 0.2;
               particle.style.transform = `translateY(${scrolled * speed}px)`;
          });

          bgShapes.forEach((shape, index) => {
               const speed = (index + 1) * 0.1;
               shape.style.transform = `translateY(${scrolled * speed}px)`;
          });
     });

     // Animaciones de entrada para los indicadores de tipos
     const typeIndicators = document.querySelectorAll('.type-indicator');
     typeIndicators.forEach((indicator, index) => {
          indicator.style.opacity = '0';
          indicator.style.transform = 'translateY(30px)';

          setTimeout(() => {
               indicator.style.transition = 'all 0.6s ease';
               indicator.style.opacity = '1';
               indicator.style.transform = 'translateY(0)';
          }, 2000 + (index * 200));
     });
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', inicializarPQRS);

// También ejecutar si el script se carga después del DOM
if (document.readyState === 'loading') {
     document.addEventListener('DOMContentLoaded', inicializarPQRS);
} else {
     inicializarPQRS();
}
