"use strict";

const dateInput = document.getElementById('target-date');
const startBtn = document.getElementById('start-btn');
const displayContainer = document.getElementById('countdown-display');
const messageBox = document.getElementById('message');

// Elementos del cronómetro
const elements = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
};

let countdownInterval = null;

// Validación de entrada para habilitar el control de inicio
dateInput.addEventListener('input', () => {
  startBtn.disabled = !dateInput.value;
});

startBtn.addEventListener('click', () => {
  const targetDate = new Date(dateInput.value).getTime();

  if (isNaN(targetDate)) return;

  // Reset de estado previo
  if (countdownInterval) clearInterval(countdownInterval);
  messageBox.textContent = "";
  displayContainer.classList.remove('critical');

  initCountdown(targetDate);
});

/**
 * Ejecuta la secuencia de actualización temporal
 * @param {number} targetTime - Timestamp en milisegundos
 */
function initCountdown(targetTime) {
  const update = () => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      renderTime(0, 0, 0, 0);
      messageBox.textContent = "¡OBJETIVO ALCANZADO!";
      return;
    }

    // Derivación de unidades temporales mediante aritmética de residuos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Activación de estado visual crítico (remanente < 24h)
    if (distance < (1000 * 60 * 60 * 24)) {
      displayContainer.classList.add('critical');
    }

    renderTime(days, hours, minutes, seconds);
  };

  update(); // Ejecución inmediata para evitar latencia inicial de 1s
  countdownInterval = setInterval(update, 1000);
}

function renderTime(d, h, m, s) {
  elements.days.textContent = formatDigits(d);
  elements.hours.textContent = formatDigits(h);
  elements.minutes.textContent = formatDigits(m);
  elements.seconds.textContent = formatDigits(s);
}

function formatDigits(num) {
  return num.toString().padStart(2, '0');
}
