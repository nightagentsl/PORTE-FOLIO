const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

// Ajuster la taille du canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circles = [];

// Créer des cercles aléatoires
function createCircle() {
    const radius = Math.random() * 20 + 5;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const dx = (Math.random() - 0.5) * 2;
    const dy = (Math.random() - 0.5) * 2;
    circles.push({ x, y, radius, dx, dy });
}

// Dessiner les cercles
function drawCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 204, 255, 0.5)`; // Couleur des cercles
        ctx.fill();
        ctx.closePath();

        // Mettre à jour la position des cercles
        circle.x += circle.dx;
        circle.y += circle.dy;

        // Rebondir les cercles sur les bords
        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
            circle.dx = -circle.dx;
        }
        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
            circle.dy = -circle.dy;
        }
    });
}

// Boucle d'animation
function animate() {
    drawCircles();
    requestAnimationFrame(animate);
}

// Créer des cercles et démarrer l'animation
for (let i = 0; i < 50; i++) {
    createCircle();
}
animate();