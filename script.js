const container = document.getElementById("floating-container");

const images = [
  "face1.png",
  "face2.png",
  "cake.png",
  "flower.png",
  "teddy.png"
];

function createFloatingItem() {
  const img = document.createElement("img");
  img.src = images[Math.floor(Math.random() * images.length)];
  img.className = "float-item";

  img.style.left = Math.random() * window.innerWidth + "px";
  img.style.top = Math.random() * window.innerHeight + "px";

  container.appendChild(img);

  animate(img);
}

function animate(element) {
  let dx = (Math.random() - 0.5) * 2;
  let dy = (Math.random() - 0.5) * 2;

  function move() {
    let rect = element.getBoundingClientRect();

    if (rect.left <= 0 || rect.right >= window.innerWidth) dx *= -1;
    if (rect.top <= 0 || rect.bottom >= window.innerHeight) dy *= -1;

    element.style.left = rect.left + dx + "px";
    element.style.top = rect.top + dy + "px";

    requestAnimationFrame(move);
  }

  move();

  element.addEventListener("click", () => {
    dx *= -2;
    dy *= -2;
  });
}

// create many items
for (let i = 0; i < 20; i++) {
  createFloatingItem();
}

// Fireworks
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function randomFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const radius = Math.random() * 3 + 2;

  for (let i = 0; i < 30; i++) {
    ctx.beginPath();
    ctx.arc(
      x + Math.cos(i) * 50,
      y + Math.sin(i) * 50,
      radius,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    ctx.fill();
  }
}

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  randomFirework();
}, 800);
