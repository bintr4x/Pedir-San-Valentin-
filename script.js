const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const answerSection = document.getElementById("answerSection");
const backBtn = document.getElementById("backBtn");
const question = document.querySelector(".question");
const buttons = document.querySelector(".buttons");
const bgVideo = document.getElementById("bgVideo");
const heartsBackground = document.querySelector(".hearts-background");
const catContainer = document.getElementById("catContainer");
const titleText = document.getElementById("titleText");
const messageText = document.getElementById("messageText");

// Verificar si ya respondió "Sí" antes
window.addEventListener("load", () => {
  if (localStorage.getItem("sanValentin") === "si") {
    mostrarRespuestaSi();
  }
});

// Cuando dice que SÍ ❤️
yesBtn.addEventListener("click", () => {
  localStorage.setItem("sanValentin", "si");
  mostrarRespuestaSi();
});

function mostrarRespuestaSi() {
  // Ocultar todo lo inicial
  catContainer.classList.add("hidden");
  titleText.classList.add("hidden");
  messageText.classList.add("hidden");
  question.classList.add("hidden");
  buttons.classList.add("hidden");
  
  // Mostrar respuesta con gatitos abrazándose
  answerSection.classList.remove("hidden");

  // MOSTRAR Y REPRODUCIR VIDEO DE FONDO 🎥💜
  bgVideo.classList.remove("hidden");
  bgVideo.classList.add("show");
  bgVideo.play();
  
  // Ocultar corazones animados del fondo
  heartsBackground.style.display = "none";

  // Vibración en móvil
  if (navigator.vibrate) {
    navigator.vibrate([80, 40, 80]);
  }
}

// Botón CORAZÓN para VOLVER
backBtn.addEventListener("click", () => {
  localStorage.removeItem("sanValentin");
  
  // Mostrar todo lo inicial de nuevo
  catContainer.classList.remove("hidden");
  titleText.classList.remove("hidden");
  messageText.classList.remove("hidden");
  question.classList.remove("hidden");
  buttons.classList.remove("hidden");
  
  // Ocultar respuesta
  answerSection.classList.add("hidden");
  
  // OCULTAR VIDEO Y VOLVER A CORAZONES
  bgVideo.classList.remove("show");
  bgVideo.classList.add("hidden");
  bgVideo.pause();
  heartsBackground.style.display = "block";
});

// ========================================
// BOTÓN "NO" QUE HUYE POR LA PANTALLA 🏃‍♂️
// ========================================

// Para PC: cuando pase el mouse encima
noBtn.addEventListener("mouseenter", () => {
  moverBotonAleatorio();
});

// Para móvil: cuando intente tocar
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moverBotonAleatorio();
});

function moverBotonAleatorio() {
  const card = document.querySelector(".card");
  const cardRect = card.getBoundingClientRect();
  
  const maxX = cardRect.width - noBtn.offsetWidth - 40;
  const maxY = cardRect.height - noBtn.offsetHeight - 40;
  
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  
  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  noBtn.style.transform = "scale(0.95)";
  
  setTimeout(() => {
    noBtn.style.transform = "scale(1)";
  }, 100);
}




