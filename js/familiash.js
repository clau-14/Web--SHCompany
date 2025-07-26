// ================== FAMILIA SH COMPANY - VERSIÓN ORGANIZADA ==================

// ==================== DATOS DEL EQUIPO ====================
const teamData = {
     birthdays: [
          { name: "Arnold José Trujillo Mejía", date: "2001-06-26", photo: "./image/personal/arnold.jpg", position: "Especialista en Redes" },
          { name: "Dairo Andres Sampayo", date: "1999-04-13", photo: "./image/personal/dairo.jpg", position: "Especialista en Instalaciones" },
          { name: "Leonardo José Cerra Salazar", date: "1993-11-10", photo: "./image/personal/leonardo.jpg", position: "Especialista en Tickets" },
          { name: "Isai Sampayo Delgado", date: "2002-06-20", photo: "./image/personal/isai.jpg", position: "Especialista en Tickets" },
          { name: "Hermis David Arrieta Cuello", date: "2003-01-24", photo: "./image/personal/hermis.jpg", position: "Especialista en Redes" },
          { name: "Frank Esney Alvarez Romero", date: "1976-12-11", photo: "./image/personal/frank.jpg", position: "Especialista en Redes y TV" },
          { name: "Camilo Alfonso de la Ossa Mestra", date: "2007-10-12", photo: "./image/personal/camilo.png", position: "Asistente Administrativo" },
          { name: "Margarita Maria Diaz Anaya", date: "1987-07-21", photo: "./image/personal/margarita.png", position: "Asistente Administrativo" },
          { name: "Sandra Patricia Galvis Quiñones", date: "1978-09-23", photo: "./image/personal/sandra.png", position: "Asistente Administrativo" },
          { name: "Alejandro David Jimenez Leon", date: "1979-12-09", photo: "./image/personal/alejandro.png", position: "Jefe Operativo" },
          { name: "Maria Fernanda Ruiz", date: "1979-12-09", photo: "./image/personal/maria.jpg", position: "Jefe Operativo" }
     ],

     galleryPhotos: [
          {
               id: 1,
               title: "Cumpleaños de Margarita",
               category: "cumpleanos",
               date: "2024-07-21",
               images: ["./image/cumple/cumplemargarita.jpeg", "./image/cumple/cumplemargarita2.jpeg"],
               description: "Celebración del cumpleaños de Margarita María Díaz Anaya."
          },
          {
               id: 2,
               title: "Cumpleaños de Arnold",
               category: "cumpleanos",
               date: "2025-06-26",
               images: ["./image/cumple/cumplearnold.jpeg", "./image/cumple/cumplearnold2.jpeg"],
               description: "Celebración del cumpleaños de Arnold José Trujillo Mejía."
          },
          {
               id: 3,
               title: "Cumpleaños de Isai",
               category: "cumpleanos",
               date: "2025-06-20",
               images: ["./image/cumple/cumpleisai1.jpeg", "./image/cumple/cumpleisai2.jpeg"],
               description: "Celebración del cumpleaños de Isai Sampayo Delgado."
          },

          {
               id: 4,
               title: "Cumpleaños de Dairo",
               category: "cumpleanos",
               date: "2025-04-13",
               images: ["./image/cumple/cumpledairo1.jpeg", "./image/cumple/cumpledairo2.jpeg"],
               description: "Celebración del cumpleaños de Dairo Andres Sampayo."
          },
          {
               id: 5,
               title: "Cumpleaños de Hermis",
               category: "cumpleanos",
               date: "2025-01-24",
               images: ["./image/cumple/cumplehermis1.jpeg", "./image/cumple/cumplehermis.jpeg"],
               description: "Celebración del cumpleaños de Hermis David Arrieta Cuello."
          },

          {
               id: 6,
               title: "Entrega de Camisas",
               category: "eventos",
               date: "2025-07-24",
               images: ["./image/eventos/camisas.jpeg"],
               description: "Entrega de camisas del equipo SH Company."
          },
          {
               id: 7,
               title: "Celebraciones de Equipo",
               category: "eventos",
               date: "2025-07-25",
               images: [
                    "./image/cumple/WhatsApp Image 2025-07-24 at 5.03.56 PM (1).jpeg",
                    "./image/cumple/WhatsApp Image 2025-07-24 at 5.03.56 PM (2).jpeg",
                    "./image/cumple/WhatsApp Image 2025-07-24 at 5.03.57 PM (1).jpeg",
                    "./image/cumple/WhatsApp Image 2025-07-24 at 5.03.57 PM (2).jpeg",
                    "./image/cumple/WhatsApp Image 2025-07-24 at 5.03.57 PM (3).jpeg"
               ],
               description: "Momentos especiales del equipo de SH Company."
          },
          {
               id: 8,
               title: "Actividades de Integración",
               category: "eventos",
               date: "2025-07-25",
               images: [
                    "./image/cumple/WhatsApp Image 2025-07-25 at 10.08.14 AM (2).jpeg",
                    "./image/cumple/WhatsApp Image 2025-07-25 at 10.08.14 AM (3).jpeg",
                    "./image/cumple/WhatsApp Image 2025-07-25 at 10.08.14 AM (4).jpeg",
                    "./image/cumple/WhatsApp Image 2025-07-25 at 10.08.15 AM (1).jpeg"
               ],
               description: "Actividades de integración y compañerismo del equipo."
          },
          {
               id: 9,
               title: "Aniversario SH Company",
               category: "aniversarios",
               date: "2024-06-15",
               images: ["./image/aniversario/aniversario1.jpg"],
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
     generateBirthdayCards();
     generateUpcomingBirthdays();
     setupGalleryFilters();
     setupCalendarNavigation();
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

          const hasBirthday = teamData.birthdays.some(person => {
               const [year, month, dayOfBirth] = person.date.split('-');
               return parseInt(month) - 1 === currentMonth && parseInt(dayOfBirth) === day;
          });

          if (hasBirthday) {
               dayElement.classList.add('has-birthday');
               dayElement.title = 'Cumpleaños hoy!';
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
               generateBirthdayCards();
          });
     }
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
                     onerror="this.src='./image/logo.png'">
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
                     onerror="this.src='./image/logo.png'">
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

     // Usar los valores directos sin conversión adicional de Date
     const birthdayThisYear = new Date(thisYear, parseInt(month) - 1, parseInt(day));
     birthdayThisYear.setHours(0, 0, 0, 0);

     if (birthdayThisYear < today) {
          const birthdayNextYear = new Date(thisYear + 1, parseInt(month) - 1, parseInt(day));
          birthdayNextYear.setHours(0, 0, 0, 0);
          const diffTime = birthdayNextYear - today;
          return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
     } else {
          const diffTime = birthdayThisYear - today;
          return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
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
               imageHtml = `<img src="${photo.images[0]}" alt="${photo.title}" onerror="this.src='./image/logo.png'">`;
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
                                   onerror="this.src='./image/logo.png'">
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
