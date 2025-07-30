// === FONDO ANIMADO DE PUNTOS Y RED FIBRA ÓPTICA ===
window.addEventListener('DOMContentLoaded', function () {
     const canvas = document.getElementById('fiber-bg-canvas');
     if (canvas) {
          const ctx = canvas.getContext('2d');
          let w, h, points;
          const POINTS = 32;
          const SPEED = 0.5;
          const LINK_DIST = 140;
          function resize() {
               w = canvas.width = document.querySelector('.hero-shcompany').offsetWidth;
               h = canvas.height = document.querySelector('.hero-shcompany').offsetHeight;
          }
          function randomColor() {
               const colors = ['#2cd166', '#3e08c6', '#f25c05', '#fff'];
               return colors[Math.floor(Math.random() * colors.length)];
          }
          function initPoints() {
               points = [];
               for (let i = 0; i < POINTS; i++) {
                    points.push({
                         x: Math.random() * w,
                         y: Math.random() * h,
                         vx: (Math.random() - 0.5) * SPEED,
                         vy: (Math.random() - 0.5) * SPEED,
                         color: randomColor()
                    });
               }
          }
          function draw() {
               ctx.clearRect(0, 0, w, h);
               // Líneas tipo red
               for (let i = 0; i < POINTS; i++) {
                    for (let j = i + 1; j < POINTS; j++) {
                         const dx = points[i].x - points[j].x;
                         const dy = points[i].y - points[j].y;
                         const dist = Math.sqrt(dx * dx + dy * dy);
                         if (dist < LINK_DIST) {
                              ctx.save();
                              ctx.globalAlpha = 0.18 + 0.22 * (1 - dist / LINK_DIST);
                              ctx.strokeStyle = points[i].color;
                              ctx.lineWidth = 1.5;
                              ctx.beginPath();
                              ctx.moveTo(points[i].x, points[i].y);
                              ctx.lineTo(points[j].x, points[j].y);
                              ctx.stroke();
                              ctx.restore();
                         }
                    }
               }
               // Puntos
               for (let i = 0; i < POINTS; i++) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(points[i].x, points[i].y, 4.5, 0, 2 * Math.PI);
                    ctx.fillStyle = points[i].color;
                    ctx.shadowColor = points[i].color;
                    ctx.shadowBlur = 12;
                    ctx.globalAlpha = 0.85;
                    ctx.fill();
                    ctx.restore();
               }
          }
          function update() {
               for (let i = 0; i < POINTS; i++) {
                    points[i].x += points[i].vx;
                    points[i].y += points[i].vy;
                    if (points[i].x < 0 || points[i].x > w) points[i].vx *= -1;
                    if (points[i].y < 0 || points[i].y > h) points[i].vy *= -1;
               }
          }
          function loop() {
               update();
               draw();
               requestAnimationFrame(loop);
          }
          window.addEventListener('resize', () => { resize(); initPoints(); });
          resize();
          initPoints();
          loop();
     }
});
