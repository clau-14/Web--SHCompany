// ================== FAMILIA SH COMPANY - VERSIÓN ORGANIZADA ==================

// ==================== DATOS DEL EQUIPO ====================
const teamData = {
     birthdays: [
          { name: "Arnold José Trujillo Mejía", date: "2001-06-26", photo: "../image/personal/arnold.jpg", position: "Especialista en Redes" },
          { name: "Dairo Andres Sampayo", date: "1999-04-13", photo: "../image/personal/dairo.jpg", position: "Especialista en Instalaciones" },
          { name: "Leonardo José Cerra Salazar", date: "1993-11-10", photo: "../image/personal/leonardo.jpg", position: "Especialista en Tickets" },
          { name: "Isai Sampayo Delgado", date: "2002-06-20", photo: "../image/personal/isai.jpg", position: "Especialista en Tickets" },
          { name: "Hermis David Arrieta Cuello", date: "2003-01-24", photo: "../image/personal/hermis.jpg", position: "Especialista en Redes" },
          { name: "Frank Esney Alvarez Romero", date: "1976-12-11", photo: "../image/personal/frank.jpg", position: "Especialista en Redes y TV" },
          { name: "Camilo Alfonso de la Ossa Mestra", date: "2007-10-12", photo: "../image/personal/camilo.png", position: "Asistente Administrativo" },
          { name: "Margarita Maria Diaz Anaya", date: "1987-07-21", photo: "../image/personal/margarita.png", position: "Asistente Administrativo" },
          { name: "Sandra Patricia Galvis Quiñones", date: "1978-09-23", photo: "../image/personal/sandra.png", position: "Asistente Administrativo" },
          { name: "Alejandro David Jimenez Leon", date: "1979-12-09", photo: "../image/personal/alejandro.png", position: "Jefe Operativo" },
          { name: "Mateo Jimenez Galvis", date: "2002-11-16", photo: "../image/personal/mateo.jpg", position: "Ing. Industrial - Desarrollador de Software" },
          { name: "Francisco Jeronimo Jimenez Leon", date: "1981-09-29", photo: "../image/personal/francisco.jpg", position: "Sub-Gerente" },
          { name: "Rafael Francisco Paez Palencia", date: "2000-09-17", photo: "../image/personal/rafael.jpg", position: "Técnico Porcícola SH" },
          { name: "Eva sandith jaraba López", date: "1994-03-12", photo: "../image/personal/eva.jpg", position: "Auxiliar de Granja Porcícola SH" },
          { name: "Omar Segundo Salgado tobar", date: "1986-05-08", photo: "../image/personal/omar.jpg", position: "Auxiliar de Granja Porcícola SH" },
          { name: "Kelly Johana Mestra Hoyos", date: "1981-09-29", photo: "../image/personal/francisco.jpg", position: "Sub-Gerente" },
     ],

     specialDates: [
          { name: "Aniversario SH Company", date: "11-09", type: "company", icon: "fas fa-birthday-cake", color: "#f25c05" },
          { name: "Día del Trabajo", date: "05-01", type: "holiday", icon: "fas fa-hammer", color: "#28a745" },
          { name: "Día de la Independencia", date: "07-20", type: "holiday", icon: "fas fa-flag", color: "#dc3545" },
          { name: "Día de la Madre", date: "05-12", type: "holiday", icon: "fas fa-heart", color: "#e83e8c" },
          { name: "Día del Padre", date: "06-16", type: "holiday", icon: "fas fa-male", color: "#6f42c1" },
          { name: "Navidad", date: "12-25", type: "holiday", icon: "fas fa-tree", color: "#198754" },
          { name: "Año Nuevo", date: "01-01", type: "holiday", icon: "fas fa-star", color: "#ffc107" },
          { name: "Día de los Trabajadores de Telecomunicaciones", date: "05-17", type: "industry", icon: "fas fa-broadcast-tower", color: "#0dcaf0" },
          { name: "Reunión Mensual de Equipo", date: "monthly-first-friday", type: "meeting", icon: "fas fa-users", color: "#6610f2" },
          { name: "Evaluación de Desempeño", date: "quarterly-15", type: "company", icon: "fas fa-chart-line", color: "#fd7e14" }
     ],

     galleryPhotos: [
          {
               id: 1,
               title: "Cumpleaños de Margarita",
               category: "cumpleanos",
               date: "2024-07-21",
               images: ["../image/cumple/cumplemargarita.jpeg", "../image/cumple/cumplemargarita2.jpeg"],
               description: "Celebración del cumpleaños de Margarita María Díaz Anaya."
          },
          {
               id: 2,
               title: "Cumpleaños de Arnold",
               category: "cumpleanos",
               date: "2025-06-26",
               images: ["../image/cumple/cumplearnold.jpeg", "../image/cumple/cumplearnold2.jpeg"],
               description: "Celebración del cumpleaños de Arnold José Trujillo Mejía."
          },
          {
               id: 3,
               title: "Cumpleaños de Isai",
               category: "cumpleanos",
               date: "2025-06-20",
               images: ["../image/cumple/cumpleisai1.jpeg", "../image/cumple/cumpleisai2.jpeg"],
               description: "Celebración del cumpleaños de Isai Sampayo Delgado."
          },

          {
               id: 4,
               title: "Cumpleaños de Dairo",
               category: "cumpleanos",
               date: "2025-04-13",
               images: ["../image/cumple/cumpledairo1.jpeg", "../image/cumple/cumpledairo2.jpeg"],
               description: "Celebración del cumpleaños de Dairo Andres Sampayo."
          },
          {
               id: 5,
               title: "Cumpleaños de Hermis",
               category: "cumpleanos",
               date: "2025-01-24",
               images: ["../image/cumple/cumplehermis1.jpeg", "../image/cumple/cumplehermis.jpeg"],
               description: "Celebración del cumpleaños de Hermis David Arrieta Cuello."
          },

          {
               id: 6,
               title: "Entrega de Camisas",
               category: "eventos",
               date: "2025-07-24",
               images: ["../image/eventos/camisas.jpeg", "../image/eventos/camisas2.jpeg"],
               description: "Entrega de camisas del equipo SH Company."
          },
          {
               id: 9,
               title: "Aniversario SH Company 2024",
               category: "aniversarios",
               date: "2024-11-09",
               images: ["../image/aniversario/aniversario.jpg"],
               description: "Celebramos otro año de crecimiento y éxitos."
          }
     ]
};

// ==================== VARIABLES GLOBALES ====================
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', function () {
     initializeApp();
});

function initializeApp() {
     updateHeroStats();
     generateCalendar();
     generateTodayEvents();
     generateBirthdayCards();
     generateUpcomingBirthdays();
     setupGalleryFilters();
     setupCalendarNavigation();
     setupAutoRefresh();
     animateCounters();
}

// ==================== FUNCIONES PRINCIPALES ====================

function updateHeroStats() {
     const teamCount = teamData.birthdays.length;
     const birthdayCount = teamData.birthdays.filter(person => {
          const [year, month, day] = person.date.split('-');
          return parseInt(month) - 1 === new Date().getMonth();
     }).length;

     animateNumber('teamCount', teamCount);
     animateNumber('birthdayCount', birthdayCount);
}

function animateNumber(elementId, targetNumber) {
     const element = document.getElementById(elementId);
     if (!element) return;

     let current = 0;
     const increment = targetNumber / 30;
     const timer = setInterval(() => {
          current += increment;
          if (current >= targetNumber) {
               current = targetNumber;
               clearInterval(timer);
          }
          element.textContent = Math.floor(current);
     }, 50);
}

// ==================== FUNCIONES DE CALENDARIO ====================

function generateCalendar() {
     const calendarGrid = document.querySelector('.mini-calendar-grid');
     const currentMonthElement = document.getElementById('currentMonth');

     if (!calendarGrid || !currentMonthElement) return;

     currentMonthElement.textContent = `${months[currentMonth]} ${currentYear}`;

     const existingDays = calendarGrid.querySelectorAll('.mini-day');
     existingDays.forEach(day => day.remove());

     const firstDay = new Date(currentYear, currentMonth, 1).getDay();
     const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

     for (let i = 0; i < firstDay; i++) {
          const emptyDay = document.createElement('div');
          emptyDay.className = 'mini-day empty';
          calendarGrid.appendChild(emptyDay);
     }

     for (let day = 1; day <= daysInMonth; day++) {
          const dayElement = document.createElement('div');
          dayElement.className = 'mini-day';
          dayElement.textContent = day;

          // Verificar si es el día actual
          const today = new Date();
          const isToday = today.getFullYear() === currentYear &&
               today.getMonth() === currentMonth &&
               today.getDate() === day;

          // Verificar cumpleaños
          const hasBirthday = teamData.birthdays.some(person => {
               const [year, month, dayOfBirth] = person.date.split('-');
               return parseInt(month) - 1 === currentMonth && parseInt(dayOfBirth) === day;
          });

          // Verificar fechas especiales
          const hasSpecialEvent = teamData.specialDates.some(event => {
               const [month, dayOfEvent] = event.date.split('-');
               return parseInt(month) - 1 === currentMonth && parseInt(dayOfEvent) === day;
          });

          // Aplicar clases según el tipo de día
          if (isToday) {
               dayElement.classList.add('today');
          }

          if (hasBirthday) {
               dayElement.classList.add('has-birthday');
               dayElement.title = 'Cumpleaños hoy!';
          }

          if (hasSpecialEvent) {
               dayElement.classList.add('has-special-event');
               const events = getEventsForDate(currentMonth + 1, day);
               dayElement.title = events.map(e => e.name).join(', ');
          }

          // Si tiene ambos eventos
          if (hasBirthday && hasSpecialEvent) {
               dayElement.classList.add('has-multiple-events');
               const birthdayNames = getBirthdaysForDate(currentMonth + 1, day);
               const specialEvents = getEventsForDate(currentMonth + 1, day);
               dayElement.title = [...birthdayNames, ...specialEvents.map(e => e.name)].join(', ');
          }

          // Si es hoy y tiene eventos, agregar información al tooltip
          if (isToday) {
               let todayTitle = '📅 HOY';
               if (hasBirthday || hasSpecialEvent) {
                    const birthdayNames = getBirthdaysForDate(currentMonth + 1, day);
                    const specialEvents = getEventsForDate(currentMonth + 1, day);
                    const allEvents = [...birthdayNames, ...specialEvents.map(e => e.name)];
                    todayTitle += ' - ' + allEvents.join(', ');
               }
               dayElement.title = todayTitle;
          }

          calendarGrid.appendChild(dayElement);
     }
}

function setupCalendarNavigation() {
     const prevBtn = document.getElementById('prevMonth');
     const nextBtn = document.getElementById('nextMonth');

     if (prevBtn) {
          prevBtn.addEventListener('click', () => {
               currentMonth--;
               if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear--;
               }
               generateCalendar();
               generateTodayEvents();
               generateBirthdayCards();
          });
     }

     if (nextBtn) {
          nextBtn.addEventListener('click', () => {
               currentMonth++;
               if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
               }
               generateCalendar();
               generateTodayEvents();
               generateBirthdayCards();
          });
     }
}

// ==================== FUNCIONES DE EVENTOS ESPECIALES ====================

function getEventsForDate(month, day) {
     return teamData.specialDates.filter(event => {
          const [eventMonth, eventDay] = event.date.split('-');
          return parseInt(eventMonth) === month && parseInt(eventDay) === day;
     });
}

function getBirthdaysForDate(month, day) {
     return teamData.birthdays
          .filter(person => {
               const [year, personMonth, personDay] = person.date.split('-');
               return parseInt(personMonth) === month && parseInt(personDay) === day;
          })
          .map(person => `🎂 ${person.name}`);
}

function generateTodayEvents() {
     const container = document.getElementById('todayEvents');
     if (!container) return;

     const today = new Date();
     const todayMonth = today.getMonth() + 1;
     const todayDay = today.getDate();

     // Obtener cumpleaños de hoy
     const todayBirthdays = teamData.birthdays.filter(person => {
          const [year, month, day] = person.date.split('-');
          return parseInt(month) === todayMonth && parseInt(day) === todayDay;
     });

     // Obtener eventos especiales de hoy
     const todaySpecialEvents = getEventsForDate(todayMonth, todayDay);

     // Limpiar contenedor
     container.innerHTML = '';

     // Si no hay eventos hoy
     if (todayBirthdays.length === 0 && todaySpecialEvents.length === 0) {
          container.innerHTML = `
               <div class="today-events-card">
                    <div class="today-events-header">
                         <i class="fas fa-calendar-day me-2"></i>
                         <h4>Hoy, ${today.getDate()} de ${months[today.getMonth()]}</h4>
                    </div>
                    <div class="today-events-content">
                         <p class="text-muted text-center">
                              <i class="fas fa-smile me-2"></i>
                              No hay eventos especiales programados para hoy
                         </p>
                    </div>
               </div>`;
          return;
     }

     // Crear tarjeta de eventos de hoy
     let eventsHtml = `
          <div class="today-events-card">
               <div class="today-events-header">
                    <i class="fas fa-calendar-day me-2"></i>
                    <h4>¿Qué pasa hoy? - ${today.getDate()} de ${months[today.getMonth()]}</h4>
               </div>
               <div class="today-events-content">`;

     // Agregar cumpleaños
     if (todayBirthdays.length > 0) {
          eventsHtml += `<div class="event-section">`;
          todayBirthdays.forEach(person => {
               eventsHtml += `
                    <div class="event-item birthday-event">
                         <div class="event-icon">
                              <i class="fas fa-birthday-cake"></i>
                         </div>
                         <div class="event-details">
                              <h5>🎂 ¡Cumpleaños de ${person.name}!</h5>
                              <p>${person.position}</p>
                         </div>
                    </div>`;
          });
          eventsHtml += `</div>`;
     }

     // Agregar eventos especiales
     if (todaySpecialEvents.length > 0) {
          eventsHtml += `<div class="event-section">`;
          todaySpecialEvents.forEach(event => {
               eventsHtml += `
                    <div class="event-item special-event" style="border-left-color: ${event.color}">
                         <div class="event-icon" style="color: ${event.color}">
                              <i class="${event.icon}"></i>
                         </div>
                         <div class="event-details">
                              <h5>${event.name}</h5>
                              <p class="event-type">${getEventTypeLabel(event.type)}</p>
                         </div>
                    </div>`;
          });
          eventsHtml += `</div>`;
     }

     eventsHtml += `
               </div>
          </div>`;

     container.innerHTML = eventsHtml;
}

function getEventTypeLabel(type) {
     const labels = {
          'company': 'Evento de Empresa',
          'holiday': 'Día Festivo',
          'industry': 'Día de la Industria',
          'meeting': 'Reunión',
          'quarterly': 'Evento Trimestral'
     };
     return labels[type] || 'Evento Especial';
}

// ==================== FUNCIÓN DE AUTO-ACTUALIZACIÓN ====================

function setupAutoRefresh() {
     // Verificar si cambió el día cada 5 minutos
     setInterval(() => {
          const now = new Date();
          const nowDate = now.getDate();
          const nowMonth = now.getMonth();
          const nowYear = now.getFullYear();

          // Si cambió el día, actualizar todo
          if (nowDate !== currentDate.getDate() ||
               nowMonth !== currentDate.getMonth() ||
               nowYear !== currentDate.getFullYear()) {

               currentDate = now;

               // Solo actualizar si estamos viendo el mes actual
               if (currentMonth === nowMonth && currentYear === nowYear) {
                    generateCalendar();
                    generateTodayEvents();
                    updateHeroStats();
               }
          }
     }, 300000); // 5 minutos = 300,000 ms

     // También verificar al cambiar de pestaña/ventana (cuando el usuario regresa)
     document.addEventListener('visibilitychange', () => {
          if (!document.hidden) {
               const now = new Date();
               const nowDate = now.getDate();
               const nowMonth = now.getMonth();
               const nowYear = now.getFullYear();

               if (nowDate !== currentDate.getDate() ||
                    nowMonth !== currentDate.getMonth() ||
                    nowYear !== currentDate.getFullYear()) {

                    currentDate = now;

                    // Actualizar si estamos en el mes actual
                    if (currentMonth === nowMonth && currentYear === nowYear) {
                         generateCalendar();
                         generateTodayEvents();
                         updateHeroStats();
                    }
               }
          }
     });

     // Actualizar exactamente a medianoche
     const now = new Date();
     const tomorrow = new Date(now);
     tomorrow.setDate(tomorrow.getDate() + 1);
     tomorrow.setHours(0, 0, 0, 0);

     const msUntilMidnight = tomorrow.getTime() - now.getTime();

     setTimeout(() => {
          // Actualizar a medianoche
          currentDate = new Date();
          const newMonth = currentDate.getMonth();
          const newYear = currentDate.getFullYear();

          if (currentMonth === newMonth && currentYear === newYear) {
               generateCalendar();
               generateTodayEvents();
               updateHeroStats();
          }

          // Configurar actualizaciones diarias
          setInterval(() => {
               currentDate = new Date();
               const dayMonth = currentDate.getMonth();
               const dayYear = currentDate.getFullYear();

               if (currentMonth === dayMonth && currentYear === dayYear) {
                    generateCalendar();
                    generateTodayEvents();
                    updateHeroStats();
               }
          }, 86400000); // 24 horas = 86,400,000 ms

     }, msUntilMidnight);
}

// ==================== FUNCIONES DE CUMPLEAÑOS ====================

function generateBirthdayCards() {
     const container = document.getElementById('birthdayCards');
     if (!container) return;

     const monthBirthdays = teamData.birthdays.filter(person => {
          const [year, month, day] = person.date.split('-');
          return parseInt(month) - 1 === currentMonth;
     });

     container.innerHTML = '';

     if (monthBirthdays.length === 0) {
          container.innerHTML = '<p class="text-center">No hay cumpleaños este mes</p>';
          return;
     }

     monthBirthdays.forEach(person => {
          const card = document.createElement('div');
          card.className = 'col-12';
          card.innerHTML = `
            <div class="birthday-card">
                <img src="${person.photo}" alt="${person.name}" class="birthday-photo" 
                     onerror="this.src='../image/logo.png'">
                <div class="birthday-name">${person.name}</div>
                <div class="birthday-date">${formatDate(person.date)}</div>
                <div class="birthday-position">${person.position}</div>
            </div>
        `;
          container.appendChild(card);
     });
}

function generateUpcomingBirthdays() {
     const container = document.getElementById('upcomingBirthdays');
     if (!container) return;

     const upcomingBirthdays = teamData.birthdays
          .map(person => {
               const daysUntil = getDaysUntilBirthday(person.date);
               return { ...person, daysUntil: daysUntil };
          })
          .filter(person => person.daysUntil >= 0 && person.daysUntil <= 365)
          .sort((a, b) => a.daysUntil - b.daysUntil)
          .slice(0, 6);

     container.innerHTML = '';

     upcomingBirthdays.forEach(person => {
          const card = document.createElement('div');
          card.className = 'col-md-6 col-lg-4';
          card.innerHTML = `
            <div class="birthday-card">
                <img src="${person.photo}" alt="${person.name}" class="birthday-photo" 
                     onerror="this.src='../image/logo.png'">
                <div class="birthday-name">${person.name}</div>
                <div class="birthday-date">
                    ${person.daysUntil === 0 ? '¡Hoy!' : `En ${person.daysUntil} días`}
                </div>
                <div class="birthday-position">${person.position}</div>
            </div>
        `;
          container.appendChild(card);
     });
}

function getDaysUntilBirthday(birthdayDate) {
     const today = new Date();
     today.setHours(0, 0, 0, 0);

     const [year, month, day] = birthdayDate.split('-');
     const thisYear = today.getFullYear();

     // Crear la fecha del cumpleaños este año
     const birthdayThisYear = new Date(thisYear, parseInt(month) - 1, parseInt(day));
     birthdayThisYear.setHours(0, 0, 0, 0);

     // Si el cumpleaños ya pasó este año, calcular para el siguiente año
     if (birthdayThisYear < today) {
          const birthdayNextYear = new Date(thisYear + 1, parseInt(month) - 1, parseInt(day));
          birthdayNextYear.setHours(0, 0, 0, 0);
          const diffTime = birthdayNextYear.getTime() - today.getTime();
          return Math.floor(diffTime / (1000 * 60 * 60 * 24));
     } else {
          // El cumpleaños es hoy o en el futuro este año
          const diffTime = birthdayThisYear.getTime() - today.getTime();
          return Math.floor(diffTime / (1000 * 60 * 60 * 24));
     }
}

// ==================== FUNCIONES DE GALERÍA ====================

function setupGalleryFilters() {
     const filterButtons = document.querySelectorAll('.filter-btn');

     if (filterButtons.length === 0) return;

     filterButtons.forEach((button, index) => {
          if (index === 0) {
               button.classList.add('active');
               const category = button.getAttribute('data-filter');
               showPhotosByCategory(category);
          }

          button.addEventListener('click', function () {
               filterButtons.forEach(btn => btn.classList.remove('active'));
               this.classList.add('active');
               const category = this.getAttribute('data-filter');
               showPhotosByCategory(category);
          });
     });

     // Inicializar estadísticas de la galería
     updateGalleryStats();
}

function showPhotosByCategory(category) {
     const container = document.getElementById('galleryGrid');
     if (!container) return;

     const filteredPhotos = teamData.galleryPhotos.filter(photo => photo.category === category);
     container.innerHTML = '';

     if (filteredPhotos.length === 0) {
          container.innerHTML = `
               <div class="col-12 text-center py-5">
                    <i class="fas fa-images fa-3x text-muted mb-3"></i>
                    <p class="text-muted">No hay fotos disponibles para esta categoría</p>
               </div>`;
          return;
     }

     filteredPhotos.forEach(photo => {
          const photoElement = document.createElement('div');
          photoElement.className = 'gallery-item';
          photoElement.setAttribute('data-aos', 'fade-up');
          photoElement.setAttribute('data-aos-delay', '100');

          let imageHtml = '';
          if (photo.images.length > 1) {
               imageHtml = createCarouselHtml(photo);
          } else {
               imageHtml = `<img src="${photo.images[0]}" alt="${photo.title}" onerror="this.src='../image/logo.png'">`;
          }

          // Escapar las comillas en los parámetros para evitar errores en el onclick
          const escapedTitle = photo.title.replace(/'/g, "\\'");
          const escapedDescription = photo.description.replace(/'/g, "\\'");

          photoElement.innerHTML = `
               ${imageHtml}
               <div class="gallery-content">
                    <h4>${photo.title}</h4>
                    <p class="date">
                         <i class="fas fa-calendar-alt me-2"></i>
                         ${formatDate(photo.date)}
                    </p>
                    <p class="description">${photo.description}</p>
                    <div class="gallery-actions">
                         <button class="btn btn-sm btn-primary" onclick="openPhotoModal('${photo.images[0]}', '${escapedTitle}', '${photo.date}', '${escapedDescription}')">
                              <i class="fas fa-eye me-1"></i>Ver más
                         </button>
                    </div>
               </div>`;

          container.appendChild(photoElement);
     });

     // Reinicializar AOS para las nuevas imágenes
     if (typeof AOS !== 'undefined') {
          AOS.refresh();
     }

     // Actualizar estadísticas después de cargar las fotos
     updateGalleryStats();
}

function createCarouselHtml(photo) {
     return `
          <div id="carousel-${photo.id}" class="carousel slide" data-bs-ride="false">
               <div class="carousel-inner">
                    ${photo.images.map((image, index) => `
                         <div class="carousel-item ${index === 0 ? 'active' : ''}">
                              <img src="${image}" alt="${photo.title}" class="d-block w-100" 
                                   onerror="this.src='../image/logo.png'">
                         </div>
                    `).join('')}
               </div>
               ${photo.images.length > 1 ? `
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${photo.id}" data-bs-slide="prev">
                         <span class="carousel-control-prev-icon"></span>
                         <span class="visually-hidden">Anterior</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-${photo.id}" data-bs-slide="next">
                         <span class="carousel-control-next-icon"></span>
                         <span class="visually-hidden">Siguiente</span>
                    </button>
                    <div class="carousel-indicators">
                         ${photo.images.map((_, index) => `
                              <button type="button" data-bs-target="#carousel-${photo.id}" data-bs-slide-to="${index}" 
                                      ${index === 0 ? 'class="active" aria-current="true"' : ''} 
                                      aria-label="Imagen ${index + 1}"></button>
                         `).join('')}
                    </div>
               ` : ''}
          </div>`;
}

function openPhotoModal(image, title, date, description) {
     const modal = document.getElementById('photoModal');
     const modalImage = document.getElementById('modalImage');
     const modalTitle = document.getElementById('modalTitle');
     const modalDate = document.getElementById('modalDate');
     const modalDescription = document.getElementById('modalDescription');

     if (modal && modalImage && modalTitle && modalDate && modalDescription) {
          modalImage.src = image;
          modalImage.alt = title;
          modalTitle.textContent = title;
          modalDate.innerHTML = `<i class="fas fa-calendar-alt me-2"></i>${formatDate(date)}`;
          modalDescription.textContent = description;

          const bootstrapModal = new bootstrap.Modal(modal);
          bootstrapModal.show();
     }
}

function updateGalleryStats() {
     // Verificar que tenemos los datos de galería
     if (!teamData.galleryPhotos) return;

     const stats = {
          cumpleanos: teamData.galleryPhotos.filter(p => p.category === 'cumpleanos').length,
          eventos: teamData.galleryPhotos.filter(p => p.category === 'eventos').length,
          navidad: teamData.galleryPhotos.filter(p => p.category === 'navidad').length,
          aniversarios: teamData.galleryPhotos.filter(p => p.category === 'aniversarios').length
     };

     // Animar los contadores con los nuevos valores
     const elements = {
          birthdayPhotos: stats.cumpleanos,
          achievementPhotos: stats.eventos,
          teamPhotos: stats.navidad,
          totalMoments: teamData.galleryPhotos.length
     };

     Object.entries(elements).forEach(([elementId, value]) => {
          animateNumber(elementId, value);
     });
}

// ==================== FUNCIONES AUXILIARES ====================

function formatDate(dateString) {
     const [year, month, day] = dateString.split('-');
     const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

     // Asegurar que usamos la fecha local correcta
     const dayNumber = parseInt(day);
     const monthName = months[parseInt(month) - 1];
     return `${dayNumber} de ${monthName}`;
}

function animateCounters() {
     const counters = document.querySelectorAll('.stat-number');
     const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.textContent);
                    animateNumber(counter.id, target);
                    observer.unobserve(counter);
               }
          });
     });

     counters.forEach(counter => {
          observer.observe(counter);
     });
}
