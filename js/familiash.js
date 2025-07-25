// ================== FAMILIA SH COMPANY - OPTIMIZADO ==================
// Datos del equipo
const teamData = {
     birthdays: [
          { name: "Arnold José Trujillo Mejía", date: "1990-06-26", photo: "./image/personal/arnold.jpg", position: "Especialista en Redes" },
          { name: "Dairo Andres Sampayo", date: "1988-04-13", photo: "./image/personal/dairo.jpg", position: "Especialista en Instalaciones" },
          { name: "Leonardo José Cerra Salazar", date: "1992-11-10", photo: "./image/personal/leonardo.jpg", position: "Especialista en Tickets" },
          { name: "Isai Sampayo Delgado", date: "1995-06-20", photo: "./image/personal/isai.jpg", position: "Especialista en Tickets" },
          { name: "Hermis David Arrieta Cuello", date: "1987-01-24", photo: "./image/personal/hermis.jpg", position: "Especialista en Redes" },
          { name: "Frank Esney Alvarez Romero", date: "1989-12-11", photo: "./image/personal/frank.jpg", position: "Especialista en Redes y TV" },
          { name: "Camilo Alfonso de la Ossa Mestra", date: "1993-10-12", photo: "./image/personal/camilo.png", position: "Asistente Administrativo" },
          { name: "Margarita Maria Diaz Anaya", date: "1991-07-21", photo: "./image/personal/margarita.png", position: "Asistente Administrativo" },
          { name: "Sandra Patricia Galvis Quiñones", date: "1994-09-23", photo: "./image/personal/sandra.png", position: "Asistente Administrativo" },
          { name: "Alejandro David Jimenez Leon", date: "1986-12-28", photo: "./image/personal/alejandro.png", position: "Jefe Operativo" }
     ],

     galleryPhotos: [
          { id: 1, title: "Cumpleaños de Arnold", category: "cumpleanos", date: "2024-06-26", image: "./image/img1.jpeg", description: "Celebración del cumpleaños de Arnold con todo el equipo." },
          { id: 2, title: "Cumpleaños de Dairo", category: "cumpleanos", date: "2024-04-13", image: "./image/img2.jpeg", description: "Dairo celebró su cumpleaños con la familia SH." },
          { id: 3, title: "Aniversario SH Company", category: "eventos", date: "2024-06-15", image: "./image/img3.jpeg", description: "Celebramos otro año de crecimiento y éxitos." },
          { id: 4, title: "Día de la Familia", category: "eventos", date: "2024-07-30", image: "./image/img4.jpeg", description: "Un día especial para celebrar nuestra unión." },
          { id: 5, title: "Navidad 2024", category: "navidad", date: "2024-12-24", image: "./image/img5.jpeg", description: "Celebración navideña en la oficina." },
          { id: 6, title: "Fin de Año", category: "navidad", date: "2024-12-31", image: "./image/img6.jpeg", description: "Despedimos el año con alegría." },
          { id: 7, title: "3 Años de Hermis", category: "aniversarios", date: "2024-05-18", image: "./image/ayapel.jpeg", description: "Hermis cumple 3 años con nosotros." },
          { id: 8, title: "Nuevo Colaborador", category: "aniversarios", date: "2024-08-10", image: "./image/ayapel.png", description: "Bienvenida a un nuevo miembro del equipo." }
     ]
};

// Variables globales
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// ================== INICIALIZACIÓN ==================
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

// ================== ESTADÍSTICAS DEL HERO ==================
function updateHeroStats() {
     const teamCount = teamData.birthdays.length;
     const currentMonth = new Date().getMonth();
     const birthdayCount = teamData.birthdays.filter(person => {
          const birthMonth = new Date(person.date).getMonth();
          return birthMonth === currentMonth;
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

// ================== CALENDARIO ==================
function generateCalendar() {
     const calendarGrid = document.querySelector('.mini-calendar-grid');
     const currentMonthElement = document.getElementById('currentMonth');

     if (!calendarGrid || !currentMonthElement) return;

     currentMonthElement.textContent = `${months[currentMonth]} ${currentYear}`;

     // Limpiar días existentes
     const existingDays = calendarGrid.querySelectorAll('.mini-day');
     existingDays.forEach(day => day.remove());

     const firstDay = new Date(currentYear, currentMonth, 1).getDay();
     const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

     // Días vacíos al inicio
     for (let i = 0; i < firstDay; i++) {
          const emptyDay = document.createElement('div');
          emptyDay.className = 'mini-day empty';
          calendarGrid.appendChild(emptyDay);
     }

     // Días del mes
     for (let day = 1; day <= daysInMonth; day++) {
          const dayElement = document.createElement('div');
          dayElement.className = 'mini-day';
          dayElement.textContent = day;

          // Verificar si hay cumpleaños
          const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const hasBirthday = teamData.birthdays.some(person => person.date === dateString);

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

// ================== CUMPLEAÑOS ==================
function generateBirthdayCards() {
     const container = document.getElementById('birthdayCards');
     if (!container) return;

     const monthBirthdays = teamData.birthdays.filter(person => {
          const birthMonth = new Date(person.date).getMonth();
          return birthMonth === currentMonth;
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

     const today = new Date();

     const upcomingBirthdays = teamData.birthdays
          .map(person => {
               const daysUntil = getDaysUntilBirthday(person.date);
               return {
                    ...person,
                    daysUntil: daysUntil
               };
          })
          .filter(person => person.daysUntil >= 0 && person.daysUntil <= 365)
          .sort((a, b) => a.daysUntil - b.daysUntil)
          .slice(0, 6);

     container.innerHTML = '';

     if (upcomingBirthdays.length === 0) {
          container.innerHTML = '<p class="text-center col-12">No hay próximos cumpleaños</p>';
          return;
     }

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
} function getDaysUntilBirthday(birthdayDate) {
     const today = new Date();
     today.setHours(0, 0, 0, 0); // Normalizar a medianoche

     const birthday = new Date(birthdayDate);
     const thisYear = today.getFullYear();

     // Crear fecha de cumpleaños para este año
     const birthdayThisYear = new Date(thisYear, birthday.getMonth(), birthday.getDate());

     // Si el cumpleaños ya pasó este año, calcular para el próximo año
     if (birthdayThisYear < today) {
          const birthdayNextYear = new Date(thisYear + 1, birthday.getMonth(), birthday.getDate());
          const diffTime = birthdayNextYear - today;
          return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
     } else {
          const diffTime = birthdayThisYear - today;
          return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
     }
}

// ================== GALERÍA ==================
function setupGalleryFilters() {
     const filterButtons = document.querySelectorAll('.filter-btn');

     filterButtons.forEach(button => {
          button.addEventListener('click', function () {
               // Remover clase active de todos los botones
               filterButtons.forEach(btn => btn.classList.remove('active'));
               // Agregar clase active al botón clickeado
               this.classList.add('active');

               const category = this.getAttribute('data-filter');
               showPhotosByCategory(category);
          });
     });
}

function showPhotosByCategory(category) {
     const container = document.getElementById('galleryGrid');
     if (!container) return;

     const filteredPhotos = teamData.galleryPhotos.filter(photo => photo.category === category);

     container.innerHTML = '';

     if (filteredPhotos.length === 0) {
          container.innerHTML = '<p class="text-center col-12">No hay fotos disponibles para esta categoría</p>';
          return;
     }

     filteredPhotos.forEach(photo => {
          const photoElement = document.createElement('div');
          photoElement.className = 'gallery-item';
          photoElement.innerHTML = `
            <img src="${photo.image}" alt="${photo.title}" 
                 onerror="this.src='./image/logo.png'">
            <div class="gallery-item-content">
                <h4 class="gallery-item-title">${photo.title}</h4>
                <p class="gallery-item-date">${formatDate(photo.date)}</p>
                <p class="gallery-item-description">${photo.description}</p>
            </div>
        `;

          photoElement.addEventListener('click', () => {
               openPhotoModal(photo.image, photo.title, photo.date, photo.description);
          });

          container.appendChild(photoElement);
     });

     updateGalleryStats();
}

function openPhotoModal(image, title, date, description) {
     const modal = document.getElementById('photoModal');
     const modalImage = document.getElementById('modalImage');
     const modalTitle = document.getElementById('modalTitle');
     const modalDate = document.getElementById('modalDate');
     const modalDescription = document.getElementById('modalDescription');

     if (modal && modalImage && modalTitle && modalDate && modalDescription) {
          modalImage.src = image;
          modalTitle.textContent = title;
          modalDate.textContent = formatDate(date);
          modalDescription.textContent = description;

          const bootstrapModal = new bootstrap.Modal(modal);
          bootstrapModal.show();
     }
}

function updateGalleryStats() {
     const stats = {
          cumpleanos: teamData.galleryPhotos.filter(p => p.category === 'cumpleanos').length,
          eventos: teamData.galleryPhotos.filter(p => p.category === 'eventos').length,
          navidad: teamData.galleryPhotos.filter(p => p.category === 'navidad').length,
          aniversarios: teamData.galleryPhotos.filter(p => p.category === 'aniversarios').length
     };

     animateNumber('birthdayPhotos', stats.cumpleanos);
     animateNumber('achievementPhotos', stats.eventos);
     animateNumber('teamPhotos', stats.navidad);
     animateNumber('totalMoments', teamData.galleryPhotos.length);
}

// ================== UTILIDADES ==================
function formatDate(dateString) {
     const date = new Date(dateString);
     const day = date.getDate();
     const month = months[date.getMonth()];
     return `${day} de ${month}`;
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
